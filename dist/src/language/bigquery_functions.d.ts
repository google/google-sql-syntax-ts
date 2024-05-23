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
import { FunctionDescription } from "../sql_definition";
/**
 * Array of SQL functions support in BigQuery. See
 * https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators.
 *
 * These functions are scraped from the markdown file from the url above using
 * regex hackery. We need a more permanent solution to keep synced with new
 * functions added to BigQuery SQL.
 */
export declare const BIGQUERY_FUNCTIONS: FunctionDescription[];
