module.exports = function (value, name) {
    var date = new Date(value);
    var time = date.getTime();

    if (time !== time) {
        throw new TypeError("Expected " + name + " to be a valid date, but found: " + value);
    }
    return date;
};