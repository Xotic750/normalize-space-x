'use strict';

var lib;
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
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var normalizeSpace = lib.normalizeSpace;
var normalizeSpace2016 = lib.normalizeSpace2016;
var normalizeSpace2018 = lib.normalizeSpace2018;

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('normalizeSpace', function () {
  var allWhitespaceChars2016 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var allWhitespaceChars2018 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function () {
    it('normalizeSpace is a function', function () {
      expect(typeof normalizeSpace).toBe('function');
    });

    it('normalizeSpace2016 is a function', function () {
      expect(typeof normalizeSpace2016).toBe('function');
    });

    it('normalizeSpace2018 is a function', function () {
      expect(typeof normalizeSpace2018).toBe('function');
    });

    it('normalizeSpace is a normalizeSpace2018', function () {
      expect(normalizeSpace).toBe(normalizeSpace2018);
    });
  });

  describe('normalizeSpace2016', function () {
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
      expect(normalizeSpace2016('a')).toBe('a', 'noop when no whitespace');
      expect(normalizeSpace2016(allWhitespaceChars2016 + 'a' + allWhitespaceChars2016 + 'b' + allWhitespaceChars2016)).toBe('a b', 'all expected whitespace chars are trimmed and normalized');
      var zeroWidth = '\u200b';
      expect(normalizeSpace2016(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
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

      var actual = values.map(normalizeSpace2016);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        normalizeSpace2016(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        normalizeSpace2016(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        normalizeSpace2016(Object(symObj));
      }).toThrow();
    });
  });

  describe('normalizeSpace2018', function () {
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
      expect(normalizeSpace2018('a')).toBe('a', 'noop when no whitespace');
      expect(normalizeSpace2018(allWhitespaceChars2018 + 'a' + allWhitespaceChars2018 + 'b' + allWhitespaceChars2018)).toBe('a b', 'all expected whitespace chars are trimmed and normalized');
      var zeroWidth = '\u200b';
      expect(normalizeSpace2018(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
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

      var actual = values.map(normalizeSpace2018);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        normalizeSpace2018(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        normalizeSpace2018(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        normalizeSpace2018(Object(symObj));
      }).toThrow();
    });
  });
});
