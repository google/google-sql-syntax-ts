import { QueryFormatter } from "../src/query_formatter";
import { GoogleSqlDefinition, DocsUrls } from "../src/language/google_sql";
import { expect } from "chai";

// Note: there are a lot more tests for this package, but they are not currently open source.

const DOCS_URLS: DocsUrls = {
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_array",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_APPEND:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_array_append",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_ARRAY_INSERT:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_array_insert",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE2:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_object_signature2",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_OBJECT_SIGNATURE1:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_object_signature1",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_REMOVE:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_remove",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_SET:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_set",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_JSON_STRIP_NULLS:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#json_strip_nulls",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_BOOL:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#lax_bool",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_DOUBLE:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#lax_double",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_INT64:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#lax_int64",
  CONSOLE__BIGQUERY_DOCS_REFERENCE_STANDARD_SQL_JSON_FUNCTIONS_LAX_STRING:
    "https://cloud.google.com/bigquery/docs/reference/standard-sql/json_functions#lax_string",
};

describe("Query Formatter", () => {
  it("formats basic SQL", () => {
    const queryFormatter = new QueryFormatter(
      new GoogleSqlDefinition(DOCS_URLS)
    );

    expect(queryFormatter.formatQuery("SELECT 1\n\n\n\nAS *")).to.equal(
      "SELECT\n  1 AS *"
    );
  });
});
