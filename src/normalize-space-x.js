import trim from 'trim-x';
import whiteSpace from 'white-space-x';
import methodize from 'simple-methodize-x';

const SPACE = ' ';
const RegExpCtr = /none/.constructor;
const reNormalize = new RegExpCtr(`[${whiteSpace}]+`, 'g');
const methodizedReplace = methodize(SPACE.replace);

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */
const normalizeSpace = function normalizeSpace(string) {
  return methodizedReplace(trim(string), reNormalize, SPACE);
};

export default normalizeSpace;
