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
export declare function signatureToString(signature: FunctionSignature): string;
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
    /** Returns clause word names used in this SQL dialect. */
    getClauseWords(): string[];
    /** Returns clause words used in this SQL dialect. */
    getClauseWordsWithInfo?(): Array<{
        name: string;
    }>;
    /** returns clause words that should be connected when formatting a query. */
    getConnectedClauseWords(): ConnectedClause[];
    /** Returns keywords in this SQL dialect. */
    getKeywords(): string[];
    /** Returns reserved words in this SQL dialect. */
    getReservedWords?(): string[];
    /** Returns function names in this SQL dialect. */
    getFunctions(): string[];
    /** Returns functions in this SQL dialect. */
    getMergedSqlFunctions?(): Array<{
        name: string;
    }>;
    /** Returns TVF function names in this SQL dialect. */
    getTvfFunctions(): string[];
    /** Returns TVF functions in this SQL dialect. */
    getTvfFunctionsWithInfo?(): Array<{
        name: string;
    }>;
    /** Returns type names in this SQL dialect. */
    getTypeNames?(): string[];
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
    /** Returns snippets that can be used in query */
    getSnippets?(): Array<{
        name: string;
        snippetText: string;
    }>;
}
