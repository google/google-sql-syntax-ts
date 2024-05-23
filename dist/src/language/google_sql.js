"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleSqlLanguageDefinition = exports.googleSqlLanguageConfiguration = exports.GoogleSqlDefinition = void 0;
const bigquery_functions_1 = require("./bigquery_functions");
const snippets_1 = require("./snippets");
/**
 * SQL definition for GoogleSQL, also known as standard SQL.
 */
class GoogleSqlDefinition {
    constructor(docsUrls) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.docsUrls = docsUrls;
        this.CLAUSE_WORDS_WITH_TYPES = [
            { name: "SELECT", type: "select" },
            { name: "FROM", type: "from" },
            { name: "INNER JOIN", type: "join" },
            { name: "CROSS JOIN", type: "join" },
            { name: "FULL OUTER JOIN", type: "join" },
            { name: "FULL JOIN", type: "join" },
            { name: "LEFT OUTER JOIN", type: "join" },
            { name: "LEFT JOIN", type: "join" },
            { name: "RIGHT OUTER JOIN", type: "join" },
            { name: "RIGHT JOIN", type: "join" },
            { name: "JOIN", type: "join" },
            { name: "ON", type: "on" },
            { name: "USING", type: "using" },
            { name: "WHERE", type: "where" },
            { name: "GROUP BY", type: "group" },
            { name: "GROUPING SETS", type: "group" },
            { name: "HAVING", type: "having" },
            { name: "ORDER BY", type: "order" },
            { name: "NULLS FIRST", type: "order" },
            { name: "NULLS LAST", type: "order" },
            { name: "UNION ALL", type: "union" },
            { name: "UNION DISTINCT", type: "union" },
            { name: "LIMIT", type: "limit" },
            { name: "OFFSET", type: "offset" },
            { name: "WITH", type: "with" },
            { name: "WITH DATA", type: "with" },
            { name: "WITH PARTITION COLUMNS", type: "partition" },
            { name: "PARTITION BY", type: "partition" },
            { name: "WINDOW", type: "window" },
            { name: "CREATE TEMPORARY FUNCTION", type: "udf" },
            { name: "CREATE TEMP FUNCTION", type: "udf" },
            { name: "CREATE FUNCTION IF NOT EXISTS", type: "udf" },
            { name: "CREATE OR REPLACE FUNCTION", type: "udf" },
            { name: "CREATE FUNCTION", type: "udf" },
            { name: "CREATE TEMPORARY AGGREGATE FUNCTION", type: "udaf" },
            { name: "CREATE TEMP AGGREGATE FUNCTION", type: "udaf" },
            { name: "CREATE AGGREGATE FUNCTION IF NOT EXISTS", type: "udaf" },
            { name: "CREATE OR REPLACE AGGREGATE FUNCTION", type: "udaf" },
            { name: "CREATE AGGREGATE FUNCTION", type: "udf" },
            { name: "CREATE PROCEDURE", type: "procedure" },
            { name: "CREATE OR REPLACE PROCEDURE", type: "procedure" },
            { name: "CREATE PROCEDURE IF NOT EXISTS", type: "procedure" },
            { name: "DELETE", type: "delete" },
            { name: "INSERT INTO", type: "insert" },
            { name: "INSERT", type: "insert" },
            { name: "UPDATE", type: "update" },
            { name: "MERGE INTO", type: "merge" },
            { name: "MERGE", type: "merge" },
            { name: "WHEN MATCHED", type: "match" },
            { name: "WHEN NOT MATCHED BY TARGET", type: "match" },
            { name: "WHEN NOT MATCHED BY SOURCE", type: "match" },
            { name: "WHEN NOT MATCHED", type: "match" },
            { name: "SET", type: "set" },
            { name: "VALUES", type: "values" },
            { name: "CREATE TABLE IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE TABLE", type: "create" },
            { name: "CREATE TABLE", type: "create" },
            { name: "CREATE EXTERNAL TABLE IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE EXTERNAL TABLE", type: "create" },
            { name: "CREATE EXTERNAL TABLE", type: "create" },
            { name: "CREATE MATERIALIZED VIEW IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE MATERIALIZED VIEW", type: "create" },
            { name: "CREATE MATERIALIZED VIEW", type: "create" },
            { name: "CREATE VIEW IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE VIEW", type: "create" },
            { name: "CREATE VIEW", type: "create" },
            { name: "CREATE MODEL IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE MODEL", type: "create" },
            { name: "CREATE MODEL", type: "create" },
            { name: "CREATE ROW ACCESS POLICY IF NOT EXISTS", type: "create" },
            { name: "CREATE OR REPLACE ROW ACCESS POLICY", type: "create" },
            { name: "CREATE ROW ACCESS POLICY", type: "create" },
            { name: "CREATE RESERVATION", type: "create" },
            { name: "CREATE RESERVATION IF NOT EXISTS", type: "create" },
            { name: "CREATE CAPACITY", type: "create" },
            { name: "CREATE ASSIGNMENT", type: "create" },
            { name: "CREATE SCHEMA", type: "create" },
            { name: "CREATE SCHEMA IF NOT EXISTS", type: "create" },
            { name: "CREATE SNAPSHOT TABLE IF NOT EXISTS", type: "create" },
            { name: "CREATE SNAPSHOT TABLE", type: "create" },
            { name: "CREATE SEARCH INDEX", type: "create" },
            { name: "CREATE SEARCH INDEX IF NOT EXISTS", type: "create" },
            { name: "DROP TABLE IF EXISTS", type: "drop" },
            { name: "DROP TABLE", type: "drop" },
            { name: "DROP EXTERNAL TABLE IF EXISTS", type: "drop" },
            { name: "DROP EXTERNAL TABLE", type: "drop" },
            { name: "DROP MATERIALIZED VIEW IF EXISTS", type: "drop" },
            { name: "DROP MATERIALIZED VIEW", type: "drop" },
            { name: "DROP VIEW IF EXISTS", type: "drop" },
            { name: "DROP VIEW", type: "drop" },
            { name: "DROP FUNCTION IF EXISTS", type: "drop" },
            { name: "DROP FUNCTION", type: "drop" },
            { name: "DROP PROCEDURE", type: "drop" },
            { name: "DROP PROCEDURE IF EXISTS", type: "drop" },
            { name: "DROP ROW ACCESS POLICY", type: "drop" },
            { name: "DROP ROW ACCESS POLICY IF EXISTS", type: "drop" },
            { name: "DROP ALL ROW ACCESS POLICIES", type: "drop" },
            { name: "TRUNCATE TABLE", type: "drop" },
            { name: "DROP RESERVATION IF EXISTS", type: "drop" },
            { name: "DROP RESERVATION", type: "drop" },
            { name: "DROP CAPACITY IF EXISTS", type: "drop" },
            { name: "DROP CAPACITY", type: "drop" },
            { name: "DROP ASSIGNMENT IF EXISTS", type: "drop" },
            { name: "DROP ASSIGNMENT", type: "drop" },
            { name: "DROP SCHEMA IF EXISTS", type: "drop" },
            { name: "DROP SCHEMA", type: "drop" },
            { name: "DROP SNAPSHOT TABLE IF EXISTS", type: "drop" },
            { name: "DROP SNAPSHOT TABLE", type: "drop" },
            { name: "DROP SEARCH INDEX", type: "drop" },
            { name: "DROP SEARCH INDEX IF EXISTS", type: "drop" },
            { name: "CLUSTER BY", type: "cluster" },
            { name: "ALTER TABLE IF EXISTS", type: "alter" },
            { name: "ALTER TABLE", type: "alter" },
            { name: "ALTER MATERIALIZED VIEW IF EXISTS", type: "alter" },
            { name: "ALTER MATERIALIZED VIEW", type: "alter" },
            { name: "ALTER VIEW IF EXISTS", type: "alter" },
            { name: "ALTER VIEW", type: "alter" },
            { name: "ALTER SCHEMA IF EXISTS", type: "alter" },
            { name: "ALTER SCHEMA", type: "alter" },
            { name: "ALTER BI_CAPACITY", type: "alter" },
            { name: "ALTER CAPACITY", type: "alter" },
            { name: "ALTER ORGANIZATION", type: "alter" },
            { name: "ALTER PROJECT", type: "alter" },
            { name: "ALTER RESERVATION", type: "alter" },
            { name: "DECLARE", type: "declare" },
            { name: "SET", type: "set" },
            { name: "IF", type: "if" },
            { name: "ELSE", type: "else" },
            { name: "ELSE IF", type: "else" },
            { name: "EXECUTE IMMEDIATE", type: "execute immediate" },
            { name: "LOOP", type: "loop" },
            { name: "WHILE", type: "loop" },
            { name: "BEGIN", type: "begin" },
            { name: "BEGIN TRANSACTION", type: "begin" },
            { name: "COMMIT", type: "end" },
            { name: "COMMIT TRANSACTION", type: "end" },
            { name: "ROLLBACK", type: "end" },
            { name: "ROLLBACK TRANSACTION", type: "end" },
            { name: "END", type: "end" },
            { name: "END IF", type: "end" },
            { name: "END WHILE", type: "end" },
            { name: "END LOOP", type: "end" },
            { name: "CONTINUE", type: "continue" },
            { name: "ITERATE", type: "continue" },
            { name: "BREAK", type: "break" },
            { name: "LEAVE", type: "break" },
            { name: "CALL", type: "call" },
            { name: "ASSERT", type: "assert" },
            { name: "EXPORT DATA", type: "export" },
            { name: "EXPORT DATA WITH CONNECTION", type: "export" },
            { name: "EXPORT TABLE METADATA", type: "export" },
            { name: "LOAD DATA INTO", type: "load" },
            { name: "LOAD DATA OVERWRITE", type: "load" },
            { name: "PARTITIONS", type: "load" },
            { name: "OVERWRITE PARTITIONS", type: "load" },
            { name: "FROM FILES", type: "load" },
            { name: "ADD CONSTRAINT", type: "alter" },
            { name: "ADD FOREIGN KEY", type: "alter" },
            { name: "ADD PRIMARY KEY", type: "alter" },
            { name: "DROP CONSTRAINT", type: "alter" },
            { name: "DROP PRIMARY KEY", type: "alter" },
            { name: "AS REPLICA OF", type: "create" },
            { name: "CONSTRAINT", type: "create" },
            { name: "ENFORCED", type: "create" },
            { name: "FOREIGN KEY", type: "create" },
            { name: "NOT ENFORCED", type: "create" },
            { name: "PRIMARY KEY", type: "create" },
            { name: "REFERENCES", type: "create" },
            { name: "UNDROP SCHEMA", type: "undrop" },
            { name: "UNDROP SCHEMA IF NOT EXISTS", type: "undrop" },
            { name: "QUALIFY", type: "qualify" },
        ];
        /** Clauses. */
        this.CLAUSE_WORDS = this.CLAUSE_WORDS_WITH_TYPES.map((word) => word.name);
        /** Clause words that should be connected when formatting a query. */
        this.CONNECTED_CLAUSE_WORDS = [
            { first: "FROM", second: "(" },
            { first: "JOIN", second: "(" },
            { first: "UNION ALL", second: "(" },
            { first: "UNION DISTINCT", second: "(" },
        ];
        /** Keywords. */
        this.KEYWORDS = [
            // go/keep-sorted start
            "ACCESS", // Comment to keep single-column format
            "ADD", // Comment to keep single-column format
            "AGGREGATE",
            "ALL",
            "ALTER",
            "AND",
            "ANY",
            "ARRAY",
            "AS",
            "ASC",
            "ASSERT_ROWS_MODIFIED",
            "ASSIGNMENT",
            "AT",
            "BEGIN",
            "BETWEEN",
            "BI_CAPACITY",
            "BY",
            "CAPACITY",
            "CASCADE",
            "CASE",
            "CAST",
            "CLONE",
            "CLUSTER",
            "COLLATE",
            "COLUMN",
            "COLUMNS",
            "COMMIT",
            "CONNECTION",
            "CONSTRAINT",
            "CREATE",
            "CROSS",
            "CUBE",
            "CURRENT",
            "DATA",
            "DEFAULT",
            "DEFINE",
            "DESC",
            "DETERMINISTIC",
            "DISTINCT",
            "DO",
            "DROP",
            "ELSE",
            "END",
            "ENFORCED",
            "ENUM",
            "ESCAPE",
            "EXCEPT",
            "EXCLUDE",
            "EXECUTE",
            "EXISTS",
            "EXPORT",
            "EXTERNAL",
            "EXTRACT",
            "FALSE",
            "FETCH",
            "FILES",
            "FILTER",
            "FIRST",
            "FOLLOWING",
            "FOR",
            "FOREIGN",
            "FULL",
            "FUNCTION",
            "GRANT",
            "GROUP",
            "GROUPING",
            "GROUPS",
            "HASH",
            "IF",
            "IGNORE",
            "IMMEDIATE",
            "IN",
            "INDEX",
            "INNER",
            "INOUT",
            "INTERSECT",
            "INTERVAL",
            "INTO",
            "IS",
            "KEY",
            "LANGUAGE",
            "LAST",
            "LATERAL",
            "LEFT",
            "LIKE",
            "LOAD",
            "LOOKUP",
            "MATCHED",
            "MATERIALIZED",
            "MERGE",
            "METADATA",
            "MODEL",
            "NATURAL",
            "NEW",
            "NO",
            "NOT",
            "NULL",
            "NULLS",
            "OF",
            "OPTIONS",
            "OR",
            "ORDER",
            "ORGANIZATION",
            "OUT",
            "OUTER",
            "OVER",
            "OVERWRITE",
            "PARTITION",
            "PARTITIONS",
            "PIVOT",
            "POLICIES",
            "POLICY",
            "PRECEDING",
            "PRIMARY",
            "PROCEDURE",
            "PROJECT",
            "PROTO",
            "QUALIFY",
            "RANGE",
            "RECURSIVE",
            "REFERENCES",
            "RENAME",
            "REPEAT",
            "REPLICA",
            "RESERVATION",
            "RESPECT",
            "RESTRICT",
            "RETURNS",
            "RIGHT",
            "ROLLBACK",
            "ROLLUP",
            "ROW",
            "ROWS",
            "SCHEMA",
            "SEARCH",
            "SET",
            "SETS",
            "SNAPSHOT",
            "SOME",
            "SOURCE",
            "STRUCT",
            "TABLE",
            "TABLESAMPLE",
            "TARGET",
            "TEMP",
            "TEMPORARY",
            "THEN",
            "TO",
            "TRANSACTION",
            "TREAT",
            "TRUE",
            "TRUNCATE",
            "UNBOUNDED",
            "UNDROP",
            "UNION",
            "UNNEST",
            "UNPIVOT",
            "UNTIL",
            "USING",
            "VIEW",
            "WHEN",
            "WITH",
            "WITHIN",
            // go/keep-sorted end
        ];
        /** Reserved words. */
        this.RESERVED_WORDS = [];
        /** Functions with their possible arguments. */
        this.FUNCTIONS_WITH_INFO = [
            {
                name: "ABS",
                args: "numeric_expr",
                description: "Computes absolute value. Returns an error if the" +
                    "argument is" +
                    "an integer and the output value cannot be represented as the " +
                    "same type; this happens only for the largest negative input " +
                    "value, which has no positive representation. Returns +inf for " +
                    "a +/-inf argument.",
            },
            {
                name: "ACOS",
                args: "numeric_expr",
                description: "Computes the principal value of the arc cosine of " +
                    "<numeric_expr>. The return value is in the range [0,]. " +
                    "Generates an error if <numeric_expr> is a finite value outside " +
                    "of range [-1, 1].",
            },
            {
                name: "ACOSH",
                args: "numeric_expr",
                description: "Computes the inverse hyperbolic cosine of <numeric_expr>. " +
                    "Generates an error if <numeric_expr> is a finite value less " +
                    "than 1.",
            },
            {
                name: "ANY_VALUE",
                args: "expr",
                description: "Returns any value from the input or NULL if there are " +
                    "zero input rows. The value returned is non-deterministic, which " +
                    "means you might receive a different result each time you use " +
                    "this function.",
            },
            {
                name: "APPROX_COUNT_DISTINCT",
                args: "expr",
                description: "Returns the approximate result for COUNT(DISTINCT <expr>)" +
                    ". The value returned is a statistical estimate—not necessarily " +
                    "the actual value.\n" +
                    "\n" +
                    "This function is less accurate than COUNT(DISTINCT <expr>), but " +
                    "performs better on huge input.",
            },
            {
                name: "APPROX_QUANTILES",
                args: "expr, number",
                description: "Returns the approximate boundaries for a group of <expr> " +
                    "values, where <number> represents the number of quantiles to " +
                    "create. This function returns an array of <number> + 1 " +
                    "elements, where the first element is the approximate minimum " +
                    "and the last element is the approximate maximum.",
            },
            {
                name: "APPROX_TOP_COUNT",
                args: "expr, number",
                description: "Returns the approximate top elements of <expr>. The " +
                    "<number> parameter specifies the number of elements returned.",
            },
            {
                name: "ARRAY_AGG",
                args: "expr",
                description: "Returns an ARRAY of <expr> values.",
            },
            {
                name: "ARRAY_CONCAT",
                args: "array_expr1 [, array_expr_n]",
                description: "Concatenates one or more arrays with the same element type " +
                    "into a single array.",
            },
            {
                name: "ARRAY_CONCAT_AGG",
                args: "expr",
                description: "Concatenates elements from <expr> of type ARRAY, returning a " +
                    "single ARRAY as a result. This function ignores NULL input " +
                    "arrays, but respects the NULL elements in non-NULL input " +
                    "arrays (an error is raised, however, if an array in the final " +
                    "query result contains a NULL element).",
            },
            {
                name: "ARRAY_LENGTH",
                args: "array_expr",
                description: "Returns the size of the array. Returns 0 for an empty array. " +
                    "Returns NULL if the <array_expr> is NULL.",
            },
            {
                name: "ARRAY_TO_STRING",
                args: "array_expr, delimiter [, null_text]",
                description: "Returns a concatenation of the elements in <array_expr> as a " +
                    "STRING. The value for <array_expr> can either be an array of " +
                    "STRING or BYTES data types.",
            },
            {
                name: "ASCII",
                args: "value",
                description: "Returns the ASCII code for the first character of the " +
                    "input (STRING type), or for the first byte of the input (BYTES " +
                    "type). Function returns 0 if the string is empty, or the first " +
                    "character/byte's ASCII code is 0.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#ascii",
            },
            {
                name: "ASIN",
                args: "numeric_expr",
                description: "Computes the principal value of the arc sine of <numeric_expr>. " +
                    "The return value is in the range [-π/2,π/2]. Generates an error " +
                    "if X is a finite value outside of range [-1, 1].",
            },
            {
                name: "ASINH",
                args: "numeric_expr",
                description: "Computes the inverse hyperbolic sine of " +
                    "<numeric_expr>. Does not fail.",
            },
            {
                name: "ATAN",
                args: "numeric_expr",
                description: "Computes the principal value of the arc tangent of " +
                    "<numeric_expr>. The return value is in the range [-π/2,π/2]. " +
                    "Does not fail.",
            },
            {
                name: "ATANH",
                args: "numeric_expr",
                description: "Computes the inverse hyperbolic tangent of <numeric_expr>. " +
                    "Generates an error if the absolute value of <numeric_expr> is " +
                    "greater or equal 1.",
            },
            {
                name: "ATAN2",
                args: "numeric_expr, numeric_expr",
                description: "Calculates the principal value of the arc tangent of Y/X using " +
                    "the signs of the two arguments to determine the quadrant. The " +
                    "return value is in the range [-π,π]. ",
            },
            {
                name: "AVG",
                args: "expr",
                description: "Returns the average of non-NULL input values, or NaN if the " +
                    "input contains a NaN.",
            },
            {
                name: "BIT_AND",
                args: "expr",
                description: "Performs a bitwise AND operation on expression and returns the " +
                    "result.",
            },
            {
                name: "BIT_OR",
                args: "expr",
                description: "Performs a bitwise OR operation on expression and returns the " +
                    "result.",
            },
            {
                name: "BIT_XOR",
                args: "expr",
                description: "Performs a bitwise XOR operation on <expr> and returns the result.",
            },
            {
                name: "BYTE_LENGTH",
                args: "value",
                description: "Returns the length of the <value> in bytes, regardless of " +
                    "whether the type of the value is STRING or BYTES.",
            },
            {
                name: "CAST",
                args: "expr AS typename",
                description: "Converts <expr> into a variable of type <typename>.",
            },
            {
                name: "CEIL",
                args: "numeric_expr",
                description: "Returns the smallest integral value (with FLOAT64 type) that is " +
                    "not less than <numeric_expr>.",
            },
            { name: "CEILING", args: "numeric_expr", description: "Synonym of CEIL." },
            {
                name: "CHAR_LENGTH",
                args: "value",
                description: "Returns the length of the STRING in characters.",
            },
            {
                name: "CHARACTER_LENGTH",
                args: "value",
                description: "Synonym for CHAR_LENGTH.",
            },
            {
                name: "CHR",
                args: "value",
                description: "Returns the character that matches the input Unicode " +
                    "code point. Each valid code point should fall within the range of " +
                    "[0, 0xD7FF] and [0xE000, 0x10FFFF]. If an invalid Unicode code " +
                    "point is specified, an error is returned.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#chr",
            },
            {
                name: "CONCAT",
                args: "value1 [, ...]",
                description: "Concatenates one or more values into a single result.",
            },
            {
                name: "COS",
                args: "numeric_expr",
                description: "Computes cosine of <numeric_expr>. Never fails.",
            },
            {
                name: "COSH",
                args: "numeric_expr",
                description: "Computes the hyperbolic cosine of <numeric_expr>. Generates an " +
                    "error if an overflow occurs.",
            },
            {
                name: "COUNT",
                args: "expr",
                description: "Returns the total number of values (NULL and non-NULL for <*>, " +
                    "non-NULL for <field>) in the scope of the function. With " +
                    "DISTINCT returns the number of distinct values for the " +
                    "specified field.",
            },
            {
                name: "COUNTIF",
                args: "expr",
                description: "Returns the count of TRUE values for <expr>. Returns 0 if there " +
                    "are zero input rows or <expr> evaluates to FALSE for all rows.",
            },
            {
                name: "CUME_DIST",
                args: "",
                description: "Return the relative rank of a row defined as NP/NR. NP is " +
                    "defined to be the number of rows that either precede or are " +
                    "peers with the current row. NR is the number of rows in the " +
                    "partition.",
            },
            {
                name: "CURRENT_DATE",
                args: "[time_zone]",
                description: "Returns the current date as of the specified or default timezone.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#current_date",
            },
            {
                name: "CURRENT_TIMESTAMP",
                args: "",
                description: "Parentheses are optional. This function handles leap seconds by " +
                    "smearing them across a window of 20 hours around the inserted " +
                    "leap second. CURRENT_TIMESTAMP() produces a TIMESTAMP value " +
                    "that is continuous, non-ambiguous, has exactly 60 seconds per " +
                    "minute and does not repeat values over the leap second.",
            },
            {
                name: "DATE",
                args: "timestamp_expr [, time_zone]",
                description: "Converts a <timestamp_expr> to a DATE data type. It supports " +
                    "an optional parameter to specify a timezone. If no timezone is " +
                    "specified, the default timezone, UTC, is used.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#date",
            },
            {
                name: "DATE_ADD",
                args: "date_expr, INTERVAL int64_expr date_part",
                description: "Adds a specified time interval to a DATE.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#date_add",
            },
            {
                name: "DATE_DIFF",
                args: "date_expr, date_expr, date_part",
                description: "Returns the number of <date_part> boundaries between the two " +
                    "<date_expr>s. If the first date occurs before the second date, " +
                    "then the result is non-positive.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#date_diff",
            },
            {
                name: "DATE_FROM_UNIX_DATE",
                args: "INT64_expr",
                description: "Interprets <INT64_expr> as the number of days since 1970-01-01.",
            },
            {
                name: "DATE_SUB",
                args: "date_expr, INTERVAL int64_expr date_part",
                description: "Subtracts a specified time interval from a DATE.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#date_sub",
            },
            {
                name: "DATE_TRUNC",
                args: "date_expr, date_part",
                description: "Truncates the date to the specified granularity.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#date_trunc",
            },
            {
                name: "DENSE_RANK",
                args: "",
                description: "Returns the ordinal (1-based) rank of each row within the " +
                    "window partition. All peer rows receive the same rank value, " +
                    "and the subsequent rank value is incremented by one.",
            },
            {
                name: "DIV",
                args: "numeric_expr, numeric_expr",
                description: "Returns the result of integer division of X by Y. Division by " +
                    "zero returns an error. Division by -1 may overflow. See the " +
                    "table below for possible result types.",
            },
            {
                name: "ENDS_WITH",
                args: "value1, value2",
                description: "Takes two values. Returns TRUE if <value2> is a suffix of " +
                    "<value1>.",
            },
            {
                name: "EXP",
                args: "numeric_expr",
                description: "Computes e to the power of <numeric_expr>, also called the " +
                    "natural exponential function. If the result underflows, this " +
                    "function returns a zero. Generates an error if the result " +
                    "overflows. If <numeric_expr> is +/-inf, then this function " +
                    "returns +inf or 0.",
            },
            {
                name: "EXTRACT",
                args: "datetime_part FROM timestamp_expr [AT TIME ZONE tz_spec]",
                description: "Returns the value corresponding to the specified date part.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#extract",
            },
            {
                name: "FIRST_VALUE",
                args: "value_expr",
                description: "Returns the value of the <value_expr> for the first row in the " +
                    "current window frame.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#first_value",
            },
            {
                name: "FLOOR",
                args: "numeric_expr",
                description: "Returns the largest integral value (with FLOAT64 type) that is " +
                    "not greater than <numeric_expr>.",
            },
            {
                name: "FORMAT",
                args: "format_string, format_specifier1 [, ...]",
                description: "BigQuery supports a FORMAT() function for formatting strings. " +
                    "This function is similar to the C printf function. It produces " +
                    "a STRING from a format string that contains zero or more format " +
                    "specifiers, along with a variable length list of additional " +
                    "arguments that matches the format specifiers.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#format",
            },
            {
                name: "FORMAT_DATE",
                args: "format_string, date",
                description: "Formats the date_expr according to the specified <format_string>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#format_date",
            },
            {
                name: "FORMAT_TIMESTAMP",
                args: "format_string, timestamp [, <time_zone>]",
                description: "Formats a timestamp according to the specified <format_string>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#format_timestamp",
            },
            {
                name: "GENERATE_ARRAY",
                args: "start_expression, end_expression [, step_expression]",
                description: "Returns an array of values. The <start_expression> and " +
                    "<end_expression> parameters determine the inclusive start and " +
                    "end of the array.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#generate_array",
            },
            {
                name: "GENERATE_DATE_ARRAY",
                args: "start_date, end_date[, INTERVAL step_expression " +
                    "DAY|WEEK|MONTH|QUARTER|YEAR]",
                description: "Returns an array of dates. The <start_date> and <end_date> " +
                    "parameters determine the inclusive start and end of the array.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#generate_date_array",
            },
            {
                name: "GREATEST",
                args: "numeric_expr1, numeric_expr2, ...",
                description: "Returns NULL if any of the inputs is NULL. Otherwise, returns " +
                    "NaN if any of the inputs is NaN. Otherwise, returns the largest " +
                    "value among <numeric_expr1>, <numeric_expr2>... according to " +
                    "the < comparison.",
            },
            {
                name: "GROUPING",
                args: "group_by_expression",
                description: "Returns 0 or 1. Returns 1 if the " +
                    "group_by_expression argument is being aggregated, or 0 if it is not.",
            },
            {
                name: "IEEE_DIVIDE",
                args: "numeric_expr1, numeric_expr2",
                description: "Divides <numeric_expr1> by <numeric_expr2>; this function never " +
                    "fails. Returns FLOAT64. Unlike the division operator (/), this " +
                    "function does not generate errors for division by zero or " +
                    "overflow.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#ieee_divide",
            },
            {
                name: "IFNULL",
                args: "expr, null_result",
                description: "If expr is NULL, return null_result. Otherwise, return " +
                    "expr. If expr is not NULL, null_result is not evaluated. expr and " +
                    "null_result can be any type and must be implicitly coercible to a " +
                    "common supertype. Synonym for COALESCE(expr, null_result).",
            },
            {
                name: "INITCAP",
                args: "input[, delimiters]",
                description: "Transform the <input> string with the first character in " +
                    "each word in uppercase, and all other characters in lowercase. " +
                    "Non-alphabetic characters will remain the same . Mapping between " +
                    "lowercase and uppercase is done according to the Unicode " +
                    "Character Database without taking into account language-specific " +
                    "mappings.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#initcap",
            },
            {
                name: "INSTR",
                args: "source_value, search_value [, position[, occurrence ]]",
                description: "Searches the occurrences of <search_value> in the " +
                    "<source_value>, starting from <position>, returns the start " +
                    "position of the search hit.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#instr",
            },
            {
                name: "IS_INF",
                args: "numeric_expr",
                description: "Returns TRUE if the value is positive or negative infinity. " +
                    "Returns NULL for NULL inputs.",
            },
            {
                name: "IS_NAN",
                args: "numeric_expr",
                description: "Returns TRUE if the value is a NaN value. Returns NULL for " +
                    "NULL inputs.",
            },
            {
                name: "JSON_ARRAY",
                args: "[value][, ...]",
                description: "Creates a JSON array from zero or more SQL values.",
                url: (_a = this.docsUrls) === null || _a === void 0 ? void 0 : _a.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY,
            },
            {
                name: "JSON_ARRAY_APPEND",
                args: "json_expr, json_path, value[, json_path, value][...]" +
                    "[, append_each_element=>{ TRUE | FALSE }]",
                description: "Appends JSON data to the end of a JSON array.",
                url: (_b = this.docsUrls) === null || _b === void 0 ? void 0 : _b.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_APPEND,
            },
            {
                name: "JSON_ARRAY_INSERT",
                args: "json_expr, json_path, value[, json_path, value][...]" +
                    "[, insert_each_element=>{ TRUE | FALSE }]",
                description: "Inserts JSON data into a JSON array.",
                url: (_c = this.docsUrls) === null || _c === void 0 ? void 0 : _c.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_INSERT,
            },
            {
                name: "JSON_OBJECT",
                args: [
                    {
                        args: "[json_key, json_value][, ...]",
                        description: "Creates a JSON object, using key value pairs.",
                        url: (_d = this.docsUrls) === null || _d === void 0 ? void 0 : _d.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE2,
                    },
                    {
                        args: "json_key_array, json_value_array",
                        description: "Creates a JSON object, using an array of keys and " + "values.",
                        url: (_e = this.docsUrls) === null || _e === void 0 ? void 0 : _e.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE1,
                    },
                ],
                description: "",
            },
            {
                name: "JSON_REMOVE",
                args: "json_expr, json_path[, ...]",
                description: "Removes JSON data.",
                url: (_f = this.docsUrls) === null || _f === void 0 ? void 0 : _f.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_REMOVE,
            },
            {
                name: "JSON_SET",
                args: "json_expr, json_path, value[, json_path, value][...]",
                description: "Inserts or replaces existing JSON data.",
                url: (_g = this.docsUrls) === null || _g === void 0 ? void 0 : _g.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_SET,
            },
            {
                name: "JSON_STRIP_NULLS",
                args: "json_expr[, json_path][, include_arrays=>{ TRUE | FALSE }]" +
                    "[, remove_empty=>{ TRUE | FALSE }]",
                description: "Recursively removes JSON nulls from JSON objects and " +
                    "JSON arrays.",
                url: (_h = this.docsUrls) === null || _h === void 0 ? void 0 : _h.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_STRIP_NULLS,
            },
            {
                name: "LAG",
                args: "value_expr [, offset [, default_expr] ]",
                description: "Returns the value of the <value_expr> on a preceding row. " +
                    "Changing the <offset> value changes which preceding row is " +
                    "returned; the default value is 1, indicating the previous row " +
                    "in the window frame. An error occurs if <offset> is NULL or a " +
                    "negative value.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#lag",
            },
            {
                name: "LAST_DAY",
                args: "datetime_expression [, date_part]",
                description: "Returns the last day from the <datetime_expression> that " +
                    "contains the date. This is commonly used to return the last day " +
                    "of the month. You can optionally specify the <date_part> for " +
                    "which the last day is returned. If this parameter is not used, " +
                    "the default value is MONTH.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "datetime_functions#last_day",
            },
            {
                name: "LAST_VALUE",
                args: "value_expr",
                description: "Returns the value of the <value_expr> for the last row in the " +
                    "current window frame.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#last_value",
            },
            {
                name: "LAX_BOOL",
                args: "json_expr",
                description: "Attempts to convert a JSON value to a SQL BOOL value.",
                url: (_j = this.docsUrls) === null || _j === void 0 ? void 0 : _j.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_BOOL,
            },
            {
                name: "LAX_FLOAT64",
                args: "json_expr",
                description: "Attempts to convert a JSON expression to a SQL FLOAT64 " + "value.",
                url: (_k = this.docsUrls) === null || _k === void 0 ? void 0 : _k.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_DOUBLE,
            },
            {
                name: "LAX_INT64",
                args: "json_expr",
                description: "Attempts to convert a JSON expression to a SQL INT64 value.",
                url: (_l = this.docsUrls) === null || _l === void 0 ? void 0 : _l.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_INT64,
            },
            {
                name: "LAX_STRING",
                args: "json_expr",
                description: "Attempts to convert a JSON expression to a SQL STRING " + "value.",
                url: (_m = this.docsUrls) === null || _m === void 0 ? void 0 : _m.CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_STRING,
            },
            {
                name: "LEAD",
                args: "value_expr [, offset [, default_expr] ]",
                description: "Returns the value of the <value_expr> on a subsequent row. " +
                    "Changing the <offset> value changes which subsequent row is " +
                    "returned; the default value is 1, indicating the next row in " +
                    "the window frame. An error occurs if <offset> is NULL or a " +
                    "negative value.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#lead",
            },
            {
                name: "LEAST",
                args: "numeric_expr1, numeric_expr2, ...",
                description: "Returns NULL if any of the inputs is NULL. Returns NaN if any " +
                    "of the inputs is NaN. Otherwise, returns the smallest value " +
                    "among <numeric_expr1>, <numeric_expr2>, ... according to the > " +
                    "comparison.",
            },
            {
                name: "LEFT",
                args: "value, length",
                description: "Returns the specified number of leftmost characters from " +
                    "the input STRING, or the specified number of leftmost bytes from " +
                    "the input BYTES.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#left",
            },
            {
                name: "LENGTH",
                args: "value",
                description: "Returns the length of the value. The returned value is in " +
                    "characters for STRING arguments and in bytes for the BYTES " +
                    "argument.",
            },
            {
                name: "LN",
                args: "numeric_expr",
                description: "Computes the natural logarithm of <numeric_expr>. Generates an " +
                    "error if <numeric_expr> is less than or equal to zero. If " +
                    "<numeric_expr> is +inf, then this function returns +inf.",
            },
            {
                name: "LOG",
                args: "numeric_expr [, base]",
                description: "If only <numeric_expr> is present, LOG is a synonym of LN. " +
                    "If <base> is also present, LOG computes the logarithm of " +
                    "<numeric_expr> to <base>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#log",
            },
            {
                name: "LOG10",
                args: "numeric_expr",
                description: "Similar to LOG, but computes logarithm to base 10.",
            },
            {
                name: "LOGICAL_AND",
                args: "expr",
                description: "Returns the logical AND of all non-NULL expressions. Returns " +
                    "NULL if there are zero input rows or <expr> evaluates to NULL " +
                    "for all rows.",
            },
            {
                name: "LOGICAL_OR",
                args: "expr",
                description: "Returns the logical OR of all non-NULL expressions. Returns " +
                    "NULL if there are zero input rows or <expr> evaluates to NULL " +
                    "for all rows.",
            },
            {
                name: "LOWER",
                args: "value",
                description: "For STRING arguments, returns the original string with all " +
                    "alphabetic characters in lowercase. Mapping between lowercase " +
                    "and uppercase is done according to the Unicode Character " +
                    "Database without taking into account language-specific mappings.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#lower",
            },
            {
                name: "LTRIM",
                args: "value1 [, value2]",
                description: "Identical to TRIM, but only removes leading characters.",
            },
            {
                name: "MAX",
                args: "expr",
                description: "Returns the maximum value of non-NULL expressions. Returns NULL " +
                    "if there are zero input rows or <expr> evaluates to NULL for " +
                    "all rows. Returns NaN if the input contains a NaN.",
            },
            {
                name: "MAX_BY",
                args: "expr1, expr2",
                description: "Returns the value of expr1 for which the value of expr2 " +
                    "is maximized. Returns an arbitrary value of expr1 if multiple " +
                    "rows match the maximized expr2. Returns NULL if expr1 evaluates " +
                    "to NULL for all matched rows or expr2 contains a NaN.",
            },
            {
                name: "MIN",
                args: "expr",
                description: "Returns the minimum value of non-NULL expressions. Returns NULL " +
                    "if there are zero input rows or <expr> evaluates to NULL for " +
                    "all rows. Returns NaN if the input contains a NaN.",
            },
            {
                name: "MIN_BY",
                args: "expr1, expr2",
                description: "Returns the value of expr1 for which the value of expr2 " +
                    "is minimized. Returns an arbitrary value of expr1 if multiple " +
                    "rows match the minimized expr2. Returns NULL if expr1 evaluates " +
                    "to NULL for all matched rows or expr2 contains a NaN.",
            },
            {
                name: "MOD",
                args: "numeric_expr1, numeric_expr2",
                description: "Modulo function: returns the remainder of the division of " +
                    "<numeric_expr1> by <numeric_expr2>. Returned value has the " +
                    "same sign as <numeric_expr1>. An error is generated if " +
                    "<numeric_expr2> is 0. See the table below for possible result " +
                    "types.",
            },
            {
                name: "NTH_VALUE",
                args: "value_expr, constant_integer_expr",
                description: "Returns the value of <value_expr> at the Nth row of the current " +
                    "window frame, where Nth is defined by <constant_integer_expr>. " +
                    "Returns NULL if there is no such row.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#nth_value",
            },
            {
                name: "NTILE",
                args: "constant_integer_expr",
                description: "This function divides the rows into <constant_integer_expr> " +
                    "buckets based on row ordering and returns the 1-based bucket " +
                    "number that is assigned to each row. The number of rows in the " +
                    "buckets can differ by at most 1. The remainder values (the " +
                    "remainder of number of rows divided by buckets) are distributed " +
                    "one for each bucket, starting with bucket 1. If " +
                    "<constant_integer_expr> evaluates to NULL, 0 or negative, an " +
                    "error is provided.",
            },
            {
                name: "OCTET_LENGTH",
                args: "input",
                description: "An alias of BYTE_LENGTH. Returns the length of the " +
                    "<value> in bytes, regardless of whether the type of the <value> " +
                    "is STRING or BYTES.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#octet_length",
            },
            {
                name: "OFFSET",
                args: "zero_based_offset",
                description: "Accesses an ARRAY element by position and returns the " +
                    "element. OFFSET means that the numbering starts at zero, " +
                    "ORDINAL means that the numbering starts at one.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#offset-and-ordinal",
            },
            {
                name: "ORDINAL",
                args: "one_based_offset",
                description: "Accesses an ARRAY element by position and returns the " +
                    "element. OFFSET means that the numbering starts at zero, " +
                    "ORDINAL means that the numbering starts at one.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#offset-and-ordinal",
            },
            {
                name: "PARSE_TIMESTAMP",
                args: "format_string, string [, time_zone]",
                description: "Uses a <format_string> and a string representation of a " +
                    "timestamp to return a TIMESTAMP object.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#parse_timestamp",
            },
            {
                name: "PERCENT_RANK",
                args: "",
                description: "Return the percentile rank of a row defined as (RK-1)/(NR-1), " +
                    "where RK is the RANK of the row and NR is the number of rows in " +
                    "the partition. Returns 0 if NR=1.",
            },
            {
                name: "POW",
                args: "numeric_expr1, numeric_expr2",
                description: "Returns the value of <numeric_expr1> raised to the power of " +
                    "<numeric_expr1>. If the result underflows and is not " +
                    "representable, then the function returns a value of zero.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#pow",
            },
            {
                name: "POWER",
                args: "numeric_expr, numeric_expr",
                description: "Synonym of POW().",
            },
            {
                name: "RANK",
                args: "",
                description: "Returns the ordinal (1-based) rank of each row within the " +
                    "ordered partition. All peer rows receive the same rank value. " +
                    "The next row or set of peer rows receives a rank value which " +
                    "increments by the number of peers with the previous rank value, " +
                    "instead of DENSE_RANK, which always increments by 1.",
            },
            {
                name: "REGEXP_CONTAINS",
                args: "value, regex",
                description: "Returns TRUE if <value> is a partial match for the regular " +
                    "expression, <regex>. You can search for a full match by using ^ " +
                    "(beginning of text) and $ (end of text).",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#regexp_contains",
            },
            {
                name: "REGEXP_EXTRACT",
                args: "value, regex [, position[, occurrence]]",
                description: "Returns the first substring in <value> that matches the " +
                    "regular expression, <regex>. Returns NULL if there is no match. " +
                    "If <position> is specified, the search starts at this position in " +
                    "value, otherwise it starts at the beginning of value. If " +
                    "<occurrence> is specified, the search returns a specific " +
                    "occurrence of the regexp in value, otherwise returns the first " +
                    "match.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#regexp_extract",
            },
            {
                name: "REGEXP_EXTRACT_ALL",
                args: "value, regex",
                description: "Returns an array of all substrings of <value> that match the " +
                    "regular expression, <regex>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#regexp_extract_all",
            },
            {
                name: "REGEXP_INSTR",
                args: "value, regex [, position[, occurrence, [return_pos_after_match]]]",
                description: "Returns the position of the specified <occurrence> of " +
                    "the <regex> pattern in <value>. <return_pos_after_match> can be 0 " +
                    "(default, returns the beginning position of the match) or 1 " +
                    "(returns the first position following the end of the match)",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#regexp_instr",
            },
            {
                name: "REGEXP_REPLACE",
                args: "value, regex, replacement",
                description: "Returns a STRING where all substrings of <value> that match " +
                    "regular expression <regex> are replaced with replacement.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#regexp_replace",
            },
            {
                name: "REGEXP_SUBSTR",
                args: "value, regexp [,position[, occurrence]]",
                description: "Extracts a substring from <value> that matches a regular " +
                    "expression specified by <regexp>. Optionally, search starts at " +
                    "<position> and looks for the specified <occurrence>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#regexp_substr",
            },
            {
                name: "REPLACE",
                args: "original_value, from_value, to_value",
                description: "Replaces all occurrences of <from_value> with <to_value> in " +
                    "<original_value>. If <from_value> is empty, no replacement is " +
                    "made.",
            },
            {
                name: "RIGHT",
                args: "value, length",
                description: "Returns the specified number of rightmost characters " +
                    "from the input STRING, or the specified number of rightmost bytes " +
                    "from the input BYTES.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#right",
            },
            {
                name: "ROUND",
                args: "numeric_expr [, decimal_places]",
                description: "If only <numeric_expr> is present, ROUND rounds <numeric_expr> " +
                    "to the nearest integer. If <decimal_places> is present, ROUND " +
                    "rounds <numeric_expr> to <decimal_places> decimal places after " +
                    "the decimal point. If <decimal_places> is negative, ROUND will " +
                    "round off digits to the left of the decimal point. Rounds " +
                    "halfway cases away from zero. Generates an error if overflow " +
                    "occurs.",
            },
            {
                name: "ROW_NUMBER",
                args: "",
                description: "Does not require the ORDER BY clause. Returns the sequential " +
                    "row ordinal (1-based) of each row for each ordered partition. " +
                    "If the ORDER BY clause is unspecified then the result is " +
                    "non-deterministic.",
            },
            {
                name: "RTRIM",
                args: "value1 [, value2]",
                description: "Identical to TRIM, but only removes trailing characters.",
            },
            {
                name: "SAFE_CAST",
                args: "expr AS typename",
                description: "SAFE_CAST is identical to CAST, except it returns NULL instead " +
                    "of raising an error.",
            },
            {
                name: "SAFE_CONVERT_BYTES_TO_STRING",
                args: "value",
                description: "Converts a sequence of bytes to a string. Any invalid UTF-8 " +
                    "characters are replaced with the Unicode replacement character, " +
                    "U+FFFD.",
            },
            {
                name: "SIGN",
                args: "numeric_expr",
                description: "Returns -1, 0, or +1 for negative, zero and positive arguments " +
                    "respectively. For floating point arguments, this function does " +
                    "not distinguish between positive and negative zero. Returns NaN " +
                    "for a NaN argument.",
            },
            {
                name: "SIN",
                args: "numeric_expr",
                description: "Computes the sine of <numeric_expr>. Never fails.",
            },
            {
                name: "SINH",
                args: "numeric_expr",
                description: "Computes the hyperbolic sine of <numeric_expr>. Generates an " +
                    "error if an overflow occurs.",
            },
            {
                name: "SOUNDEX",
                args: "input",
                description: "Returns a string that represents the Soundex code for " +
                    "the <input>. Soundex is a phonetic algorithm for indexing names " +
                    "by sound, as pronounced in English.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#soundex",
            },
            {
                name: "SPLIT",
                args: "value [, delimiter]",
                description: "Splits <value> using the <delimiter> argument.",
            },
            {
                name: "SQRT",
                args: "numeric_expr",
                description: "Computes the square root of <numeric_expr>. Generates an error " +
                    "if <numeric_expr> is less than 0. Returns +inf if " +
                    "<numeric_expr> is +inf.",
            },
            {
                name: "STARTS_WITH",
                args: "value1, value2",
                description: "Returns TRUE if <value2> is a prefix of <value1>.",
            },
            {
                name: "STRING",
                args: "timestamp_expr [, time_zone]",
                description: "Converts a <timestamp_expr> to a STRING data type. Supports an " +
                    "optional parameter to specify a timezone. ",
            },
            {
                name: "STRING_AGG",
                args: "expr, [, delimiter]",
                description: "Returns a value (either STRING or BYTES) obtained by " +
                    "concatenating non-null values.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#string_agg",
            },
            {
                name: "STRPOS",
                args: "value1, value2",
                description: "Returns the 1-based index of the first occurrence of <value2> " +
                    "inside <value1>. Returns 0 if <value2> is not found.",
            },
            {
                name: "ST_DISTANCE",
                args: "geography_1, geography_2[, use_spheroid]",
                description: "Returns the shortest distance in meters between two " +
                    "non-empty GEOGRAPHYs.  If either of the input GEOGRAPHYs is empty, " +
                    "ST_DISTANCE returns NULL. The optional use_spheroid parameter " +
                    "determines how this function measures distance. If use_spheroid " +
                    "is FALSE, the function measures distance on the surface of a " +
                    "perfect sphere.  The use_spheroid parameter currently only supports" +
                    "the value FALSE. The default value of use_spheroid is FALSE.",
            },
            {
                name: "SUBSTR",
                args: "value, position [, length]",
                description: "Returns a substring of the supplied value. The <position> " +
                    "argument is an integer specifying the starting position of the " +
                    "substring, with position = 1 indicating the first character or " +
                    "byte. The <length> argument is the maximum number of characters " +
                    "for STRING arguments, or bytes for BYTES arguments.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#substr",
            },
            {
                name: "SUBSTRING",
                args: "value, position [, length]",
                description: "An alias of substr. Returns a substring of the " +
                    "supplied <value> (STRING or BYTES). The <position> argument " +
                    "is an integer specifying the starting position of the " +
                    "substring, with position = 1 indicating the first character " +
                    "or byte. The <length> argument is the maximum number of " +
                    "characters for STRING arguments, or bytes for BYTES arguments.",
            },
            {
                name: "SUM",
                args: "expr",
                description: "Returns the sum of non-null values.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#sum",
            },
            {
                name: "TAN",
                args: "numeric_expr",
                description: "Computes tangent of <numeric_expr>. Generates an error if an " +
                    "overflow occurs.",
            },
            {
                name: "TANH",
                args: "numeric_expr",
                description: "Computes hyperbolic tangent of <numeric_expr>. Does " + "not fail.",
            },
            {
                name: "TIMESTAMP",
                args: "timestamp_expr [, time_zone]",
                description: "Converts a STRING expression to a TIMESTAMP data type.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#timestamp",
            },
            {
                name: "TIMESTAMP_ADD",
                args: "timestamp_expr, INTERVAL int64_expr date_part",
                description: "Adds <int64_expr> units of <date_part> to the timestamp, " +
                    "independent of any time zone.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#timestamp_add",
            },
            {
                name: "TIMESTAMP_DIFF",
                args: "timestamp_expr, timestamp_expr, date_part",
                description: "Returns the number of whole specified <date_part> intervals " +
                    "between two timestamps. The first <timestamp_expr> represents " +
                    "the later date; if the first <timestamp_expr> is earlier than " +
                    "the second <timestamp_expr>, the output is negative. Throws " +
                    "an error if the computation overflows the result type, such as " +
                    "if the difference in microseconds between the two timestamps " +
                    "would overflow an INT64 value.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#timestamp_diff",
            },
            {
                name: "TIMESTAMP_MICROS",
                args: "INT64_expr",
                description: "Interprets <INT64_expr> as the number of microseconds since " +
                    "1970-01-01 00:00:00 UTC.",
            },
            {
                name: "TIMESTAMP_MILLIS",
                args: "INT64_expr",
                description: "Interprets <INT64_expr> as the number of milliseconds since " +
                    "1970-01-01 00:00:00 UTC.",
            },
            {
                name: "TIMESTAMP_SECONDS",
                args: "INT64_expr",
                description: "Interprets <INT64_expr> as the number of seconds since " +
                    "1970-01-01 00:00:00 UTC.",
            },
            {
                name: "TIMESTAMP_SUB",
                args: "timestamp_expr, INTERVAL int64_expr date_part",
                description: "Subtracts <int64_expr> units of <date_part> from the timestamp, " +
                    "independent of any time zone.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#timestamp_sub",
            },
            {
                name: "TIMESTAMP_TRUNC",
                args: "timestamp_expr, date_part [, time_zone]",
                description: "Truncates a timestamp to the granularity of <date_part>.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#timestamp_trunc",
            },
            {
                name: "TRANSLATE",
                args: "expression, source_characters, target_characters",
                description: "In the input <expression>, replace the characters in " +
                    "<source_characters> to the corresponding characters in " +
                    "<target_characters>. Note that each character will be translated " +
                    "at most once. Characters in <expression> but not in " +
                    "<source_characters> will be added to the result with no change.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#translate",
            },
            {
                name: "TRIM",
                args: "value1 [, value2]",
                description: "Removes all leading and trailing characters that match " +
                    "<value2>. If <value2> is not specified, all leading and " +
                    "trailing whitespace characters (as defined by the Unicode " +
                    "standard) are removed. If the first argument is of type BYTES, " +
                    "the second argument is required.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#trim",
            },
            {
                name: "TRUNC",
                args: "numeric_expr [, decimal_places]",
                description: "If only <numeric_expr> is present, TRUNC rounds <numeric_expr> " +
                    "to the nearest integer whose absolute value is not greater than " +
                    "the absolute value of <numeric_expr>. If <decimal_places> is " +
                    "also present, TRUNC behaves like ROUND(<numeric_expr>, " +
                    "<decimal_places>), but always rounds towards zero and never " +
                    "overflows.",
            },
            {
                name: "UNICODE",
                args: "input",
                description: "Returns the Unicode code point for the first character " +
                    "of the <input> string. Function returns 0 if the string is empty, " +
                    "or the resulted unicode code point is 0.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "string_functions#unicode",
            },
            {
                name: "UNIX_DATE",
                args: "date_expr",
                description: "Returns the number of days since 1970-01-01.",
            },
            {
                name: "UNIX_MICROS",
                args: "timestamp_expr",
                description: "Returns the number of microseconds since 1970-01-01 00:00:00 " +
                    "UTC. Truncates higher levels of precision.",
            },
            {
                name: "UNIX_MILLIS",
                args: "timestamp_expr",
                description: "Returns the number of milliseconds since 1970-01-01 00:00:00 " +
                    "UTC. Truncates higher levels of precision.",
            },
            {
                name: "UNIX_SECONDS",
                args: "timestamp_expr",
                description: "Returns the number of seconds since 1970-01-01 00:00:00 UTC. " +
                    "Truncates higher levels of precision.",
            },
            {
                name: "UNNEST",
                args: "array_expr",
                description: "The UNNEST operator takes an ARRAY and returns a table, with " +
                    "one row for each element in the ARRAY. ",
            },
            {
                name: "UPPER",
                args: "value",
                description: "For STRING arguments, returns the original string with all " +
                    "alphabetic characters in uppercase. Mapping between uppercase " +
                    "and lowercase is done according to the Unicode Character " +
                    "Database without taking into account language-specific mappings.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#upper",
            },
        ];
        /** Functions. */
        this.FUNCTIONS = this.mergedSqlFunctions().map((elem) => {
            return elem.name;
        });
        /** Table-valued functions with their possible arguments. */
        this.TVF_FUNCTIONS_WITH_INFO = [
            {
                name: "ML.EVALUATE",
                args: "MODEL model, TABLE table | (subquery) " +
                    "[, STRUCT(numeric_expr AS threshold)]",
            },
            { name: "ML.FEATURE_INFO", args: "MODEL model" },
            { name: "ML.PREDICT", args: "MODEL model, TABLE table | (subquery)" },
            {
                name: "ML.ROC_CURVE",
                args: "MODEL model, TABLE table | (subquery) [, thresholds_array]",
            },
            {
                name: "ML.TRAINING_INFO",
                args: "MODEL model",
            },
            {
                name: "ML.WEIGHTS",
                args: "MODEL model",
            },
            {
                name: "GAP_FILL",
                args: "TABLE table | (subquery), time_series_column, bucket_width " +
                    "[, partitioning_columns, value_columns, origin, ignore_null_values]",
                description: "Finds and fills gaps in a time series.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
                    "functions-and-operators#gap_fill",
            },
            {
                name: "RANGE_SESSIONIZE",
                args: "TABLE table | (subquery), STRING range_column, " +
                    "ARRAY<STRING> partitioning_columns [, sessionize_mode]",
                description: "Produces a table of sessionized ranges.",
                url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_sessionize",
            },
        ];
        /** Table-valued functions. */
        this.TVF_FUNCTIONS = this.TVF_FUNCTIONS_WITH_INFO.map((elem) => {
            return elem.name;
        });
        /**
         * Type names. From
         * https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types
         */
        this.TYPE_NAMES = [
            "INT64",
            "FLOAT64",
            "NUMERIC",
            "DECIMAL",
            "BIGNUMERIC",
            "BIGDECIMAL",
            "BOOL",
            "STRING",
            "BYTES",
            "DATE",
            "DATETIME",
            "TIME",
            "TIMESTAMP",
            "INTERVAL",
            "GEOGRAPHY",
            "JSON",
            "ARRAY",
            "STRUCT",
            "RANGE",
        ];
        this.OPERATORS = [
            "+",
            "-",
            "*",
            "/",
            "%",
            "^",
            "==",
            "!=",
            ">",
            "<",
            ">=",
            "<=",
            "and",
            "or",
            "unless",
        ];
        this.CLAUSE_WORDS.forEach((elem) => {
            const split = elem.split(" ");
            for (let i = 0; i < split.length - 1; i++) {
                this.CONNECTED_CLAUSE_WORDS.push({
                    first: split[i],
                    second: split[i + 1],
                });
            }
        });
        this.RESERVED_WORDS = this.RESERVED_WORDS.concat(this.KEYWORDS);
        this.CLAUSE_WORDS.forEach((word) => {
            word.split(" ").forEach((str) => {
                this.RESERVED_WORDS.push(str);
            });
        });
    }
    mergedSqlFunctions() {
        const sqlFunctions = [].concat(this.FUNCTIONS_WITH_INFO);
        const sqlFunctionSet = new Set(sqlFunctions.map((sqlFunction) => sqlFunction.name));
        return sqlFunctions.concat(bigquery_functions_1.BIGQUERY_FUNCTIONS.filter((sqlFunction) => !sqlFunctionSet.has(sqlFunction.name)));
    }
    getClauseWords() {
        return this.CLAUSE_WORDS;
    }
    getClauseWordsWithInfo() {
        return this.CLAUSE_WORDS_WITH_TYPES;
    }
    getConnectedClauseWords() {
        return this.CONNECTED_CLAUSE_WORDS;
    }
    getKeywords() {
        return this.KEYWORDS;
    }
    getReservedWords() {
        return this.RESERVED_WORDS;
    }
    getFunctions() {
        return this.FUNCTIONS;
    }
    getMergedSqlFunctions() {
        return this.mergedSqlFunctions();
    }
    getTvfFunctions() {
        return this.TVF_FUNCTIONS;
    }
    getTvfFunctionsWithInfo() {
        return this.TVF_FUNCTIONS_WITH_INFO;
    }
    getTypeNames() {
        return this.TYPE_NAMES;
    }
    getSingleLineCommentStarts() {
        return ["--", "#"];
    }
    getBracketQuoteStart() {
        return "`";
    }
    getBracketQuoteEnd() {
        return "`";
    }
    getSingleLineStringChars() {
        return ["'", '"'];
    }
    getMultiLineStringChars() {
        return ['"""', "'''"];
    }
    isRecordFieldInQuerySupported() {
        return true;
    }
    isRepeatedFieldInFromSupported() {
        return true;
    }
    getProjectSeparator() {
        return ".";
    }
    isWildcardTableSupported() {
        return true;
    }
    isUdfSupported() {
        return true;
    }
    getSnippets() {
        return snippets_1.SNIPPETS;
    }
}
exports.GoogleSqlDefinition = GoogleSqlDefinition;
/**
 * Google sql language specifics extended from monacos sql parser, which can be
 * found here:
 * https://github.com/microsoft/monaco-languages/blob/master/src/sql/sql.ts as
 */
