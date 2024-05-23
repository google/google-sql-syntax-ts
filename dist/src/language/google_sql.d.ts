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
import * as monaco from "monaco-editor";
import { FunctionDescription, SqlDefinition } from "../sql_definition";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;
/** Descriptions used for some specific SQL functions. */
export interface DocsUrls {
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_APPEND: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_INSERT: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE2: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE1: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_REMOVE: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_SET: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_STRIP_NULLS: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_BOOL: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_DOUBLE: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_INT64: string;
    CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_STRING: string;
}
/**
 * SQL definition for GoogleSQL, also known as standard SQL.
 */
export declare class GoogleSqlDefinition implements SqlDefinition {
    private readonly docsUrls?;
    constructor(docsUrls?: DocsUrls | undefined);
    private readonly CLAUSE_WORDS_WITH_TYPES;
    /** Clauses. */
    readonly CLAUSE_WORDS: string[];
    /** Clause words that should be connected when formatting a query. */
    private readonly CONNECTED_CLAUSE_WORDS;
    /** Keywords. */
    readonly KEYWORDS: string[];
    /** Reserved words. */
    private readonly RESERVED_WORDS;
    /** Functions with their possible arguments. */
    private readonly FUNCTIONS_WITH_INFO;
    mergedSqlFunctions(): FunctionDescription[];
    /** Functions. */
    readonly FUNCTIONS: string[];
    /** Table-valued functions with their possible arguments. */
    private readonly TVF_FUNCTIONS_WITH_INFO;
    /** Table-valued functions. */
    private readonly TVF_FUNCTIONS;
    /**
     * Type names. From
     * https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types
     */
    private readonly TYPE_NAMES;
    readonly OPERATORS: string[];
    getClauseWords(): string[];
    getClauseWordsWithInfo(): {
        name: string;
        type: string;
    }[];
    getConnectedClauseWords(): {
        first: string;
        second: string;
    }[];
    getKeywords(): string[];
    getReservedWords(): string[];
    getFunctions(): string[];
    getMergedSqlFunctions(): FunctionDescription[];
    getTvfFunctions(): string[];
    getTvfFunctionsWithInfo(): ({
        name: string;
        args: string;
        description?: undefined;
        url?: undefined;
    } | {
        name: string;
        args: string;
        description: string;
        url: string;
    })[];
    getTypeNames(): string[];
    getSingleLineCommentStarts(): string[];
    getBracketQuoteStart(): string;
    getBracketQuoteEnd(): string;
    getSingleLineStringChars(): string[];
    getMultiLineStringChars(): string[];
    isRecordFieldInQuerySupported(): boolean;
    isRepeatedFieldInFromSupported(): boolean;
    getProjectSeparator(): string;
    isWildcardTableSupported(): boolean;
    isUdfSupported(): boolean;
    getSnippets(): {
        name: string;
        snippetText: string;
    }[];
}
/**
 * Google sql language specifics extended from monacos sql parser, which can be
 * found here:
 * https://github.com/microsoft/monaco-languages/blob/master/src/sql/sql.ts as
 */
export declare const googleSqlLanguageConfiguration: IRichLanguageConfiguration;
/** The exported languaged definition for google sql. */
export declare interface GoogleSqlLanguageDefinition extends ILanguage {
    keywords: string[];
    operators: string[];
    symbols: RegExp;
    escapes: RegExp;
    digits: RegExp;
    octaldigits: RegExp;
    binarydigits: RegExp;
    hexdigits: RegExp;
    integersuffix: RegExp;
    floatsuffix: RegExp;
}
/** The exported languaged definition for google sql. */
export declare function getGoogleSqlLanguageDefinition(docsUrls: DocsUrls): GoogleSqlLanguageDefinition;
