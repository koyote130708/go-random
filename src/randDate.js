var randInt = require("./randInt.js");
var expectValidDate = require("./utils/expectValidDate.js");

/**
 * Generates a <code>Date</code> object whose time is between the inclusive <code>min</code> and <code>max</code> bounds.
 * If only one argument is provided, a date between January 1, 1970 UTC and the given date is returned.
 * @param {(Date|number|string)} [min=0] The lower bound (inclusive).
 * @param {(Date|number|string)} [max=Date.now()] The upper bound (inclusive).
 * @returns {Date} The randomly selected date within the date range.
 * @throws {TypeError} if <code>min</code> or <code>max</code> is a not valid date/time value.
 * @example
 * randDate(); // => a date/time between 1970-01-01 and now
 * 
 * randDate("2012-01-01"); // => a date/time between 1970-01-01 and 2012-01-01
 * 
 * randDate(Date.now(), Date.now() + 3600000); // => a date/time between now and 1 hour from now.
 * @since 1.0.0
 * @static
 */
module.exports = function (min, max) {
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }

    min = min !== undefined ? expectValidDate(min, "min") : 0;
    max = max !== undefined ? expectValidDate(max, "max") : Date.now();

    var fromTime = min instanceof Date ? min : new Date(min).getTime();
    var toTime = max instanceof Date ? max : new Date(max).getTime();
    return new Date(randInt(fromTime, toTime));
}
;