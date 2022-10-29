(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Random"] = factory();
	else
		root["Random"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.randBool = __webpack_require__(1);
exports.randInt = __webpack_require__(2);
exports.randFloat = __webpack_require__(4);
exports.randStr = __webpack_require__(5);
exports.DEFAULT_STRING_LENGTH = exports.randStr.DEFAULT_STRING_LENGTH;
exports.DEFAULT_STRING_CHARS = exports.randStr.DEFAULT_STRING_CHARS;
exports.randDate = __webpack_require__(6);
exports.randIndex = __webpack_require__(8);
exports.randPick = __webpack_require__(12);

/***/ }),
/* 1 */
/***/ ((module) => {

/**
 * Generates a random boolean value, either <code>true</code> or <code>false</code>.
 * @returns {boolean} The randomly generated boolean value.
 * @example
 * randBool(); // => true or false
 * @since 1.0.0
 * @static
 */
module.exports = function () {
    return Math.random() >= 0.5;
};


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectValidNumber = __webpack_require__(3);

/**
 * Generates a random integer between the inclusive <code>min</code> and <code>max</code> bounds. 
 * If only one argument is provided, an integer between 0 and the given number is returned.
 * If <code>min</code> or <code>max</code> is not a number, the value is first coerced to a number.
 * @param {number} [min=0] The lower bound (inclusive).
 * @param {number} [max=Number.MAX_SAFE_INTEGER] The upper bound (inclusive).
 * @returns {number} The randomly generated integer.
 * @throws {TypeError} if <code>min</code> or <code>max</code> is not a valid numeric value (<code>NaN</code>).
 * @example
 * randInt(); // => an integer between 0 and 9007199254740991
 * 
 * randInt(2); // => an integer between 0 and 2 (0, 1 or 2)
 * 
 * randInt(-1, 2); // => an integer between -1 and 2 (-1, 0, 1 or 2)
 * @since 1.0.0
 * @static
 */
module.exports = function (min, max) {
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }

    min = min !== undefined ? expectValidNumber(min, "min") : 0;
    max = max !== undefined ? expectValidNumber(max, "max") : Number.MAX_SAFE_INTEGER;

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    if (min === max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = function (value, name) {
    var num = Number(value);

    if (num !== num) {
        throw new TypeError("Expected " + name + " to be a valid number, but found: " + value);
    }

    if (num === Number.POSITIVE_INFINITY) {
        return Number.MAX_VALUE;
    } else if (num === Number.NEGATIVE_INFINITY) {
        return -Number.MAX_VALUE;
    }
    return num;
};

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var expectValidNumber = __webpack_require__(3);

/**
 * Generates a random number between the inclusvie <code>min</code> and <code>max</code> bounds.
 * If only one argument is provided, a number between 0 and the given number is returned.
 * If <code>min</code> or <code>max</code> is not a number, the value is first coerced to a number.
 * @param {number} [min=0] The lower bound (inclusive).
 * @param {number} [max=Number.MAX_VALUE] The upper bound (inclusive).
 * @param {number} [decimalPlaces=2] The number of decimal places to have.
 * @returns {number} The randomly generated floating point number.
 * @throws {TypeError} if <code>min</code> or <code>max</code> is not a valid numeric value (<code>NaN</code>).
 * @example
 * randFloat(); // => a number between 0 and 1.7976931348623157E+308
 * 
 * randFloat(2.3); // => a number between 0 and 2.3
 * 
 * randFloat(-1.2, 2.3); // => a number between -1.2 and 2.3
 * 
 * randFloat(-1.2, 2.3, 2); // => a number between -1.2 and 2.3 truncated to 2 decimal places
 * @since 1.0.0
 * @static
 */
module.exports = function (min, max, decimalPlaces) {
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }

    min = min !== undefined ? expectValidNumber(min, "min") : 0;
    max = max !== undefined ? expectValidNumber(max, "max") : Number.MAX_VALUE;

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    if (min === max) {
        return max;
    }

    var value = Math.random() * (max - min) + min;
    return decimalPlaces != null ? value.toFixed(decimalPlaces) : value;
};

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var randInt = __webpack_require__(2);
var expectValidNumber = __webpack_require__(3);

var DEFAULT_STRING_LENGTH = 8;

var DEFAULT_STRING_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ";

/**
 * Generates a random string of the specified length, optionally using the characters provided. 
 * If no characters can be obtained from <code>chars</code>, an empty string is returned.
 * If <code>length</code> is not a number, the value is first coerced to a number.
 * @param {number} [length=DEFAULT_STRING_LENGTH] The length of the string.
 * @param {(string|string[])} [chars=DEFAULT_STRING_CHARS] The characters to use to construct the random string.
 * @returns {string} The randomly generated string.
 * @throws {TypeError} if <code>length</code> is not a valid numeric value (<code>NaN</code>).
 * @throws {RangeError} if <code>length</code> is a negative number.
 * @example
 * randStr(); // => a string that has 8 alphanumeric characters 
 * 
 * randStr(5); // => a string that has 5 alphanumeric characters
 * 
 * randStr(5, "0123456789"); // => a string that has 5 digits
 * @since 1.0.0
 * @static
 */
 var randStr = function (length, chars) {
    length = length !== undefined ? expectValidNumber(length) : DEFAULT_STRING_LENGTH;
    chars = chars !== undefined ? chars : DEFAULT_STRING_CHARS;

    if (length < 0) {
        throw new RangeError("Expected the target length to be greater than or equal to 0, but found: " + length);
    }

    if (chars == null || typeof chars.length !== "number" || chars.length === 0) {
        return "";
    }

    var seq = [];
    var seqLength = 0;

    for (var i = 0; seqLength < length; i++) {
        seq[i] = chars[randInt(0, chars.length - 1)];
        seqLength += seq[i].length;
    }

    var str = seq.join("");
    return str.length > length ? str.substring(0, length) : str;
};

randStr.DEFAULT_STRING_LENGTH = DEFAULT_STRING_LENGTH;
randStr.DEFAULT_STRING_CHARS = DEFAULT_STRING_CHARS;

module.exports = randStr;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var randInt = __webpack_require__(2);
var expectValidDate = __webpack_require__(7);

/**
 * Generates a <code>Date</code> object whose time is between the inclusive <code>min</code> and <code>max</code> bounds.
 * If only one argument is provided, a date between January 1, 1970 UTC and the given date is returned.
 * @param {(Date|number|string)} [min=0] The lower bound (inclusive).
 * @param {(Date|number|string)} [max=Date.now()] The upper bound (inclusive).
 * @returns {Date} The randomly selected date within the date range.
 * @throws {TypeError} if <code>min</code> or <code>max</code> is a not valid date/time value.
 * @example
 * randDate(); // => a date/time between 1970-01-01 and now
 * 
 * randDate("2012-01-01"); // => a date/time between 1970-01-01 and 2012-01-01
 * 
 * randDate(Date.now(), Date.now() + 3600000); // => a date/time between now and 1 hour from now.
 * @since 1.0.0
 * @static
 */
module.exports = function (min, max) {
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }

    min = min !== undefined ? expectValidDate(min, "min") : 0;
    max = max !== undefined ? expectValidDate(max, "max") : Date.now();

    var fromTime = min instanceof Date ? min : new Date(min).getTime();
    var toTime = max instanceof Date ? max : new Date(max).getTime();
    return new Date(randInt(fromTime, toTime));
}
;

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = function (value, name) {
    var date = new Date(value);
    var time = date.getTime();

    if (time !== time) {
        throw new TypeError("Expected " + name + " to be a valid date, but found: " + value);
    }
    return date;
};

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var randInt = __webpack_require__(2);
var randFloat = __webpack_require__(4);
var getItems = __webpack_require__(9);
var getRatioValues = __webpack_require__(10);
var normaliseRatios = __webpack_require__(11);

/**
 * Randomly picks an index of the given collection. 
 * The probability of each index being picked can be defined with the ratios. 
 * A higher ratio value means a higher probability of being picked.
 * @param {(Array|Object|Iterable|string)} collection The collection to randomly pick an index from.
 * @param {(number[]|Object.<string, number>)} [ratios] The ratio values that define the probability of the corresponding index is likely to be picked.
 * @returns {*} The randomly picked index.
 * @example <caption>Without ratios - equal probability</caption>
 * // 0, 1 and 2 are all equally likely to be picked.
 * randIndex(["a", "b", "c"]);
 * 
 * randIndex({1: "a", 2: "b", 3: "c"});
 * @example <caption>With ratios - defined probabilities</caption>
 * // 0 is twice as likely to be picked than 1 or 2.
 * randIndex(["a", "b", "c"], [2, 1, 1]);
 
 * randIndex({a: "a", b: "b", c: "c"}, {a: 2, b: 1, c: 1});
 * @since 1.0.0
 * @static
 */
module.exports = function (collection, ratios) {
    if (ratios != null) {
        ratios = normaliseRatios(getRatioValues(collection, ratios));

        var pickedIndex = -1;

        var ratioSum = 0;

        for (var i = 0; i < ratios.length; i++) {
            if (ratios[i] > 0) {
                ratioSum += ratios[i];
            }
        }

        if (ratioSum > 0) {
            var point = randFloat(0, ratioSum);
            var from = 0, to;
            var index = 0;

            while (index < ratios.length) {
                to = from + ratios[index];

                if (point > from && point <= to) {
                    pickedIndex = index;
                    break;
                }

                from = to;
                index++;
            }
        }
        return pickedIndex;
    } else {
        var numItems = getItems(collection).length;
        return numItems > 0 ? randInt(0, numItems - 1) : -1;
    }
};

/***/ }),
/* 9 */
/***/ ((module) => {

/* global Symbol */

module.exports = function (collection) {
    var items = [];

    if (collection instanceof Object) {
        if (typeof collection !== "function" && typeof collection.length === "number") {
            return Array.prototype.slice.call(collection);

        } else if (collection.constructor === Object) {
            var keys = Object.keys(collection);

            if (keys.length > 0) {
                for (var i = 0; i < keys.length; i++) {
                    items[i] = collection[keys[i]];
                }
            }

        } else if (typeof Symbol !== "undefined" && Symbol.iterator && typeof collection[Symbol.iterator] === "function") {
            var iter = collection[Symbol.iterator]();
            var entry;

            while ((entry = iter.next()).done !== true) {
                items.push(entry.value);
            }
        }

    } else if (typeof collection === "string") {
        return collection;
    }
    return items;
};

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = function (collection, ratios) {
    if (ratios instanceof Array) {
        return ratios;
    }
    var ratioValues = [];

    if (ratios instanceof Object && ratios.constructor === Object) {

        if (collection instanceof Object && collection.constructor === Object) {
            var keys = Object.keys(collection);

            for (var i = 0; i < keys.length; i++) {
                ratioValues[i] = ratios[keys[i]] || 0;
            }
        }
    }
    return ratioValues;
};

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = function (ratios) {
    var normalised = [];

    for (var i = 0; i < ratios.length; i++) {
        if (typeof ratios[i] === "number") {
            normalised[i] = ratios[i] > 0 ? ratios[i] : 0;
        } else if (ratios[i] instanceof Number) {
            normalised[i] = ratios[i] > 0 ? ratios[i].valueOf() : 0;
        } else {
            normalised[i] = 0;
        }
    }

    var max = Math.max.apply(null, normalised);

    if (max === Number.POSITIVE_INFINITY) {
        for (var i = 0; i < normalised.length; i++) {
            normalised[i] = normalised[i] === Number.POSITIVE_INFINITY ? 1 : 0;
        }
    } else {
        for (var i = 0; i < normalised.length; i++) {
            normalised[i] = normalised[i] / max;
        }
    }

    return normalised;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var randIndex = __webpack_require__(8);
var getItems = __webpack_require__(9);

/**
 * Randomly picks an item from the given collection. 
 * The probability of each item being picked can be defined with the ratios. 
 * A higher ratio value means a higher probability of being picked.
 * @param {(Array|Object|Iterable|string)} collection The collection to randomly pick an item from.
 * @param {(number[]|Object.<string, number>)} [ratios] The ratio values that define the probability of each item at the corresponding index is likely to be picked.
 * @returns {*} The randomly picked item.
 * @example <caption>Without ratios - equal probability</caption>
 * // "a", "b" and "c" are all equally likely to be picked.
 * randPick(["a", "b", "c"]);
 * 
 * randPick({1: "a", 2: "b", 3: "c"});
 * @example <caption>With ratios - defined probabilities</caption>
 * // "a" is twice as likely to be returned than "b" or "c".
 * randPick(["a", "b", "c"], [2, 1, 1]);
 * 
 * randPick({a: "a", b: "b", c: "c"}, {a: 2, b: 1, c: 1});
 * @since 1.0.0
 * @static
 */
module.exports = function (collection, ratios) {
    var items = getItems(collection);
    return items[randIndex(collection, ratios)];
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});