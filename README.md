# Google SQL

Typescript and monaco definitions for Google SQL.

## Installation

This package is
[hosted on npm](https://www.npmjs.com/package/@google/google-sql-syntax-ts), so can be
installed with `npm` or an equivalent package manager.

```
npm i @google/google-sql-syntax-ts
```

## Formatting SQL

Example usage:

```typescript
import { QueryFormatter, GoogleSqlDefinition } from "google-sql-syntax-ts";

const queryFormatter = new QueryFormatter(new GoogleSqlDefinition());

const formattedQuery = queryFormatter.formatQuery(
  "SELECT column, REGEXP_CONTAINS(column, r'a') AS column_contains_a FROM `some-table` WHERE date > 1970-01-01"
);
```

The formatted query will look like:

```sql
SELECT
  COLUMN,
  REGEXP_CONTAINS(COLUMN, r'a') AS column_contains_a
FROM
  `some-table`
WHERE
  date > 1970-01-01
```

## Monaco Editor SQL Highlighting

`googleSqlLanguageConfiguration` is exported, which can be used as a
[language configuration for the Monaco Editor](https://microsoft.github.io/monaco-editor/typedoc/interfaces/languages.LanguageConfiguration.html).
