import { QueryFormatter } from "../src/query_formatter";
import { GoogleSqlDefinition, DocsUrls } from "../src/language/google_sql";
import { expect } from "chai";

// Note: there are a lot more tests for this package, but they are not currently open source.

describe("Query Formatter", () => {
  it("formats basic SQL", () => {
    const queryFormatter = new QueryFormatter(new GoogleSqlDefinition());

    expect(
      queryFormatter.formatQuery(
        "SELECT column, REGEXP_CONTAINS(column, r'a') AS column_contains_a FROM `some-table` WHERE date > 1970-01-01"
      )
    ).to.equal(`SELECT
  COLUMN,
  REGEXP_CONTAINS(COLUMN, r'a') AS column_contains_a
FROM
  \`some-table\`
WHERE
  date > 1970-01-01`);
  });
});
