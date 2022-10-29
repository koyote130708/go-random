var expectValidNumber = require("./utils/expectValidNumber.js");

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