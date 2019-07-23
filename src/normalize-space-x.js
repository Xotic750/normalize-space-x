import trim from 'trim-x';
import whiteSpace from 'white-space-x';

const SPACE = ' ';
const RegExpCtr = /none/.constructor;
const reNormalize2018 = new RegExpCtr(`[${whiteSpace}]+`, 'g');
const {replace} = SPACE;

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2019).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */
const normalizeSpace = function normalizeSpace(string) {
  return replace.call(trim(string), reNormalize2018, SPACE);
};

export default normalizeSpace;
