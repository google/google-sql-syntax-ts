/**
 * @license
 * Copyright 2023 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {SqlDefinition} from './sql_definition';

/** Reasonably unique keywords. */
const UNIQUE_PREFIX = '%%%%%$BOOM@';
const UNIQUE_SUFFIX = '%%$CHICKEN@';

const NEWLINE_WORDS = [
  '\\s(AND\\s+)',
  '\\s(OR\\s+)',
  '\\s(ON\\s+)',
  '\\s(RETURNS\\s+)',
  '\\s(LANGUAGE\\s+)',
  '\\s(CASE\\s+)',
  '\\s(WHEN\\s+)',
  '\\s(END(\\s+|$))',
  '\\s(ELSE\\s+)',
];

/**
 * Applies line formatting and keyword uppercasing to the query.  Looks for
 * keywords to capitalize; looks for clauses to place on their own line; looks
 * for other words (ie AND, OR) to put on new lines. Throws an exception if the
 * formatting fails. Returns the resulting formatted SQL, or null if we failed
 * to format the query.
 */
export class QueryFormatter {
  private readonly stringsAndComments: string[] = [];

  constructor(private readonly sqlDefinition: SqlDefinition) {}

  /** Formats the given query string. */
  formatQuery(query: string): string {
    query = query.replace(
        this.getStringsAndCommentsRegEx(),
        (str) => this.addToStringsAndComments(str),
    );

    // Replace all whitespace with a single space. We'll add in line breaks and
    // indentation later as appropriate.
    query = query.replace(/(\s|\n)+/g, ' ');

    // Uppercase all keywords.
    for (const keyword of this.sqlDefinition.getKeywords()) {
      // We exclude keywords that are preceded or followed by '.', as these are
      // likely part of table or field names.
      const re = new RegExp('[^.-]\\b(' + keyword + ')\\b[^.-]', 'ig');
      query = query.replace(re, (v) => v.toUpperCase());
    }

    // Uppercase all functions.
    for (const func of this.sqlDefinition.getFunctions()) {
      const re = new RegExp('[^.]\\b(' + func + '\\()', 'ig');
      query = query.replace(re, (v) => v.toUpperCase());
    }

    // Uppercase all newline words and add newlines.
    for (const newlineWord of NEWLINE_WORDS) {
      const re = new RegExp(newlineWord, 'ig');
      query = query.replace(
          re,
          (v) => '\n' + v.toUpperCase().replace(/^\s+|\s+$/g, '') + ' ',
      );
    }

    // 'OR' is a newline word, so it'll have a line break inserted before it,
    // which breaks detection of 'CREATE OR REPLACE VIEW' and
    // 'CREATE OR REPLACE TABLE' clauses. Stitch those clauses back together.
    query = query.replace(
        new RegExp(/create\s+or replace /gi),
        (v) => v.toUpperCase().replace(/\s+/g, ' '),
    );

    // Uppercase all clauses and add newlines.
    for (const clause of this.sqlDefinition.getClauseWords()) {
      const re = new RegExp('\\b(' + clause + ')\\b', 'ig');
      query = query.replace(
          re,
          (v) => '\n' + v.toUpperCase().trim() + '\n',
      );
    }

    // Reconnect clause words that should stay together on the same line.
    for (const connectClause of this.sqlDefinition.getConnectedClauseWords()) {
      // Connect the two words if they are separated only by whitespace.
      const regex = new RegExp(
          '(' + regExpEscape(connectClause.first) + ')(\\s|\\n)+(' +
              regExpEscape(connectClause.second) + ')',
          'g',
      );
      query = query.replace(regex, '$1 $3');
    }

    // Remove whitespace before commas.
    query = query.replace(/( +)?,/g, ',');
    // We're going to add newlines after the commas that are not within
    // function calls.
    const openParenIndices = [];
    for (let i = 0; i < query.length; i++) {
      switch (query.charAt(i)) {
        case '(':
          openParenIndices.push(i);
          break;

        case ')':
          openParenIndices.pop();
          break;

        case ',':
          // Look at the most recently opened paren and check if a function
          // name precedes it.
          const lastParenIndex = openParenIndices[openParenIndices.length - 1];
          const funcNameMatch = lastParenIndex !== undefined &&
              query.substring(0, lastParenIndex).match(/([\w]*)[\s]*$/);
          const isFuncCall = funcNameMatch &&
              this.sqlDefinition.getFunctions().includes(funcNameMatch[1]);
          // Don't split if this is is a DML 'VALUES' clause and we're in
          // between parentheses.
          const isDmlValuesCall = lastParenIndex !== undefined &&
              query.substring(0, lastParenIndex)
                  .match(/values(\s|\(.*?\),)*$/i);
          if (!isFuncCall && !isDmlValuesCall) {
            // Add a newline.
            query = query.substring(0, i) + ',\n' + query.substring(i + 1);
          }
          break;

        default:
      }
    }

    // Put OVER clauses on a single line with whatever precedes them.
    query = query.replace(/(\s|\n)*OVER(\s|\n)*\((.|\n)*?\)/g, (match) => {
      // Replace all whitespace with a single space, removing any after the
      // initial open paren.
      return match.replace(/\(?(\s|\n)+/g, (submatch) => {
        if (submatch.indexOf('(') > -1) {
          return '(';
        } else {
          return ' ';
        }
      });
    });

    // Force CASE statement condition to be on the same line: everything between
    // WHEN and (non-inclusive) WHEN, ELSE or END.
    query = query.replace(
        /WHEN(\s|\n)*(.|\n)*?(?:\nELSE|\nEND|\nWHEN)/g,
        (match) => {
          // Replace newlines with a space.
          match = match.replace(/(\n)+(?!ELSE|END|WHEN)/g, ' ');
          // Replace multiple spaces with one space.
          return match.replace(/ +/g, ' ');
        },
    );

    // Replace all single-line comments, then indent for nicer formatting.
    // Finally we add all other strings and comments back in.
    query = this.replaceStringsAndComments(query, true /* single-line */);
    query = this.indent(query);
    query = this.replaceStringsAndComments(query, false /* multi-line */);
    // Remove whitespace before #standardsql and #legacysql tags.
    query = query.replace(/^ *#standardsql/i, '#standardSQL');
    query = query.replace(/^ *#legacysql/i, '#legacySQL');

    return query;
  }

  /**
   * Indents the query properly, trimming whitespace per line and adding
   * leading whitespace as appropriate.
   */
  private indent(query: string): string {
    // Do proper indentation.
    const lines = query.split(/(?:\s*?\n\s*?)+/);
    let indent = 0;
    for (let i = 0; i < lines.length; i++) {
      const trimmed = lines[i].replace(/^\s+|\s+$/g, '');
      // Remove blank lines.
      if (trimmed === '') {
        lines.splice(i, 1);
        i -= 1;
        continue;
      }

      // Check if starts with clause.
      let clauseFound = false;
      for (const clause of this.sqlDefinition.getClauseWords()) {
        if (!clauseFound) {
          const re = new RegExp('^' + clause + '\\b', 'i');
          if (trimmed.match(re) != null) {
            clauseFound = true;
          }
        }
      }

      let indentation = '  '.repeat(indent);

      // If it's not a CLAUSE_WORD, indent by two spaces.
      if (!clauseFound) {
        indentation += '  ';
      }
      // If it's WHEN or ELSE, indent by two more spaces for proper
      // indentation of the CASE statement.
      if (trimmed.match(/^when\b/i) || trimmed.match(/^else\b/i)) {
        indentation += '  ';
      }

      lines[i] = indentation + trimmed;

      // Figure out how to indent the next line
      const lineWithoutComment = trimmed.replace(
          this.getStringsAndCommentsRegEx(),
          '',
      );
      const numOpenParens = lineWithoutComment.split('(').length - 1;
      const numCloseParens = lineWithoutComment.split(')').length - 1;
      indent = Math.max(0, indent + numOpenParens - numCloseParens);
    }
    query = lines.join('\n');
    return query;
  }

  /**
   * Adds the given string to the registered set of strings and comments,
   * returning a string that can be mapped back to this registered string when
   * we're done formatting. Both a prefix and a suffix are required as we may
   * add these strings and comments back into the query in multiple passes,
   * which would be unsafe with only a prefix and a non-zero padded number.
   */
  private addToStringsAndComments(str: string): string {
    this.stringsAndComments.push(str);
    return `${UNIQUE_PREFIX}${this.stringsAndComments.length}${UNIQUE_SUFFIX}`;
  }

  /**
   * Returns whether the given string is a single-line comment
   */
  private isSingleLineComment(str: string): boolean {
    return str.match('^' + this.getSingleLineCommentRegex()) != null;
  }

  /**
   * Replaces strings and comments in the query with their actual value,
   * instead of the placeholder we inserted earlier with singleLineComments
   * determining whether to update single-line comments or all
   * non-single-line-comment entries.
   */
  private replaceStringsAndComments(
      query: string,
      singleLineComments: boolean,
      ): string {
    // Add back in the strings and comments we removed earlier.
    for (const [index, str] of this.stringsAndComments.entries()) {
      if (this.isSingleLineComment(str) === singleLineComments) {
        // Global replace, so if someone guesses our replacement format,
        // they'll get some random string from their query in its place.
        // Unlikely.
        query = query.replace(
            new RegExp(
                regExpEscape(
                    `${UNIQUE_PREFIX}${index + 1}${UNIQUE_SUFFIX}`,
                    ),
                'g',
                ),
            () =>
                // Wrap in a function to disable String.prototype.replace's
                // special handling for the $ character, which could be
                // present in the user's string or comment.
            str,
        );
      }
    }
    return query;
  }

  /**
   * A single line comment includes the whitespace before the starting character
   * sequence (--, for example), followed by all characters up to the next
   * newline or the end of string. The preceding whitespace is preserved in
   * order to preserve the position of the comment, either on the same line as
   * the preceding symbol or keyword, or on a line by itself.
   * Examples:
   * SELECT
   *   foo -- comment on the same line as a symbol
   * FROM
   *   -- comment on its own line
   *   bar;
   */
  private getSingleLineCommentRegex(): string {
    const startsRegex = this.sqlDefinition.getSingleLineCommentStarts()
                            .map(regExpEscape)
                            .join('|');
    return '(\\s|\\n)*(' + startsRegex + ').*?(\\n|$)';
  }

  // A multi-line comment stats with /* and ends with a matching */ or end of
  // string.
  private getMultiLineCommentRegex(): string {
    return '(\\/\\*(.|\\n)*?(\\*\\/|$))';
  }

  private getSingleLineStringRegex(): string {
    return this.sqlDefinition.getSingleLineStringChars()
        .map((stringChars: string) => {
          const regexChars = regExpEscape(stringChars);
          return (
              '(' + regexChars + regexChars + ')|(' + regexChars +
              '.*?([^\\\\]' + regexChars + '|\\n|$))');
        })
        .join('|');
  }

  private getMultiLineStringRegex(): string {
    return this.sqlDefinition.getMultiLineStringChars()
        .map((stringChars: string) => {
          const regexChars = regExpEscape(stringChars);
          return (
              '(' + regexChars + regexChars + ')|(' + regexChars +
              '(.|\\n)*?([^\\\\]' + regexChars + '|$))');
        })
        .join('|');
  }

  private getEscapedWordsRegex(): string {
    return (
        regExpEscape(this.sqlDefinition.getBracketQuoteStart()) + '(.*?)' +
        regExpEscape(this.sqlDefinition.getBracketQuoteEnd()));
  }

  /**
   * Finds any string literals, comments or escaped words and sub them out. This
   * regex should match all escaped words (like [table.select]), strings and
   * comments, including unterminated ones that reach end-of-string. The
   * replacement should replace them with reasonably unique strings so we can
   * swap them back later.
   */
  private getStringsAndCommentsRegEx(): RegExp {
    return new RegExp(
        [
          this.getEscapedWordsRegex(),
          this.getMultiLineStringRegex(),
          this.getSingleLineStringRegex(),
          this.getMultiLineCommentRegex(),
          this.getSingleLineCommentRegex(),
        ].filter(Boolean)
            .join('|'),
        'g',
    );
  }
}

function regExpEscape(s: string): string {
  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1')
      .replace(/\x08/g, '\\x08');
};