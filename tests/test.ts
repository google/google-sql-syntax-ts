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

import { QueryFormatter } from "../query_formatter";
import { GoogleSqlDefinition } from "../language/google_sql";
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
