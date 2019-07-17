import trim, { trim2016 } from 'trim-x';
import whiteSpace, { string2016 } from 'white-space-x';
var SPACE = ' ';
var RegExpCtr = /none/.constructor;
var reNormalize2016 = new RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new RegExpCtr("[".concat(whiteSpace, "]+"), 'g');
var replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

export function normalizeSpace2016(string) {
  return replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

var normalizeSpace2018 = function normalizeSpace2018(string) {
  return replace.call(trim(string), reNormalize2018, SPACE);
};

export default normalizeSpace2018;

//# sourceMappingURL=normalize-space-x.esm.js.map