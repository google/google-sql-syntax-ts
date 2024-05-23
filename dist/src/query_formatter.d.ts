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
import { SqlDefinition } from './sql_definition';
/**
 * Applies line formatting and keyword uppercasing to the query.  Looks for
 * keywords to capitalize; looks for clauses to place on their own line; looks
 * for other words (ie AND, OR) to put on new lines. Throws an exception if the
 * formatting fails. Returns the resulting formatted SQL, or null if we failed
 * to format the query.
 */
export declare class QueryFormatter {
    private readonly sqlDefinition;
    private readonly stringsAndComments;
    constructor(sqlDefinition: SqlDefinition);
    /** Formats the given query string. */
    formatQuery(query: string): string;
    /**
     * Indents the query properly, trimming whitespace per line and adding
     * leading whitespace as appropriate.
     */
    private indent;
    /**
     * Adds the given string to the registered set of strings and comments,
     * returning a string that can be mapped back to this registered string when
     * we're done formatting. Both a prefix and a suffix are required as we may
     * add these strings and comments back into the query in multiple passes,
     * which would be unsafe with only a prefix and a non-zero padded number.
     */
    private addToStringsAndComments;
    /**
     * Returns whether the given string is a single-line comment
     */
    private isSingleLineComment;
    /**
     * Replaces strings and comments in the query with their actual value,
     * instead of the placeholder we inserted earlier with singleLineComments
     * determining whether to update single-line comments or all
     * non-single-line-comment entries.
     */
    private replaceStringsAndComments;
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
    private getSingleLineCommentRegex;
    private getMultiLineCommentRegex;
    private getSingleLineStringRegex;
    private getMultiLineStringRegex;
    private getEscapedWordsRegex;
    /**
     * Finds any string literals, comments or escaped words and sub them out. This
     * regex should match all escaped words (like [table.select]), strings and
     * comments, including unterminated ones that reach end-of-string. The
     * replacement should replace them with reasonably unique strings so we can
     * swap them back later.
     */
    private getStringsAndCommentsRegEx;
}
