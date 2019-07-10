import noop from 'lodash/noop';
import normalizeSpace, {normalizeSpace2016} from 'src/normalize-space-x';

/* eslint-disable-next-line compat/compat */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('normalizeSpace', function() {
  const allWhitespaceChars2016 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  const allWhitespaceChars2018 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function() {
    it('normalizeSpace is a function', function() {
      expect.assertions(1);
      expect(typeof normalizeSpace).toBe('function');
    });

    it('normalizeSpace2016 is a function', function() {
      expect.assertions(1);
      expect(typeof normalizeSpace2016).toBe('function');
    });

    it('normalizeSpace is not normalizeSpace2016', function() {
      expect.assertions(1);
      expect(normalizeSpace).not.toBe(normalizeSpace2016);
    });
  });

  describe('normalizeSpace2016', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        normalizeSpace();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        /* eslint-disable-next-line no-void */
        normalizeSpace(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        normalizeSpace(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(3);
      expect(normalizeSpace2016('a')).toBe('a', 'noop when no whitespace');
      expect(normalizeSpace2016(`${allWhitespaceChars2016}a${allWhitespaceChars2016}b${allWhitespaceChars2016}`)).toBe(
        'a b',
        'all expected whitespace chars are trimmed and normalized',
      );
      const zeroWidth = '\u200b';
      expect(normalizeSpace2016(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(function(value) {
        return String(value).replace(/\s+/g, ' ');
      });

      const actual = values.map(normalizeSpace2016);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        normalizeSpace2016(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      const sym = Symbol('foo');
      expect(function() {
        normalizeSpace2016(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        normalizeSpace2016(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('normalizeSpace', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        normalizeSpace();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        /* eslint-disable-next-line no-void */
        normalizeSpace(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        normalizeSpace(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(3);
      expect(normalizeSpace('a')).toBe('a', 'noop when no whitespace');
      expect(normalizeSpace(`${allWhitespaceChars2018}a${allWhitespaceChars2018}b${allWhitespaceChars2018}`)).toBe(
        'a b',
        'all expected whitespace chars are trimmed and normalized',
      );
      const zeroWidth = '\u200b';
      expect(normalizeSpace(zeroWidth)).toBe(zeroWidth, 'zero width space does not normalize');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(function(value) {
        return String(value).replace(/\s+/g, ' ');
      });

      const actual = values.map(normalizeSpace);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        normalizeSpace(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);
      /* eslint-disable-next-line compat/compat */
      const sym = Symbol('foo');
      expect(function() {
        normalizeSpace(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        normalizeSpace(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
