var randInt = require("./randInt.js");
var expectValidNumber = require("./utils/expectValidNumber.js");

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