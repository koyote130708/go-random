var randIndex = require("./randIndex.js");
var getItems = require("./utils/getItems.js");

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