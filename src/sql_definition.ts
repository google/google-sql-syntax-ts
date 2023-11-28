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

/** Function parameter */
export interface FunctionParameter {
  arg: string;
  markdown?: boolean;
  description?: string;
}

/** Function signature */
export interface FunctionSignature {
  args: string | FunctionParameter[];
  url?: string;
  description?: string;
}

/**
 * Converts a function signature into a string (i.e. 'arg1, arg2, ..., argN').
 */
export function signatureToString(signature: FunctionSignature): string {
  if (typeof signature.args === "string") {
    return signature.args;
  }

  const parameters = signature.args;
  if (!parameters.length) return "";
  let str = parameters[0].arg;
  for (let i = 1; i < parameters.length; i++) {
    str += ", " + parameters[i].arg;
  }
  return str;
}

/**
 * Function description.
 * A function can support multiple signatures via FunctionSignature.
 * In this case, each signature can have its own url and description.
 * If they are undefined, the url and description of the FunctionDescription
 * will be used.
 */
export interface FunctionDescription {
  name: string;
  args: string | FunctionSignature[];
  url?: string;
  description: string;
}

/** Clause that's made of two strings. */
export interface ConnectedClause {
  first: string;
  second: string;
}

/**
 * Definition of SQL-dialect-specific constants which are used for parsing and
 * syntax highlighting a query.
 */
export interface SqlDefinition {
  /** Returns clause words used in this SQL dialect. */
  getClauseWords(): string[];

  /** Returns trie containing clause words used in this SQL dialect. */
  getClauseWordsTrie(): Trie;

  /** returns clause words that should be connected when formatting a query. */
  getConnectedClauseWords(): ConnectedClause[];

  /** Returns keywords in this SQL dialect. */
  getKeywords(): string[];

  /** Returns trie containing keywords in this SQL dialect. */
  getKeywordsTrie(): Trie;

  /** Returns trie containing reserved words in this SQL dialect. */
  getReservedWordsTrie(): Trie;

  /**
   * Returns function names in this SQL dialect.
   */
  getFunctions(): string[];

  /**
   * Returns trie containing functions in this SQL dialect.  The trie values
   * are arguments to the functions.
   */
  getFunctionsTrie(): Trie;

  /** Returns TVF function names in this SQL dialect. */
  getTvfFunctions(): string[];

  /**
   * Returns trie containing TVF functions in this SQL dialect. The trie values
   * are arguments to the functions.
   */
  getTvfFunctionsTrie(): Trie;

  /**
   * Returns character sequences that can start single-line comments in this
   * SQL dialect.
   */
  getSingleLineCommentStarts(): string[];

  /** Returns starting character for quoting identifiers. */
  getBracketQuoteStart(): string;

  /** Returns ending character for quoting identifiers. */
  getBracketQuoteEnd(): string;

  /**
   * Returns character sequences that start and end single-line strings in this
   * SQL dialect.
   */
  getSingleLineStringChars(): string[];

  /**
   * Returns character sequences that start and end multi-line strings in this
   * SQL dialect.
   */
  getMultiLineStringChars(): string[];

  /** Returns whether record fields are can be used in a query. */
  isRecordFieldInQuerySupported(): boolean;

  /** Returns whether repeated fields are can be used in from clause. */
  isRepeatedFieldInFromSupported(): boolean;

  /**
   * Returns separator between project and dataset ID in a fully-qualified
   * table name.
   */
  getProjectSeparator(): string;

  /** Returns whether wildcard table names can be used in query. */
  isWildcardTableSupported(): boolean;

  /**
   * Returns whether user-defined functions can be defined and used in query.
   */
  isUdfSupported(): boolean;

  /** Returns trie containing type names in this SQL dialect. */
  getTypeNamesTrie(): Trie;

  /** Returns trie containing snippets that can be used in query */
  getSnippetsTrie?(): Trie;
}

/** Util function for converting string arrays into tries. */
export function makeTrie(strs: string[]) {
  const trie = new Trie();
  for (const str of strs) {
    trie.set(str, true);
  }
  return trie;
}

/**
 * Builds Trie of reserved words. It's needed for tokenizer to recognize
 * reserved words.
 */
export function buildReservedWordsTrie(
  keywords: Trie,
  clauseWords: Trie
): Trie {
  const reservedWords = new Trie();

  for (const str of keywords.getKeys()) {
    reservedWords.set(str, true);
  }

  for (const words of clauseWords.getKeys()) {
    const strs = words.split(" ");
    for (const str of strs) {
      reservedWords.set(str, true);
    }
  }

  return reservedWords;
}
