var expectValidNumber = require("./utils/expectValidNumber.js");

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