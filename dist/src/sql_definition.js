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
exports.signatureToString = void 0;
/**
 * Converts a function signature into a string (i.e. 'arg1, arg2, ..., argN').
 */
function signatureToString(signature) {
    if (typeof signature.args === 'string') {
        return signature.args;
    }
    const parameters = signature.args;
    if (!parameters.length)
        return '';
    let str = parameters[0].arg;
    for (let i = 1; i < parameters.length; i++) {
        str += ', ' + parameters[i].arg;
    }
    return str;
}
exports.signatureToString = signatureToString;
