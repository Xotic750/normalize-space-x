'use strict';

var normalizeSpace;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  normalizeSpace = require('../../index.js');
} else {
  normalizeSpace = returnExports;
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('normalizeSpace', function () {
  it('is a function', function () {
    expect(typeof normalizeSpace).toBe('function');
  });

  it('should throw when target is null or undefined', function () {
    expect(function () {
      normalizeSpace();
    }).toThrow();

    expect(function () {
      normalizeSpace(void 0);
    }).toThrow();

    expect(function () {
      normalizeSpace(null);
    }).toThrow();
  });

  it('Basic tests', function () {
    expect(normalizeSpace('a')).toBe('a', 'noop when no whitespace');
    var allWhitespaceChars = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
    expect(normalizeSpace(allWhitespaceChars + 'a' + allWhitespaceChars + 'b' + allWhitespaceChars)).toBe('a b', 'all expected whitespace chars are trimmed and normalized');
    var zeroWidth = '\u200b';
    expect(normalizeSpace(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
  });

  it('should return a string for everything', function () {
    var values = [
      true,
      'abc',
      1,
      function () {},
      [],
      /r/
    ];

    var expected = values.map(function (value) {
      return String(value).replace(/\s+/g, ' ');
    });

    var actual = values.map(normalizeSpace);
    expect(actual).toEqual(expected);
  });

  it('should throw for Object.create(null)', function () {
    expect(function () {
      normalizeSpace(Object.create(null));
    }).toThrow();
  });

  ifSymbolIt('should throw for Symbol', function () {
    var sym = Symbol('foo');
    expect(function () {
      normalizeSpace(sym);
    }).toThrow();

    var symObj = Object(sym);
    expect(function () {
      normalizeSpace(Object(symObj));
    }).toThrow();
  });
});
