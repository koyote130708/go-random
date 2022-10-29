module.exports = function (fn, count, args) {
    var results = [];
    for (var i = 0; i < count; i++) {
        results[i] = fn.apply(fn, args);
    }
    return results;
};