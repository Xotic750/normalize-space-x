import trim from 'trim-x';
import whiteSpace from 'white-space-x';
import methodize from 'simple-methodize-x';
var SPACE = ' ';
var RegExpCtr = /none/.constructor;
var reNormalize = new RegExpCtr("[".concat(whiteSpace, "]+"), 'g');
var methodizedReplace = methodize(SPACE.replace);
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalizeSpace = function normalizeSpace(string) {
  return methodizedReplace(trim(string), reNormalize, SPACE);
};

export default normalizeSpace;

//# sourceMappingURL=normalize-space-x.esm.js.map