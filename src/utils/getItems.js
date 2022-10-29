/* global Symbol */

module.exports = function (collection) {
    var items = [];

    if (collection instanceof Object) {
        if (typeof collection !== "function" && typeof collection.length === "number") {
            return Array.prototype.slice.call(collection);

        } else if (collection.constructor === Object) {
            var keys = Object.keys(collection);

            if (keys.length > 0) {
                for (var i = 0; i < keys.length; i++) {
                    items[i] = collection[keys[i]];
                }
            }

        } else if (typeof Symbol !== "undefined" && Symbol.iterator && typeof collection[Symbol.iterator] === "function") {
            var iter = collection[Symbol.iterator]();
            var entry;

            while ((entry = iter.next()).done !== true) {
                items.push(entry.value);
            }
        }

    } else if (typeof collection === "string") {
        return collection;
    }
    return items;
};