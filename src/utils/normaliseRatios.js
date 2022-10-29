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