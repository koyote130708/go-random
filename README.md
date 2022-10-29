# Go Random

**Random value generation utilities**

![codecov.io Code Coverage](https://img.shields.io/badge/coverage-100%25-green.svg)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://github.com/koyote130708/go-random#documentation)
[![donation](https://img.shields.io/badge/donate-blue.svg)](https://www.paypal.com/donate/?business=T7Q29NNMZVW98\&no_recurring=0\&item_name=Your+support+will+help+us++continue+our+work+and+improve+the+quality+of+our+products.+Thank+you!\&currency_code=USD)

*   **version**: 1.0.3
*   **license**: GNU LGPLv3

<br />

## Installation

```javascript
npm i go-random
```

or

```javascript
yarn add go-random
```

<br />

## Usage

### ES6

```javascript
import { randInt } from "go-random"

randInt(3); // => generates an integer between 0 - 3
randInt(1, 3); // => generates an integer between 1 - 3

```

### Node

```javascript
const { randInt } = require("go-random");

randInt(3); // => generates an integer between 0 - 3
randInt(1, 3); // => generates an integer between 1 - 3

```

### Web browser

```javascript
<script src="dist/go-random.min.js"></script>
<script>
    const { randInt } = Random;

	randInt(3); // => generates an integer between 0 - 3
	randInt(1, 3); // => generates an integer between 1 - 3
</script>

```

<br />

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [randBool](#randbool)
    *   [Examples](#examples)
*   [randInt](#randint)
    *   [Parameters](#parameters)
    *   [Examples](#examples-1)
*   [randFloat](#randfloat)
    *   [Parameters](#parameters-1)
    *   [Examples](#examples-2)
*   [randStr](#randstr)
    *   [Parameters](#parameters-2)
    *   [Examples](#examples-3)
*   [randDate](#randdate)
    *   [Parameters](#parameters-3)
    *   [Examples](#examples-4)
*   [randIndex](#randindex)
    *   [Parameters](#parameters-4)
    *   [Examples](#examples-5)
*   [randPick](#randpick)
    *   [Parameters](#parameters-5)
    *   [Examples](#examples-6)

### randBool

Generates a random boolean value, either <code>true</code> or <code>false</code>.

#### Examples

```javascript
randBool(); // => true or false
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** The randomly generated boolean value.

**Meta**

*   **since**: 1.0.0

### randInt

Generates a random integer between the inclusive <code>min</code> and <code>max</code> bounds.
If only one argument is provided, an integer between 0 and the given number is returned.
If <code>min</code> or <code>max</code> is not a number, the value is first coerced to a number.

#### Parameters

*   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The lower bound (inclusive). (optional, default `0`)
*   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The upper bound (inclusive). (optional, default `Number.MAX_SAFE_INTEGER`)

#### Examples

```javascript
randInt(); // => an integer between 0 and 9007199254740991

randInt(2); // => an integer between 0 and 2 (0, 1 or 2)

randInt(-1, 2); // => an integer between -1 and 2 (-1, 0, 1 or 2)
```

*   Throws **[TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError)** if <code>min</code> or <code>max</code> is not a valid numeric value (<code>NaN</code>).

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The randomly generated integer.

**Meta**

*   **since**: 1.0.0

### randFloat

Generates a random number between the inclusvie <code>min</code> and <code>max</code> bounds.
If only one argument is provided, a number between 0 and the given number is returned.
If <code>min</code> or <code>max</code> is not a number, the value is first coerced to a number.

#### Parameters

*   `min` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The lower bound (inclusive). (optional, default `0`)
*   `max` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The upper bound (inclusive). (optional, default `Number.MAX_VALUE`)
*   `decimalPlaces` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The number of decimal places to have. (optional, default `2`)

#### Examples

```javascript
randFloat(); // => a number between 0 and 1.7976931348623157E+308

randFloat(2.3); // => a number between 0 and 2.3

randFloat(-1.2, 2.3); // => a number between -1.2 and 2.3

randFloat(-1.2, 2.3, 2); // => a number between -1.2 and 2.3 truncated to 2 decimal places
```

*   Throws **[TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError)** if <code>min</code> or <code>max</code> is not a valid numeric value (<code>NaN</code>).

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The randomly generated floating point number.

**Meta**

*   **since**: 1.0.0

### randStr

Generates a random string of the specified length, optionally using the characters provided.
If no characters can be obtained from <code>chars</code>, an empty string is returned.
If <code>length</code> is not a number, the value is first coerced to a number.

#### Parameters

*   `length` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** The length of the string. (optional, default `DEFAULT_STRING_LENGTH`)
*   `chars` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>)** The characters to use to construct the random string. (optional, default `DEFAULT_STRING_CHARS`)

#### Examples

```javascript
randStr(); // => a string that has 8 alphanumeric characters 

randStr(5); // => a string that has 5 alphanumeric characters

randStr(5, "0123456789"); // => a string that has 5 digits
```

*   Throws **[TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError)** if <code>length</code> is not a valid numeric value (<code>NaN</code>).
*   Throws **[RangeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError)** if <code>length</code> is a negative number.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The randomly generated string.

**Meta**

*   **since**: 1.0.0

### randDate

Generates a <code>Date</code> object whose time is between the inclusive <code>min</code> and <code>max</code> bounds.
If only one argument is provided, a date between January 1, 1970 UTC and the given date is returned.

#### Parameters

*   `min` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** The lower bound (inclusive). (optional, default `0`)
*   `max` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** The upper bound (inclusive). (optional, default `Date.now()`)

#### Examples

```javascript
randDate(); // => a date/time between 1970-01-01 and now

randDate("2012-01-01"); // => a date/time between 1970-01-01 and 2012-01-01

randDate(Date.now(), Date.now() + 3600000); // => a date/time between now and 1 hour from now.
```

*   Throws **[TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError)** if <code>min</code> or <code>max</code> is a not valid date/time value.

Returns **[Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)** The randomly selected date within the date range.

**Meta**

*   **since**: 1.0.0

### randIndex

Randomly picks an index of the given collection.
The probability of each index being picked can be defined with the ratios.
A higher ratio value means a higher probability of being picked.

#### Parameters

*   `collection` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) | Iterable | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** The collection to randomly pick an index from.
*   `ratios` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)> | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>)?** The ratio values that define the probability of the corresponding index is likely to be picked.

#### Examples

Without ratios - equal probability

```javascript
// 0, 1 and 2 are all equally likely to be picked.
randIndex(["a", "b", "c"]);

randIndex({1: "a", 2: "b", 3: "c"});
```

With ratios - defined probabilities

```javascript
// 0 is twice as likely to be picked than 1 or 2.
randIndex(["a", "b", "c"], [2, 1, 1]);

randIndex({a: "a", b: "b", c: "c"}, {a: 2, b: 1, c: 1});
```

Returns **any** The randomly picked index.

**Meta**

*   **since**: 1.0.0

### randPick

Randomly picks an item from the given collection.
The probability of each item being picked can be defined with the ratios.
A higher ratio value means a higher probability of being picked.

#### Parameters

*   `collection` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) | Iterable | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** The collection to randomly pick an item from.
*   `ratios` **([Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)> | [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)>)?** The ratio values that define the probability of each item at the corresponding index is likely to be picked.

#### Examples

Without ratios - equal probability

```javascript
// "a", "b" and "c" are all equally likely to be picked.
randPick(["a", "b", "c"]);

randPick({1: "a", 2: "b", 3: "c"});
```

With ratios - defined probabilities

```javascript
// "a" is twice as likely to be returned than "b" or "c".
randPick(["a", "b", "c"], [2, 1, 1]);

randPick({a: "a", b: "b", c: "c"}, {a: 2, b: 1, c: 1});
```

Returns **any** The randomly picked item.

**Meta**

*   **since**: 1.0.0
