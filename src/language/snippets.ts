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

/** Snippet type */
export interface Snippet {
  name: string;
  snippetText: string;
}

/** List of predefined snippets */
export const SNIPPETS = [
  {
    name: 'CREATE OR REPLACE SPARK PROCEDURE',
    snippetText:
        'CREATE OR REPLACE PROCEDURE\n\t${1:dataset_name}.${2:procedure_name}()\nWITH CONNECTION `${3:connection_name}` OPTIONS (engine="SPARK")\n\tLANGUAGE PYTHON AS r"""\n${4:print("Hello World!")}\n""";',
  },
  {
    name: 'CREATE SPARK PROCEDURE',
    snippetText:
        'CREATE PROCEDURE\n\t${1:dataset_name}.${2:procedure_name}()\nWITH CONNECTION `${3:connection_name}` OPTIONS (engine="SPARK")\n\tLANGUAGE PYTHON AS r"""\n${4:print("Hello World!")}\n""";',
  },
  {
    name: 'CREATE SPARK PROCEDURE IF NOT EXISTS',
    snippetText:
        'CREATE PROCEDURE IF NOT EXISTS ${1:dataset_name}.${2:procedure_name}()\nWITH CONNECTION `${3:connection_name}` OPTIONS (engine="SPARK")\n\tLANGUAGE PYTHON AS r"""\n${4:print("Hello World!")}\n""";',
  },
];
