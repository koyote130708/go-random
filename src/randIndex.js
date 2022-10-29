var randInt = require("./randInt.js");
var randFloat = require("./randFloat.js");
var getItems = require("./utils/getItems.js");
var getRatioValues = require("./utils/getRatioValues.js");
var normaliseRatios = require("./utils/normaliseRatios.js");

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