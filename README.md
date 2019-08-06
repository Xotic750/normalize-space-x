<a
  href="https://travis-ci.org/Xotic750/normalize-space-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/normalize-space-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/normalize-space-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/normalize-space-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/normalize-space-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/normalize-space-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/normalize-space-x"
  title="npm version">
<img src="https://badge.fury.io/js/normalize-space-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/normalize-space-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/normalize-space-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/normalize-space-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/normalize-space-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/normalize-space-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/normalize-space-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a
  href="https://coveralls.io/github/Xotic750/normalize-space-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/normalize-space-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_normalize-space-x"></a>

## normalize-space-x

Trims and replaces sequences of whitespace characters by a single space.

### `module.exports(string)` ⇒ <code>string</code> ⏏

<a name="module_normalize-space-x"></a>

### `normalize-space-x` ⇒ <code>string</code>

This method strips leading and trailing white-space from a string,
replaces sequences of whitespace characters by a single space,
and returns the resulting string. (ES2019)

**Kind**: static property of [<code>normalize-space-x</code>](#module_normalize-space-x)  
**Returns**: <code>string</code> - The normalized string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                  |
| ------ | ------------------- | ---------------------------- |
| string | <code>string</code> | The string to be normalized. |

**Example**

```js
import normalizeSpace from 'normalize-space-x';

console.log(normalizeSpace(' \t\na \t\nb \t\n') === 'a b'); // true
```
