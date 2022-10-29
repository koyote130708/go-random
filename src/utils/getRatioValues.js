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