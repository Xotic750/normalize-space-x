import trim, {trim2016} from 'trim-x';
import whiteSpace, {string2016} from 'white-space-x';

const RegExpCtr = /none/.constructor;
const reNormalize2016 = new RegExpCtr(`[${string2016}]+`, 'g');
const reNormalize2018 = new RegExpCtr(`[${whiteSpace}]+`, 'g');
const {replace} = '';

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */
export function normalizeSpace2016(string) {
  return replace.call(trim2016(string), reNormalize2016, ' ');
}

/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} string - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */
export default function normalizeSpace2018(string) {
  return replace.call(trim(string), reNormalize2018, ' ');
}
