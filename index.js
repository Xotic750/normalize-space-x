/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/normalize-space-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/normalize-space-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/normalize-space-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/normalize-space-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/normalize-space-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/normalize-space-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/normalize-space-x" title="npm version">
 * <img src="https://badge.fury.io/js/normalize-space-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Strips leading and trailing white-space from a string, replaces sequences of
 * whitespace characters by a single space, and returns the resulting string.
 *
 * Requires ES3 or above.
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module normalize-space-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $toString = require('to-string-x');
  var trim = require('string.prototype.trim');
  var ws = require('white-space-x').ws;
  var reNormalize = new RegExp('[' + ws + ']+', 'g');

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string.
   *
   * @param {String} string The string to be normalized.
   * @return {string} The normalized string.
   * @example
   * var trimRight = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  module.exports = function normalizeSpace(string) {
    return trim($toString(string).replace(reNormalize, ' '));
  };
}());
