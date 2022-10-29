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
