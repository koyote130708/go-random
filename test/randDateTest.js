/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

"use strict";

var assert = require("chai").assert;
var randDate = require("../src/randDate.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");


suite("#randDate", function () {

    test("0 arg", function () {
        var now = Date.now();

        var results = repeat(randDate, 100);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= 0 && val.getTime() <= now);
        });
    });


    test("1 arg - between 0 and a date after 1970-01-01", function () {
        var bound = 2;
        var results = repeat(randDate, 100, [new Date(bound)]);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= 0 && val.getTime() <= bound);
        });
    });


    test("1 arg - between 0 and a date before 1970-01-01", function () {
        var bound = -2;
        var results = repeat(randDate, 100, [new Date(bound)]);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= bound && val.getTime() <= 0);
        });
    });


    test("2 arg - between 0 and a non-date", function () {
        var results = repeat(randDate, 100, [undefined]);

        var now = Date.now();

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= 0 && val.getTime() <= now);
        });

        assert.equal(randDate(null).getTime(), 0);

        assert.equal(randDate(false).getTime(), 0);

        results = repeat(randDate, 100, [true]);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= 0 && val.getTime() <= 1);
        });

        results = repeat(randDate, 100, ["1970-01-01T00:00:01Z"]);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= 0 && val.getTime() <= 1000);
        });

        assert.throws(randDate.bind(null, ""), TypeError);
        assert.throws(randDate.bind(null, Number.POSITIVE_INFINITY), TypeError);
        assert.throws(randDate.bind(null, Number.NEGATIVE_INFINITY), TypeError);
        assert.throws(randDate.bind(null, NaN), TypeError);
    });


    test("2 arg - between two dates", function () {
        var lower = -1;
        var upper = 1;
        var results = repeat(randDate, 100, [lower, upper]);

        results.forEach(function (val) {
            assert(val instanceof Date);
            assert(val.getTime() >= lower && val.getTime() <= upper);
        });
    });

});