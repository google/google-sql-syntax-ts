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
exports.BIGQUERY_FUNCTIONS = void 0;
const ANY_VALUE = {
    name: "ANY_VALUE",
    args: "expression",
    description: "",
    url: "",
};
const ARRAY_AGG = {
    name: "ARRAY_AGG",
    args: "[DISTINCT]  expression  [{IGNORE|RESPECT} NULLS]  [ORDER BY key [{ASC|DESC}] [, ... ]]  [LIMIT n]",
    description: "",
    url: "",
};
const ARRAY_CONCAT_AGG = {
    name: "ARRAY_CONCAT_AGG",
    args: "expression  [ORDER BY key [{ASC|DESC}] [, ... ]]  [LIMIT n]",
    description: "",
    url: "",
};
const AVG = {
    name: "AVG",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const BIT_AND = {
    name: "BIT_AND",
    args: "expression",
    description: "",
    url: "",
};
const BIT_OR = {
    name: "BIT_OR",
    args: "expression",
    description: "",
    url: "",
};
const BIT_XOR = {
    name: "BIT_XOR",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const COUNT = {
    name: "COUNT",
    args: "",
    description: "",
    url: "",
};
const COUNTIF = {
    name: "COUNTIF",
    args: "expression",
    description: "",
    url: "",
};
const LOGICAL_AND = {
    name: "LOGICAL_AND",
    args: "expression",
    description: "",
    url: "",
};
const LOGICAL_OR = {
    name: "LOGICAL_OR",
    args: "expression",
    description: "",
    url: "",
};
const MAX = {
    name: "MAX",
    args: "expression",
    description: "",
    url: "",
};
const MIN = {
    name: "MIN",
    args: "expression",
    description: "",
    url: "",
};
const STRING_AGG = {
    name: "STRING_AGG",
    args: "[DISTINCT]  expression [, delimiter]  [ORDER BY key [{ASC|DESC}] [, ... ]]  [LIMIT n]",
    description: "",
    url: "",
};
const SUM = {
    name: "SUM",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const CORR = {
    name: "CORR",
    args: "X1, X2",
    description: "",
    url: "",
};
const COVAR_POP = {
    name: "COVAR_POP",
    args: "X1, X2",
    description: "",
    url: "",
};
const COVAR_SAMP = {
    name: "COVAR_SAMP",
    args: "X1, X2",
    description: "",
    url: "",
};
const STDDEV_POP = {
    name: "STDDEV_POP",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const STDDEV_SAMP = {
    name: "STDDEV_SAMP",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const STDDEV = {
    name: "STDDEV",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const VAR_POP = {
    name: "VAR_POP",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const VAR_SAMP = {
    name: "VAR_SAMP",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const VARIANCE = {
    name: "VARIANCE",
    args: "[DISTINCT]  expression",
    description: "",
    url: "",
};
const APPROX_COUNT_DISTINCT = {
    name: "APPROX_COUNT_DISTINCT",
    args: "expression",
    description: "",
    url: "",
};
const APPROX_QUANTILES = {
    name: "APPROX_QUANTILES",
    args: "[DISTINCT]  expression, number  [{IGNORE|RESPECT} NULLS]",
    description: "",
    url: "",
};
const APPROX_TOP_COUNT = {
    name: "APPROX_TOP_COUNT",
    args: "expression, number",
    description: "",
    url: "",
};
const APPROX_TOP_SUM = {
    name: "APPROX_TOP_SUM",
    args: "expression, weight, number",
    description: "",
    url: "",
};
const HLL_COUNT__INIT = {
    name: "HLL_COUNT.INIT",
    args: "input [, precision]",
    description: "",
    url: "",
};
const HLL_COUNT__MERGE = {
    name: "HLL_COUNT.MERGE",
    args: "sketch",
    description: "",
    url: "",
};
const HLL_COUNT__MERGE_PARTIAL = {
    name: "HLL_COUNT.MERGE_PARTIAL",
    args: "sketch",
    description: "",
    url: "",
};
const HLL_COUNT__EXTRACT = {
    name: "HLL_COUNT.EXTRACT",
    args: "sketch",
    description: "",
    url: "",
};
const RANK = {
    name: "RANK",
    args: "",
    description: "",
    url: "",
};
const DENSE_RANK = {
    name: "DENSE_RANK",
    args: "",
    description: "",
    url: "",
};
const PERCENT_RANK = {
    name: "PERCENT_RANK",
    args: "",
    description: "",
    url: "",
};
const CUME_DIST = {
    name: "CUME_DIST",
    args: "",
    description: "",
    url: "",
};
const NTILE = {
    name: "NTILE",
    args: "constant_integer_expression",
    description: "",
    url: "",
};
const ROW_NUMBER = {
    name: "ROW_NUMBER",
    args: "",
    description: "",
    url: "",
};
const BIT_COUNT = {
    name: "BIT_COUNT",
    args: "expression",
    description: "",
    url: "",
};
const CAST = {
    name: "CAST",
    args: "",
    description: "",
    url: "",
};
const PARSE_BIGNUMERIC = {
    name: "PARSE_BIGNUMERIC",
    args: "string_expression",
    description: "",
    url: "",
};
const PARSE_NUMERIC = {
    name: "PARSE_NUMERIC",
    args: "string_expression",
    description: "",
    url: "",
};
const SAFE_CAST = {
    name: "SAFE_CAST",
    args: "expression",
    description: "",
    url: "",
};
const ABS = {
    name: "ABS",
    args: "X",
    description: "",
    url: "",
};
const SIGN = {
    name: "SIGN",
    args: "X",
    description: "",
    url: "",
};
const IS_INF = {
    name: "IS_INF",
    args: "X",
    description: "",
    url: "",
};
const IS_NAN = {
    name: "IS_NAN",
    args: "X",
    description: "",
    url: "",
};
const IEEE_DIVIDE = {
    name: "IEEE_DIVIDE",
    args: "X, Y",
    description: "",
    url: "",
};
const RAND = {
    name: "RAND",
    args: "",
    description: "",
    url: "",
};
const SQRT = {
    name: "SQRT",
    args: "X",
    description: "",
    url: "",
};
const POW = {
    name: "POW",
    args: "X, Y",
    description: "",
    url: "",
};
const POWER = {
    name: "POWER",
    args: "X, Y",
    description: "",
    url: "",
};
const EXP = {
    name: "EXP",
    args: "X",
    description: "",
    url: "",
};
const LN = {
    name: "LN",
    args: "X",
    description: "",
    url: "",
};
const LOG = {
    name: "LOG",
    args: "X [, Y]",
    description: "",
    url: "",
};
const LOG10 = {
    name: "LOG10",
    args: "X",
    description: "",
    url: "",
};
const GREATEST = {
    name: "GREATEST",
    args: "X1,...,XN",
    description: "",
    url: "",
};
const LEAST = {
    name: "LEAST",
    args: "X1,...,XN",
    description: "",
    url: "",
};
const DIV = {
    name: "DIV",
    args: "X, Y",
    description: "",
    url: "",
};
const SAFE_DIVIDE = {
    name: "SAFE_DIVIDE",
    args: "X, Y",
    description: "",
    url: "",
};
const SAFE_MULTIPLY = {
    name: "SAFE_MULTIPLY",
    args: "X, Y",
    description: "",
    url: "",
};
const SAFE_NEGATE = {
    name: "SAFE_NEGATE",
    args: "X",
    description: "",
    url: "",
};
const SAFE_ADD = {
    name: "SAFE_ADD",
    args: "X, Y",
    description: "",
    url: "",
};
const SAFE_SUBTRACT = {
    name: "SAFE_SUBTRACT",
    args: "X, Y",
    description: "",
    url: "",
};
const MOD = {
    name: "MOD",
    args: "X, Y",
    description: "",
    url: "",
};
const ROUND = {
    name: "ROUND",
    args: "X [, N]",
    description: "",
    url: "",
};
const TRUNC = {
    name: "TRUNC",
    args: "X [, N]",
    description: "",
    url: "",
};
const CEIL = {
    name: "CEIL",
    args: "X",
    description: "",
    url: "",
};
const CEILING = {
    name: "CEILING",
    args: "X",
    description: "",
    url: "",
};
const FLOOR = {
    name: "FLOOR",
    args: "X",
    description: "",
    url: "",
};
const COS = {
    name: "COS",
    args: "X",
    description: "",
    url: "",
};
const COSH = {
    name: "COSH",
    args: "X",
    description: "",
    url: "",
};
const ACOS = {
    name: "ACOS",
    args: "X",
    description: "",
    url: "",
};
const ACOSH = {
    name: "ACOSH",
    args: "X",
    description: "",
    url: "",
};
const SIN = {
    name: "SIN",
    args: "X",
    description: "",
    url: "",
};
const SINH = {
    name: "SINH",
    args: "X",
    description: "",
    url: "",
};
const ASIN = {
    name: "ASIN",
    args: "X",
    description: "",
    url: "",
};
const ASINH = {
    name: "ASINH",
    args: "X",
    description: "",
    url: "",
};
const TAN = {
    name: "TAN",
    args: "X",
    description: "",
    url: "",
};
const TANH = {
    name: "TANH",
    args: "X",
    description: "",
    url: "",
};
const ATAN = {
    name: "ATAN",
    args: "X",
    description: "",
    url: "",
};
const ATANH = {
    name: "ATANH",
    args: "X",
    description: "",
    url: "",
};
const ATAN2 = {
    name: "ATAN2",
    args: "X, Y",
    description: "",
    url: "",
};
const RANGE_BUCKET = {
    name: "RANGE_BUCKET",
    args: "point, boundaries_array",
    description: "",
    url: "",
};
const FIRST_VALUE = {
    name: "FIRST_VALUE",
    args: "value_expression [{RESPECT | IGNORE} NULLS]",
    description: "",
    url: "",
};
const LAST_VALUE = {
    name: "LAST_VALUE",
    args: "value_expression [{RESPECT | IGNORE} NULLS]",
    description: "",
    url: "",
};
const NTH_VALUE = {
    name: "NTH_VALUE",
    args: "value_expression, constant_integer_expression [{RESPECT | IGNORE} NULLS]",
    description: "",
    url: "",
};
const LEAD = {
    name: "LEAD",
    args: "value_expression[, offset [, default_expression]]",
    description: "",
    url: "",
};
const LAG = {
    name: "LAG",
    args: "value_expression[, offset [, default_expression]]",
    description: "",
    url: "",
};
const PERCENTILE_CONT = {
    name: "PERCENTILE_CONT",
    args: "value_expression, percentile [{RESPECT | IGNORE} NULLS]",
    description: "",
    url: "",
};
const PERCENTILE_DISC = {
    name: "PERCENTILE_DISC",
    args: "value_expression, percentile [{RESPECT | IGNORE} NULLS]",
    description: "",
    url: "",
};
const FARM_FINGERPRINT = {
    name: "FARM_FINGERPRINT",
    args: "value",
    description: "",
    url: "",
};
const MD5 = {
    name: "MD5",
    args: "input",
    description: "",
    url: "",
};
const SHA1 = {
    name: "SHA1",
    args: "input",
    description: "",
    url: "",
};
const SHA256 = {
    name: "SHA256",
    args: "input",
    description: "",
    url: "",
};
const SHA512 = {
    name: "SHA512",
    args: "input",
    description: "",
    url: "",
};
const ASCII = {
    name: "ASCII",
    args: "value",
    description: "",
    url: "",
};
const BYTE_LENGTH = {
    name: "BYTE_LENGTH",
    args: "value",
    description: "",
    url: "",
};
const CHAR_LENGTH = {
    name: "CHAR_LENGTH",
    args: "value",
    description: "",
    url: "",
};
const CHARACTER_LENGTH = {
    name: "CHARACTER_LENGTH",
    args: "value",
    description: "",
    url: "",
};
const CHR = {
    name: "CHR",
    args: "value",
    description: "",
    url: "",
};
const CODE_POINTS_TO_BYTES = {
    name: "CODE_POINTS_TO_BYTES",
    args: "ascii_values",
    description: "",
    url: "",
};
const CODE_POINTS_TO_STRING = {
    name: "CODE_POINTS_TO_STRING",
    args: "value",
    description: "",
    url: "",
};
const CONCAT = {
    name: "CONCAT",
    args: "value1[, ...]",
    description: "",
    url: "",
};
const CONTAINS_SUBSTR = {
    name: "CONTAINS_SUBSTR",
    args: "expression, search_value_literal",
    description: "",
    url: "",
};
const ENDS_WITH = {
    name: "ENDS_WITH",
    args: "value1, value2",
    description: "",
    url: "",
};
const FORMAT = {
    name: "FORMAT",
    args: "format_string_expression, data_type_expression[, ...]",
    description: "",
    url: "",
};
const FROM_BASE32 = {
    name: "FROM_BASE32",
    args: "string_expr",
    description: "",
    url: "",
};
const FROM_BASE64 = {
    name: "FROM_BASE64",
    args: "string_expr",
    description: "",
    url: "",
};
const FROM_HEX = {
    name: "FROM_HEX",
    args: "string",
    description: "",
    url: "",
};
const INITCAP = {
    name: "INITCAP",
    args: "value[, delimiters]",
    description: "",
    url: "",
};
const INSTR = {
    name: "INSTR",
    args: "source_value, search_value[, position[, occurrence]]",
    description: "",
    url: "",
};
const LEFT = {
    name: "LEFT",
    args: "value, length",
    description: "",
    url: "",
};
const LENGTH = {
    name: "LENGTH",
    args: "value",
    description: "",
    url: "",
};
const LPAD = {
    name: "LPAD",
    args: "original_value, return_length[, pattern]",
    description: "",
    url: "",
};
const LOWER = {
    name: "LOWER",
    args: "value",
    description: "",
    url: "",
};
const LTRIM = {
    name: "LTRIM",
    args: "value1[, value2]",
    description: "",
    url: "",
};
const NORMALIZE = {
    name: "NORMALIZE",
    args: "value[, normalization_mode]",
    description: "",
    url: "",
};
const NORMALIZE_AND_CASEFOLD = {
    name: "NORMALIZE_AND_CASEFOLD",
    args: "value[, normalization_mode]",
    description: "",
    url: "",
};
const OCTET_LENGTH = {
    name: "OCTET_LENGTH",
    args: "value",
    description: "",
    url: "",
};
const REGEXP_CONTAINS = {
    name: "REGEXP_CONTAINS",
    args: "value, regexp",
    description: "",
    url: "",
};
const REGEXP_EXTRACT = {
    name: "REGEXP_EXTRACT",
    args: "value, regexp[, position[, occurrence]]",
    description: "",
    url: "",
};
const REGEXP_EXTRACT_ALL = {
    name: "REGEXP_EXTRACT_ALL",
    args: "value, regexp",
    description: "",
    url: "",
};
const REGEXP_INSTR = {
    name: "REGEXP_INSTR",
    args: "source_value, regexp[, position[, occurrence, [occurrence_position]]]",
    description: "",
    url: "",
};
const REGEXP_REPLACE = {
    name: "REGEXP_REPLACE",
    args: "value, regexp, replacement",
    description: "",
    url: "",
};
const REGEXP_SUBSTR = {
    name: "REGEXP_SUBSTR",
    args: "value, regexp[, position[, occurrence]]",
    description: "",
    url: "",
};
const REPLACE = {
    name: "REPLACE",
    args: "original_value, from_value, to_value",
    description: "",
    url: "",
};
const REPEAT = {
    name: "REPEAT",
    args: "original_value, repetitions",
    description: "",
    url: "",
};
const REVERSE = {
    name: "REVERSE",
    args: "value",
    description: "",
    url: "",
};
const RIGHT = {
    name: "RIGHT",
    args: "value, length",
    description: "",
    url: "",
};
const RPAD = {
    name: "RPAD",
    args: "original_value, return_length[, pattern]",
    description: "",
    url: "",
};
const RTRIM = {
    name: "RTRIM",
    args: "value1[, value2]",
    description: "",
    url: "",
};
const SAFE_CONVERT_BYTES_TO_STRING = {
    name: "SAFE_CONVERT_BYTES_TO_STRING",
    args: "value",
    description: "",
    url: "",
};
const SOUNDEX = {
    name: "SOUNDEX",
    args: "value",
    description: "",
    url: "",
};
const SPLIT = {
    name: "SPLIT",
    args: "value[, delimiter]",
    description: "",
    url: "",
};
const STARTS_WITH = {
    name: "STARTS_WITH",
    args: "value1, value2",
    description: "",
    url: "",
};
const STRPOS = {
    name: "STRPOS",
    args: "value1, value2",
    description: "",
    url: "",
};
const SUBSTR = {
    name: "SUBSTR",
    args: "value, position[, length]",
    description: "",
    url: "",
};
const SUBSTRING = {
    name: "SUBSTRING",
    args: "value, position[, length]",
    description: "",
    url: "",
};
const TO_BASE32 = {
    name: "TO_BASE32",
    args: "bytes_expr",
    description: "",
    url: "",
};
const TO_BASE64 = {
    name: "TO_BASE64",
    args: "bytes_expr",
    description: "",
    url: "",
};
const TO_CODE_POINTS = {
    name: "TO_CODE_POINTS",
    args: "value",
    description: "",
    url: "",
};
const TO_HEX = {
    name: "TO_HEX",
    args: "bytes",
    description: "",
    url: "",
};
const TRANSLATE = {
    name: "TRANSLATE",
    args: "expression, source_characters, target_characters",
    description: "",
    url: "",
};
const TRIM = {
    name: "TRIM",
    args: "value1[, value2]",
    description: "",
    url: "",
};
const UNICODE = {
    name: "UNICODE",
    args: "value",
    description: "",
    url: "",
};
const UPPER = {
    name: "UPPER",
    args: "value",
    description: "",
    url: "",
};
const JSON_EXTRACT = {
    name: "JSON_EXTRACT",
    args: [
        { args: "json_string_expr, json_path" },
        { args: "json_expr, json_path" },
    ],
    description: "Extracts a JSON value, such as an array or object, or a JSON " +
        "scalar value, such as a string, number, or boolean. If a JSON key " +
        "uses invalid JSONPath characters, then you can escape those " +
        "characters using single quotes and brackets.",
};
const JSON_QUERY = {
    name: "JSON_QUERY",
    args: [
        { args: "json_string_expr, json_path" },
        { args: "json_expr, json_path" },
    ],
    description: "Extracts a JSON value, such as an array or object, or a JSON " +
        "scalar value, such as a string, number, or boolean. If a JSON key " +
        "uses invalid JSONPath characters, then you can escape those " +
        "characters using double quotes.",
};
const JSON_EXTRACT_SCALAR = {
    name: "JSON_EXTRACT_SCALAR",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts a scalar value and then returns it as a string. A " +
        "scalar value can represent a string, number, or boolean. Removes the " +
        "outermost quotes and unescapes the return values. If a JSON key uses " +
        "invalid JSONPath characters, then you can escape those characters " +
        "using single quotes and brackets.",
};
const JSON_VALUE = {
    name: "JSON_VALUE",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts a scalar value and then returns it as a string. A " +
        "scalar value can represent a string, number, or boolean. Removes the " +
        "outermost quotes and unescapes the return values. If a JSON key uses " +
        "invalid JSONPath characters, then you can escape those characters " +
        "using double quotes.",
};
const JSON_EXTRACT_ARRAY = {
    name: "JSON_EXTRACT_ARRAY",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts a scalar value and then returns it as a string. A " +
        "scalar value can represent a string, number, or boolean. Removes the " +
        "outermost quotes and unescapes the return values. If a JSON key uses " +
        "invalid JSONPath characters, then you can escape those characters " +
        "using single quotes and brackets.",
};
const JSON_QUERY_ARRAY = {
    name: "JSON_QUERY_ARRAY",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts an array of JSON values, such as arrays or objects, " +
        "and JSON scalar values, such as strings, numbers, and booleans. If a " +
        "JSON key uses invalid JSONPath characters, then you can escape those " +
        "characters using double quotes.",
};
const JSON_EXTRACT_STRING_ARRAY = {
    name: "JSON_EXTRACT_STRING_ARRAY",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts an array of scalar values and returns an array of " +
        "string-formatted scalar values. A scalar value can represent a " +
        "string, number, or boolean. If a JSON key uses invalid JSONPath " +
        "characters, you can escape those characters using single quotes and " +
        "brackets.",
};
const JSON_VALUE_ARRAY = {
    name: "JSON_VALUE_ARRAY",
    args: [
        { args: "json_string_expr[, json_path]" },
        { args: "json_expr[, json_path]" },
    ],
    description: "Extracts an array of scalar values and returns an array of " +
        "string-formatted scalar values. A scalar value can represent a " +
        "string, number, or boolean. If a JSON key uses invalid JSONPath " +
        "characters, you can escape those characters using double quotes.",
};
const PARSE_JSON = {
    name: "PARSE_JSON",
    args: "json_string_expr[, wide_number_mode=>{ 'exact' | 'round' }]",
    description: "Takes a SQL STRING value and returns a SQL JSON value. The " +
        "STRING value represents a string-formatted JSON value.",
};
const TO_JSON = {
    name: "TO_JSON",
    args: "sql_value[, stringify_wide_numbers=>{ TRUE | FALSE }]",
    description: "Takes a SQL value and returns a JSON value. The value must be" +
        " a supported BigQuery data type.",
};
const TO_JSON_STRING = {
    name: "TO_JSON_STRING",
    args: "value[, pretty_print]",
    description: "Takes a SQL value and returns a JSON-formatted string " +
        "representation of the value. The value must be a supported BigQuery " +
        "data type.",
};
const BOOL = {
    name: "BOOL",
    args: "json_expr",
    description: "Takes a JSON expression, extracts a JSON boolean, and " +
        "returns that value as a SQL BOOL. If the expression is SQL NULL, the " +
        "function returns SQL NULL. If the extracted JSON value is not a " +
        "boolean, an error is produced.",
};
const INT64 = {
    name: "INT64",
    args: "json_expr",
    description: "Takes a JSON expression, extracts a JSON number and returns " +
        "that value as a SQL INT64. If the expression is SQL NULL, the " +
        "function returns SQL NULL. If the extracted JSON number has a " +
        "fractional part or is outside of the INT64 domain, an error is " +
        "produced.",
};
const FLOAT64 = {
    name: "FLOAT64",
    args: "json_expr[, wide_number_mode=>{ 'exact' | 'round' }]",
    description: "Takes a JSON expression, extracts a JSON number and returns " +
        "that value as a SQL FLOAT64. If the expression is SQL NULL, the " +
        "function returns SQL NULL. If the extracted JSON value is not a " +
        "number, an error is produced.",
};
const JSON_TYPE = {
    name: "JSON_TYPE",
    args: "json_expr",
    description: "Takes a JSON expression and returns the type of the " +
        "outermost JSON value as a SQL STRING. If the expression is SQL NULL, " +
        "the function returns SQL NULL. If the extracted JSON value is not a " +
        "valid JSON type, an error is produced.",
};
const ARRAY = {
    name: "ARRAY",
    args: "subquery",
    description: "",
    url: "",
};
const ARRAY_CONCAT = {
    name: "ARRAY_CONCAT",
    args: "array_expression[, ...]",
    description: "",
    url: "",
};
const ARRAY_LENGTH = {
    name: "ARRAY_LENGTH",
    args: "array_expression",
    description: "",
    url: "",
};
const ARRAY_TO_STRING = {
    name: "ARRAY_TO_STRING",
    args: "array_expression, delimiter[, null_text]",
    description: "",
    url: "",
};
const GENERATE_ARRAY = {
    name: "GENERATE_ARRAY",
    args: "start_expression, end_expression[, step_expression]",
    description: "",
    url: "",
};
const GENERATE_DATE_ARRAY = {
    name: "GENERATE_DATE_ARRAY",
    args: "start_date, end_date[, INTERVAL INT64_expr date_part]",
    description: "",
    url: "",
};
const GENERATE_TIMESTAMP_ARRAY = {
    name: "GENERATE_TIMESTAMP_ARRAY",
    args: "start_timestamp, end_timestamp, INTERVAL step_expression date_part",
    description: "",
    url: "",
};
const OFFSET = {
    name: "OFFSET",
    args: "zero_based_offset",
    description: "",
    url: "",
};
const ORDINAL = {
    name: "ORDINAL",
    args: "one_based_offset",
    description: "",
    url: "",
};
const ARRAY_REVERSE = {
    name: "ARRAY_REVERSE",
    args: "value",
    description: "",
    url: "",
};
const SAFE_OFFSET = {
    name: "SAFE_OFFSET",
    args: "zero_based_offset",
    description: "",
    url: "",
};
const SAFE_ORDINAL = {
    name: "SAFE_ORDINAL",
    args: "one_based_offset",
    description: "",
    url: "",
};
const CURRENT_DATE = {
    name: "CURRENT_DATE",
    args: "[time_zone]",
    description: "",
    url: "",
};
const DATE_1 = {
    name: "DATE",
    args: "year, month, day",
    description: "",
    url: "",
};
const DATE_2 = {
    name: "DATE",
    args: "timestamp_expression[, timezone]",
    description: "",
    url: "",
};
const DATE_3 = {
    name: "DATE",
    args: "datetime_expression",
    description: "",
    url: "",
};
const DATE_ADD = {
    name: "DATE_ADD",
    args: "date_expression, INTERVAL int64_expression date_part",
    description: "",
    url: "",
};
const DATE_BUCKET = {
    name: "DATE_BUCKET",
    args: "date_expression, bucket_width [, origin]",
    description: "Gets the lower bound of the date bucket that contains a date.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
        "functions-and-operators#date_bucket",
};
const DATE_SUB = {
    name: "DATE_SUB",
    args: "date_expression, INTERVAL int64_expression date_part",
    description: "",
    url: "",
};
const DATE_DIFF = {
    name: "DATE_DIFF",
    args: "date_expression_a, date_expression_b, date_part",
    description: "",
    url: "",
};
const DATE_TRUNC = {
    name: "DATE_TRUNC",
    args: "date_expression, date_part",
    description: "",
    url: "",
};
const DATE_FROM_UNIX_DATE = {
    name: "DATE_FROM_UNIX_DATE",
    args: "int64_expression",
    description: "",
    url: "",
};
const FORMAT_DATE = {
    name: "FORMAT_DATE",
    args: "format_string, date_expr",
    description: "",
    url: "",
};
const LAST_DAY = {
    name: "LAST_DAY",
    args: "date_expression[, date_part]",
    description: "",
    url: "",
};
const PARSE_DATE = {
    name: "PARSE_DATE",
    args: "format_string, date_string",
    description: "",
    url: "",
};
const UNIX_DATE = {
    name: "UNIX_DATE",
    args: "date_expression",
    description: "",
    url: "",
};
const CURRENT_DATETIME = {
    name: "CURRENT_DATETIME",
    args: "[timezone]",
    description: "",
    url: "",
};
const DATETIME_1 = {
    name: "DATETIME",
    args: "year, month, day, hour, minute, second",
    description: "",
    url: "",
};
const DATETIME_2 = {
    name: "DATETIME",
    args: "date_expression[, time_expression]",
    description: "",
    url: "",
};
const DATETIME_3 = {
    name: "DATETIME",
    args: "timestamp_expression[, timezone]",
    description: "",
    url: "",
};
const DATETIME_ADD = {
    name: "DATETIME_ADD",
    args: "datetime_expression, INTERVAL int64_expression part",
    description: "",
    url: "",
};
const DATETIME_BUCKET = {
    name: "DATETIME_BUCKET",
    args: "datetime_expression, bucket_width [, origin]",
    description: "Gets the lower bound of the datetime bucket that contains a datetime.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
        "functions-and-operators#datetime_bucket",
};
const DATETIME_SUB = {
    name: "DATETIME_SUB",
    args: "datetime_expression, INTERVAL int64_expression part",
    description: "",
    url: "",
};
const DATETIME_DIFF = {
    name: "DATETIME_DIFF",
    args: "datetime_expression_a, datetime_expression_b, part",
    description: "",
    url: "",
};
const DATETIME_TRUNC = {
    name: "DATETIME_TRUNC",
    args: "datetime_expression, part",
    description: "",
    url: "",
};
const FORMAT_DATETIME = {
    name: "FORMAT_DATETIME",
    args: "format_string, datetime_expression",
    description: "",
    url: "",
};
const PARSE_DATETIME = {
    name: "PARSE_DATETIME",
    args: "format_string, datetime_string",
    description: "",
    url: "",
};
const CURRENT_TIME = {
    name: "CURRENT_TIME",
    args: "[timezone]",
    description: "",
    url: "",
};
const TIME_1 = {
    name: "TIME",
    args: "hour, minute, second",
    description: "",
    url: "",
};
const TIME_2 = {
    name: "TIME",
    args: "timestamp, [timezone]",
    description: "",
    url: "",
};
const TIME_3 = {
    name: "TIME",
    args: "datetime",
    description: "",
    url: "",
};
const TIME_ADD = {
    name: "TIME_ADD",
    args: "time_expression, INTERVAL int64_expression part",
    description: "",
    url: "",
};
const TIME_SUB = {
    name: "TIME_SUB",
    args: "time_expression, INTERVAL int64_expression part",
    description: "",
    url: "",
};
const TIME_DIFF = {
    name: "TIME_DIFF",
    args: "time_expression_a, time_expression_b, part",
    description: "",
    url: "",
};
const TIME_TRUNC = {
    name: "TIME_TRUNC",
    args: "time_expression, part",
    description: "",
    url: "",
};
const FORMAT_TIME = {
    name: "FORMAT_TIME",
    args: "format_string, time_object",
    description: "",
    url: "",
};
const PARSE_TIME = {
    name: "PARSE_TIME",
    args: "format_string, time_string",
    description: "",
    url: "",
};
const CURRENT_TIMESTAMP = {
    name: "CURRENT_TIMESTAMP",
    args: "",
    description: "",
    url: "",
};
const STRING = {
    name: "STRING",
    args: [
        {
            args: "timestamp_expression[, timezone]",
            description: "Converts a timestamp_expression to a STRING data type. " +
                "Supports an optional parameter to specify a time zone.",
        },
        {
            args: "json_expr",
            description: "Takes a JSON expression, extracts a JSON string, and " +
                "returns that value as a SQL STRING. If the expression is SQL " +
                "NULL, the function returns SQL NULL. If the extracted JSON value " +
                "is not a string, an error is produced.",
        },
    ],
    description: "",
};
const TIMESTAMP_1 = {
    name: "TIMESTAMP",
    args: "string_expression[, timezone]",
    description: "",
    url: "",
};
const TIMESTAMP_2 = {
    name: "TIMESTAMP",
    args: "date_expression[, timezone]",
    description: "",
    url: "",
};
const TIMESTAMP_3 = {
    name: "TIMESTAMP",
    args: "datetime_expression[, timezone]",
    description: "",
    url: "",
};
const TIMESTAMP_ADD = {
    name: "TIMESTAMP_ADD",
    args: "timestamp_expression, INTERVAL int64_expression date_part",
    description: "",
    url: "",
};
const TIMESTAMP_BUCKET = {
    name: "TIMESTAMP_BUCKET",
    args: "timestamp_expression, bucket_width [, origin]",
    description: "Gets the lower bound of the timestamp bucket that contains a timestamp.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/" +
        "functions-and-operators#timestamp_bucket",
};
const TIMESTAMP_SUB = {
    name: "TIMESTAMP_SUB",
    args: "timestamp_expression, INTERVAL int64_expression date_part",
    description: "",
    url: "",
};
const TIMESTAMP_DIFF = {
    name: "TIMESTAMP_DIFF",
    args: "timestamp_expression_a, timestamp_expression_b, date_part",
    description: "",
    url: "",
};
const TIMESTAMP_TRUNC = {
    name: "TIMESTAMP_TRUNC",
    args: "timestamp_expression, date_part[, timezone]",
    description: "",
    url: "",
};
const FORMAT_TIMESTAMP = {
    name: "FORMAT_TIMESTAMP",
    args: "format_string, timestamp[, timezone]",
    description: "",
    url: "",
};
const PARSE_TIMESTAMP = {
    name: "PARSE_TIMESTAMP",
    args: "format_string, timestamp_string[, timezone]",
    description: "",
    url: "",
};
const TIMESTAMP_SECONDS = {
    name: "TIMESTAMP_SECONDS",
    args: "int64_expression",
    description: "",
    url: "",
};
const TIMESTAMP_MILLIS = {
    name: "TIMESTAMP_MILLIS",
    args: "int64_expression",
    description: "",
    url: "",
};
const TIMESTAMP_MICROS = {
    name: "TIMESTAMP_MICROS",
    args: "int64_expression",
    description: "",
    url: "",
};
const UNIX_SECONDS = {
    name: "UNIX_SECONDS",
    args: "timestamp_expression",
    description: "",
    url: "",
};
const UNIX_MILLIS = {
    name: "UNIX_MILLIS",
    args: "timestamp_expression",
    description: "",
    url: "",
};
const UNIX_MICROS = {
    name: "UNIX_MICROS",
    args: "timestamp_expression",
    description: "",
    url: "",
};
const MAKE_INTERVAL = {
    name: "MAKE_INTERVAL",
    args: "year, month, day, hour, minute, second",
    description: "",
    url: "",
};
const JUSTIFY_DAYS = {
    name: "JUSTIFY_DAYS",
    args: "interval_expression",
    description: "",
    url: "",
};
const JUSTIFY_HOURS = {
    name: "JUSTIFY_HOURS",
    args: "interval_expression",
    description: "",
    url: "",
};
const JUSTIFY_INTERVAL = {
    name: "JUSTIFY_INTERVAL",
    args: "interval_expression",
    description: "",
    url: "",
};
const ST_AREA = {
    name: "ST_AREA",
    args: "geography_expression[, use_spheroid]",
    description: "",
    url: "",
};
const ST_ASBINARY = {
    name: "ST_ASBINARY",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_ASGEOJSON = {
    name: "ST_ASGEOJSON",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_ASTEXT = {
    name: "ST_ASTEXT",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_BOUNDARY = {
    name: "ST_BOUNDARY",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_CENTROID = {
    name: "ST_CENTROID",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_CENTROID_AGG = {
    name: "ST_CENTROID_AGG",
    args: "geography",
    description: "",
    url: "",
};
const ST_CLOSESTPOINT = {
    name: "ST_CLOSESTPOINT",
    args: "geography_1, geography_2[, use_spheroid]",
    description: "",
    url: "",
};
const ST_CLUSTERDBSCAN = {
    name: "ST_CLUSTERDBSCAN",
    args: "geography_column, epsilon, minimum_geographies) OVER(...",
    description: "",
    url: "",
};
const ST_CONTAINS = {
    name: "ST_CONTAINS",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_CONVEXHULL = {
    name: "ST_CONVEXHULL",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_COVEREDBY = {
    name: "ST_COVEREDBY",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_COVERS = {
    name: "ST_COVERS",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_DIFFERENCE = {
    name: "ST_DIFFERENCE",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_DIMENSION = {
    name: "ST_DIMENSION",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_DISJOINT = {
    name: "ST_DISJOINT",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_DISTANCE = {
    name: "ST_DISTANCE",
    args: "geography_1, geography_2[, use_spheroid]",
    description: "",
    url: "",
};
const ST_DUMP = {
    name: "ST_DUMP",
    args: "geography[, dimension]",
    description: "",
    url: "",
};
const ST_DWITHIN = {
    name: "ST_DWITHIN",
    args: "geography_1, geography_2, distance[, use_spheroid]",
    description: "",
    url: "",
};
const ST_ENDPOINT = {
    name: "ST_ENDPOINT",
    args: "linestring_geography",
    description: "",
    url: "",
};
const ST_EQUALS = {
    name: "ST_EQUALS",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_EXTERIORRING = {
    name: "ST_EXTERIORRING",
    args: "polygon_geography",
    description: "",
    url: "",
};
const ST_GEOGFROM = {
    name: "ST_GEOGFROM",
    args: "expression",
    description: "",
    url: "",
};
const ST_GEOGFROMGEOJSON = {
    name: "ST_GEOGFROMGEOJSON",
    args: "geojson_string[, make_valid => constant_expression]",
    description: "",
    url: "",
};
const ST_GEOGFROMTEXT_1 = {
    name: "ST_GEOGFROMTEXT",
    args: "wkt_string[, oriented]",
    description: "",
    url: "",
};
const ST_GEOGFROMTEXT_2 = {
    name: "ST_GEOGFROMTEXT",
    args: "wkt_string[, oriented => boolean_constant_1][, planar => boolean_constant_2][, make_valid => boolean_constant_3]",
    description: "",
    url: "",
};
const ST_GEOGFROMWKB_1 = {
    name: "ST_GEOGFROMWKB",
    args: "wkb_bytes_expression",
    description: "",
    url: "",
};
const ST_GEOGFROMWKB_2 = {
    name: "ST_GEOGFROMWKB",
    args: "wkb_hex_string_expression",
    description: "",
    url: "",
};
const ST_GEOGPOINT = {
    name: "ST_GEOGPOINT",
    args: "longitude, latitude",
    description: "",
    url: "",
};
const ST_GEOGPOINTFROMGEOHASH = {
    name: "ST_GEOGPOINTFROMGEOHASH",
    args: "geohash",
    description: "",
    url: "",
};
const ST_GEOHASH = {
    name: "ST_GEOHASH",
    args: "geography_expression, maxchars",
    description: "",
    url: "",
};
const ST_INTERSECTION = {
    name: "ST_INTERSECTION",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_INTERSECTS = {
    name: "ST_INTERSECTS",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_INTERSECTSBOX = {
    name: "ST_INTERSECTSBOX",
    args: "geography, lng1, lat1, lng2, lat2",
    description: "",
    url: "",
};
const ST_ISCOLLECTION = {
    name: "ST_ISCOLLECTION",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_ISEMPTY = {
    name: "ST_ISEMPTY",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_LENGTH = {
    name: "ST_LENGTH",
    args: "geography_expression[, use_spheroid]",
    description: "",
    url: "",
};
const ST_MAKELINE_1 = {
    name: "ST_MAKELINE",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_MAKELINE_2 = {
    name: "ST_MAKELINE",
    args: "array_of_geography",
    description: "",
    url: "",
};
const ST_MAKEPOLYGON = {
    name: "ST_MAKEPOLYGON",
    args: "geography_expression[, array_of_geography]",
    description: "",
    url: "",
};
const ST_MAKEPOLYGONORIENTED = {
    name: "ST_MAKEPOLYGONORIENTED",
    args: "array_of_geography",
    description: "",
    url: "",
};
const ST_MAXDISTANCE = {
    name: "ST_MAXDISTANCE",
    args: "geography_1, geography_2[, use_spheroid]",
    description: "",
    url: "",
};
const ST_NUMGEOMETRIES = {
    name: "ST_NUMGEOMETRIES",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_NUMPOINTS = {
    name: "ST_NUMPOINTS",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_PERIMETER = {
    name: "ST_PERIMETER",
    args: "geography_expression[, use_spheroid]",
    description: "",
    url: "",
};
const ST_POINTN = {
    name: "ST_POINTN",
    args: "linestring_geography, index",
    description: "",
    url: "",
};
const ST_SIMPLIFY = {
    name: "ST_SIMPLIFY",
    args: "geography, tolerance_meters",
    description: "",
    url: "",
};
const ST_SNAPTOGRID = {
    name: "ST_SNAPTOGRID",
    args: "geography_expression, grid_size",
    description: "",
    url: "",
};
const ST_STARTPOINT = {
    name: "ST_STARTPOINT",
    args: "linestring_geography",
    description: "",
    url: "",
};
const ST_TOUCHES = {
    name: "ST_TOUCHES",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_UNION_1 = {
    name: "ST_UNION",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_UNION_2 = {
    name: "ST_UNION",
    args: "array_of_geography",
    description: "",
    url: "",
};
const ST_UNION_AGG = {
    name: "ST_UNION_AGG",
    args: "geography",
    description: "",
    url: "",
};
const ST_WITHIN = {
    name: "ST_WITHIN",
    args: "geography_1, geography_2",
    description: "",
    url: "",
};
const ST_X = {
    name: "ST_X",
    args: "geography_expression",
    description: "",
    url: "",
};
const ST_Y = {
    name: "ST_Y",
    args: "geography_expression",
    description: "",
    url: "",
};
const SESSION_USER = {
    name: "SESSION_USER",
    args: "",
    description: "",
    url: "",
};
const GENERATE_UUID = {
    name: "GENERATE_UUID",
    args: "",
    description: "",
    url: "",
};
const NET__IP_FROM_STRING = {
    name: "NET.IP_FROM_STRING",
    args: "addr_str",
    description: "",
    url: "",
};
const NET__SAFE_IP_FROM_STRING = {
    name: "NET.SAFE_IP_FROM_STRING",
    args: "addr_str",
    description: "",
    url: "",
};
const NET__IP_TO_STRING = {
    name: "NET.IP_TO_STRING",
    args: "addr_bin",
    description: "",
    url: "",
};
const NET__IP_NET_MASK = {
    name: "NET.IP_NET_MASK",
    args: "num_output_bytes, prefix_length",
    description: "",
    url: "",
};
const NET__IP_TRUNC = {
    name: "NET.IP_TRUNC",
    args: "addr_bin, prefix_length",
    description: "",
    url: "",
};
const NET__IPV4_FROM_INT64 = {
    name: "NET.IPV4_FROM_INT64",
    args: "integer_value",
    description: "",
    url: "",
};
const NET__IPV4_TO_INT64 = {
    name: "NET.IPV4_TO_INT64",
    args: "addr_bin",
    description: "",
    url: "",
};
const NET__HOST = {
    name: "NET.HOST",
    args: "url",
    description: "",
    url: "",
};
const NET__PUBLIC_SUFFIX = {
    name: "NET.PUBLIC_SUFFIX",
    args: "url",
    description: "",
    url: "",
};
const NET__REG_DOMAIN = {
    name: "NET.REG_DOMAIN",
    args: "url",
    description: "",
    url: "",
};
const COALESCE = {
    name: "COALESCE",
    args: "expr[, ...]",
    description: "",
    url: "",
};
const IF = {
    name: "IF",
    args: "expr, true_result, else_result",
    description: "",
    url: "",
};
const IFNULL = {
    name: "IFNULL",
    args: "expr, null_result",
    description: "",
    url: "",
};
const NULLIF = {
    name: "NULLIF",
    args: "expr, expr_to_match",
    description: "",
    url: "",
};
const ERROR = {
    name: "ERROR",
    args: "error_message",
    description: "",
    url: "",
};
const RANGE = {
    name: "RANGE",
    args: [
        { args: "date_expression, date_expression" },
        { args: "datetime_expression, datetime_expression" },
        { args: "timestamp_expression, timestamp_expression" },
    ],
    description: "Constructs a range of DATE, DATETIME, or TIMESTAMP values.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range",
};
const RANGE_START = {
    name: "RANGE_START",
    args: "range_expression",
    description: "Gets the lower bound of a range.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_start",
};
const RANGE_END = {
    name: "RANGE_END",
    args: "range_expression",
    description: "Gets the upper bound of a range.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_end",
};
const RANGE_INTERSECT = {
    name: "RANGE_INTERSECT",
    args: "range_expression, range_expression",
    description: "Gets a segment of two ranges that intersect.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_intersect",
};
const RANGE_OVERLAPS = {
    name: "RANGE_OVERLAPS",
    args: "range_expression, range_expression",
    description: "Checks if two ranges overlap.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_overlaps",
};
const RANGE_CONTAINS = {
    name: "RANGE_CONTAINS",
    args: [
        { args: "range_expression, range_expression" },
        { args: "range_expression, date_expression" },
        { args: "range_expression, datetime_expression" },
        { args: "range_expression, timestamp_expression" },
    ],
    description: "Checks if one range or a value is in another range.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#range_contains",
};
const GENERATE_RANGE_ARRAY = {
    name: "GENERATE_RANGE_ARRAY",
    args: "range_expression, INTERVAL step_expression [, bool_expression]",
    description: "Splits a range into an array of subranges.",
    url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/range-functions#generate_range_array",
};
/**
 * Array of SQL functions support in BigQuery. See
 * https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators.
 *
 * These functions are scraped from the markdown file from the url above using
 * regex hackery. We need a more permanent solution to keep synced with new
 * functions added to BigQuery SQL.
 */
exports.BIGQUERY_FUNCTIONS = [
    ANY_VALUE,
    ARRAY_AGG,
    ARRAY_CONCAT_AGG,
    AVG,
    BIT_AND,
    BIT_OR,
    BIT_XOR,
    COUNT,
    COUNTIF,
    LOGICAL_AND,
    LOGICAL_OR,
    MAX,
    MIN,
    STRING_AGG,
    SUM,
    CORR,
    COVAR_POP,
    COVAR_SAMP,
    STDDEV_POP,
    STDDEV_SAMP,
    STDDEV,
    VAR_POP,
    VAR_SAMP,
    VARIANCE,
    APPROX_COUNT_DISTINCT,
    APPROX_QUANTILES,
    APPROX_TOP_COUNT,
    APPROX_TOP_SUM,
    HLL_COUNT__INIT,
    HLL_COUNT__MERGE,
    HLL_COUNT__MERGE_PARTIAL,
    HLL_COUNT__EXTRACT,
    RANK,
    DENSE_RANK,
    PERCENT_RANK,
    CUME_DIST,
    NTILE,
    ROW_NUMBER,
    BIT_COUNT,
    CAST,
    PARSE_BIGNUMERIC,
    PARSE_NUMERIC,
    SAFE_CAST,
    ABS,
    SIGN,
    IS_INF,
    IS_NAN,
    IEEE_DIVIDE,
    RAND,
    SQRT,
    POW,
    POWER,
    EXP,
    LN,
    LOG,
    LOG10,
    GREATEST,
    LEAST,
    DIV,
    SAFE_DIVIDE,
    SAFE_MULTIPLY,
    SAFE_NEGATE,
    SAFE_ADD,
    SAFE_SUBTRACT,
    MOD,
    ROUND,
    TRUNC,
    CEIL,
    CEILING,
    FLOOR,
    COS,
    COSH,
    ACOS,
    ACOSH,
    SIN,
    SINH,
    ASIN,
    ASINH,
    TAN,
    TANH,
    ATAN,
    ATANH,
    ATAN2,
    RANGE_BUCKET,
    FIRST_VALUE,
    LAST_VALUE,
    NTH_VALUE,
    LEAD,
    LAG,
    PERCENTILE_CONT,
    PERCENTILE_DISC,
    FARM_FINGERPRINT,
    MD5,
    SHA1,
    SHA256,
    SHA512,
    ASCII,
    BYTE_LENGTH,
    CHAR_LENGTH,
    CHARACTER_LENGTH,
    CHR,
    CODE_POINTS_TO_BYTES,
    CODE_POINTS_TO_STRING,
    CONCAT,
    CONTAINS_SUBSTR,
    ENDS_WITH,
    FORMAT,
    FROM_BASE32,
    FROM_BASE64,
    FROM_HEX,
    INITCAP,
    INSTR,
    LEFT,
    LENGTH,
    LPAD,
    LOWER,
    LTRIM,
    NORMALIZE,
    NORMALIZE_AND_CASEFOLD,
    OCTET_LENGTH,
    REGEXP_CONTAINS,
    REGEXP_EXTRACT,
    REGEXP_EXTRACT_ALL,
    REGEXP_INSTR,
    REGEXP_REPLACE,
    REGEXP_SUBSTR,
    REPLACE,
    REPEAT,
    REVERSE,
    RIGHT,
    RPAD,
    RTRIM,
    SAFE_CONVERT_BYTES_TO_STRING,
    SOUNDEX,
    SPLIT,
    STARTS_WITH,
    STRPOS,
    SUBSTR,
    SUBSTRING,
    TO_BASE32,
    TO_BASE64,
    TO_CODE_POINTS,
    TO_HEX,
    TRANSLATE,
    TRIM,
    UNICODE,
    UPPER,
    JSON_EXTRACT,
    JSON_QUERY,
    JSON_EXTRACT_SCALAR,
    JSON_VALUE,
    JSON_EXTRACT_ARRAY,
    JSON_QUERY_ARRAY,
    JSON_EXTRACT_STRING_ARRAY,
    JSON_VALUE_ARRAY,
    PARSE_JSON,
    TO_JSON,
    TO_JSON_STRING,
    BOOL,
    INT64,
    FLOAT64,
    JSON_TYPE,
    ARRAY,
    ARRAY_CONCAT,
    ARRAY_LENGTH,
    ARRAY_TO_STRING,
    GENERATE_ARRAY,
    GENERATE_DATE_ARRAY,
    GENERATE_TIMESTAMP_ARRAY,
    OFFSET,
    ORDINAL,
    ARRAY_REVERSE,
    SAFE_OFFSET,
    SAFE_ORDINAL,
    CURRENT_DATE,
    DATE_1,
    DATE_2,
    DATE_3,
    DATE_ADD,
    DATE_BUCKET,
    DATE_SUB,
    DATE_DIFF,
    DATE_TRUNC,
    DATE_FROM_UNIX_DATE,
    FORMAT_DATE,
    LAST_DAY,
    PARSE_DATE,
    UNIX_DATE,
    CURRENT_DATETIME,
    DATETIME_1,
    DATETIME_2,
    DATETIME_3,
    DATETIME_ADD,
    DATETIME_BUCKET,
    DATETIME_SUB,
    DATETIME_DIFF,
    DATETIME_TRUNC,
    FORMAT_DATETIME,
    PARSE_DATETIME,
    CURRENT_TIME,
    TIME_1,
    TIME_2,
    TIME_3,
    TIME_ADD,
    TIME_SUB,
    TIME_DIFF,
    TIME_TRUNC,
    FORMAT_TIME,
    PARSE_TIME,
    CURRENT_TIMESTAMP,
    STRING,
    TIMESTAMP_1,
    TIMESTAMP_2,
    TIMESTAMP_3,
    TIMESTAMP_ADD,
    TIMESTAMP_BUCKET,
    TIMESTAMP_SUB,
    TIMESTAMP_DIFF,
    TIMESTAMP_TRUNC,
    FORMAT_TIMESTAMP,
    PARSE_TIMESTAMP,
    TIMESTAMP_SECONDS,
    TIMESTAMP_MILLIS,
    TIMESTAMP_MICROS,
    UNIX_SECONDS,
    UNIX_MILLIS,
    UNIX_MICROS,
    MAKE_INTERVAL,
    JUSTIFY_DAYS,
    JUSTIFY_HOURS,
    JUSTIFY_INTERVAL,
    ST_AREA,
    ST_ASBINARY,
    ST_ASGEOJSON,
    ST_ASTEXT,
    ST_BOUNDARY,
    ST_CENTROID,
    ST_CENTROID_AGG,
    ST_CLOSESTPOINT,
    ST_CLUSTERDBSCAN,
    ST_CONTAINS,
    ST_CONVEXHULL,
    ST_COVEREDBY,
    ST_COVERS,
    ST_DIFFERENCE,
    ST_DIMENSION,
    ST_DISJOINT,
    ST_DISTANCE,
    ST_DUMP,
    ST_DWITHIN,
    ST_ENDPOINT,
    ST_EQUALS,
    ST_EXTERIORRING,
    ST_GEOGFROM,
    ST_GEOGFROMGEOJSON,
    ST_GEOGFROMTEXT_1,
    ST_GEOGFROMTEXT_2,
    ST_GEOGFROMWKB_1,
    ST_GEOGFROMWKB_2,
    ST_GEOGPOINT,
    ST_GEOGPOINTFROMGEOHASH,
    ST_GEOHASH,
    ST_INTERSECTION,
    ST_INTERSECTS,
    ST_INTERSECTSBOX,
    ST_ISCOLLECTION,
    ST_ISEMPTY,
    ST_LENGTH,
    ST_MAKELINE_1,
    ST_MAKELINE_2,
    ST_MAKEPOLYGON,
    ST_MAKEPOLYGONORIENTED,
    ST_MAXDISTANCE,
    ST_NUMGEOMETRIES,
    ST_NUMPOINTS,
    ST_PERIMETER,
    ST_POINTN,
    ST_SIMPLIFY,
    ST_SNAPTOGRID,
    ST_STARTPOINT,
    ST_TOUCHES,
    ST_UNION_1,
    ST_UNION_2,
    ST_UNION_AGG,
    ST_WITHIN,
    ST_X,
    ST_Y,
    SESSION_USER,
    GENERATE_UUID,
    NET__IP_FROM_STRING,
    NET__SAFE_IP_FROM_STRING,
    NET__IP_TO_STRING,
    NET__IP_NET_MASK,
    NET__IP_TRUNC,
    NET__IPV4_FROM_INT64,
    NET__IPV4_TO_INT64,
    NET__HOST,
    NET__PUBLIC_SUFFIX,
    NET__REG_DOMAIN,
    COALESCE,
    IF,
    IFNULL,
    NULLIF,
    ERROR,
    RANGE,
    RANGE_START,
    RANGE_END,
    RANGE_CONTAINS,
    RANGE_OVERLAPS,
    RANGE_INTERSECT,
    GENERATE_RANGE_ARRAY,
];
