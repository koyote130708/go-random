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