exports.googleSqlLanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
    comments: {
        lineComment: "--",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ],
    folding: {},
};
/** The exported languaged definition for google sql. */
function getGoogleSqlLanguageDefinition(docsUrls) {
    const googleSqlDefinition = new GoogleSqlDefinition(docsUrls);
    return {
        ignoreCase: true,
        defaultToken: "",
        tokenPostfix: ".googleSQL",
        // Merge all keywords into one list
        keywords: googleSqlDefinition.FUNCTIONS.concat(googleSqlDefinition.CLAUSE_WORDS).concat(googleSqlDefinition.KEYWORDS),
        operators: googleSqlDefinition.OPERATORS,
        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\/^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        digits: /\d+(_+\d+)*/,
        octaldigits: /[0-7]+(_+[0-7]+)*/,
        binarydigits: /[0-1]+(_+[0-1]+)*/,
        hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
        integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
        floatsuffix: /[fFlL]?/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // comments
                { include: "@comments" },
                // all keywords have the same color
                [
                    /([a-zA-Z_][\w\-]*\.)?([a-zA-Z_]\w*\.)*[a-zA-Z_]\w*/,
                    { cases: { "@keywords": "type", "@default": "identifier" } },
                ],
                // strings
                [/"([^"\\]|\\.)*$/, "string.invalid"], // non-terminated string
                [/'([^'\\]|\\.)*$/, "string.invalid"], // non-terminated string
                [/"/, "string", "@string_double"],
                [/'/, "string", "@string_single"],
                [/`/, "string", "@string_backtick"],
                // whitespace
                { include: "@whitespace" },
                // delimiters and operators
                [/[{}()\[\]]/, "@brackets"],
                [/[<>](?!@symbols)/, "@brackets"],
                [/@symbols/, { cases: { "@operators": "delimiter", "@default": "" } }],
                // numbers
                [/\d+[smhdwy]/, "number"],
                [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, "number.float"],
                [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, "number.float"],
                [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, "number.hex"],
                [/0[0-7']*[0-7](@integersuffix)/, "number.octal"],
                [/0[bB][0-1']*[0-1](@integersuffix)/, "number.binary"],
                [/\d[\d']*\d(@integersuffix)/, "number"],
                [/\d(@integersuffix)/, "number"],
            ],
            comments: [
                // #
                [/(^#.*$)/, "comment"],
                // --
                [/(^--.*$)/, "comment"],
                // /* */
                [/\/\*/, { token: "comment.quote", next: "@comment" }],
            ],
            comment: [
                [/[^*/]+/, "comment"],
                [/\*\//, { token: "comment.quote", next: "@pop" }],
                [/./, "comment"],
            ],
            string_double: [
                [/[^\\"]+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/"/, "string", "@pop"],
            ],
            string_single: [
                [/[^\\']+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/'/, "string", "@pop"],
            ],
            string_backtick: [
                [/[^\\`$]+/, "string"],
                [/@escapes/, "string.escape"],
                [/\\./, "string.escape.invalid"],
                [/`/, "string", "@pop"],
            ],
            clauses: [
                [/[^(,)]/, "tag"],
                [/\)/, "identifier", "@pop"],
            ],
            whitespace: [[/[ \t\r\n]+/, "white"]],
        },
    };
}
exports.getGoogleSqlLanguageDefinition = getGoogleSqlLanguageDefinition;
