/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

"use strict";

var assert = require("chai").assert;
var randIndex = require("../src/randIndex.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");
var delta = require("./utils/delta.js");
var data = require("./utils/data.js");

suite("#randIndex", function () {

    test("0 arg", function () {
        var results = repeat(randIndex, 100);

        results.forEach(function (val) {
            assert.equal(val, -1);
        });
    });


    test("1 arg - empty collections", function () {
        assert.equal(randIndex([]), -1);
        assert.equal(randIndex(""), -1);
        assert.equal(randIndex({}), -1);
        assert.equal(randIndex(new Set()), -1);
        assert.equal(randIndex(new Map()), -1);
    });


    test("1 arg - array", function () {
        var results = repeat(randIndex, 100, [data.array]);

        results.forEach(function (val) {
            assert.equal(typeof val, "number");
            assert(val >= 0 && val <= 2);
        });
    });


    test("1 arg - string", function () {
        var results = repeat(randIndex, 100, [data.str]);

        results.forEach(function (val) {
            assert.equal(typeof val, "number");
            assert(val >= 0 && val <= 2);
        });
    });


    test("1 arg - object", function () {
        var results = repeat(randIndex, 100, [data.obj]);

        results.forEach(function (val) {
            assert.equal(typeof val, "number");
            assert(val >= 0 && val <= 2);
        });
    });


    test("1 arg - set", function () {
        var results = repeat(randIndex, 100, [data.set]);

        results.forEach(function (val) {
            assert.equal(typeof val, "number");
            assert(val >= 0 && val <= 2);
        });
    });


    test("1 arg - map", function () {
        var results = repeat(randIndex, 100, [data.map]);

        results.forEach(function (val) {
            assert.equal(typeof val, "number");
            assert(val >= 0 && val <= 2);
        });
    });


    test("2 arg - ratios 0:0:0", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios0]);

        assert.equal(count(results, 0), 0);
        assert.equal(count(results, 1), 0);
        assert.equal(count(results, 2), 0);

        results = repeat(randIndex, 100, [data.obj, data.ratios0b]);

        assert.equal(count(results, 0), 0);
        assert.equal(count(results, 1), 0);
        assert.equal(count(results, 2), 0);
    });


    test("2 arg - ratios 1:1:1", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios1]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));

        results = repeat(randIndex, 100, [data.obj, data.ratios1b]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));
    });


    test("2 arg - ratios 1:2:3", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios2]);

        assert.closeTo(count(results, 0), 17, delta(17));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 50, delta(50));

        results = repeat(randIndex, 100, [data.obj, data.ratios2b]);

        assert.closeTo(count(results, 0), 17, delta(17));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 50, delta(50));
    });


    test("2 arg - ratios 3:2:1", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios3]);

        assert.closeTo(count(results, 0), 50, delta(50));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 17, delta(17));

        results = repeat(randIndex, 100, [data.obj, data.ratios3b]);

        assert.closeTo(count(results, 0), 50, delta(50));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 17, delta(17));
    });


    test("2 arg - ratios 1:-2:3", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios4]);

        assert.closeTo(count(results, 0), 25, delta(25));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 75, delta(75));

        results = repeat(randIndex, 100, [data.obj, data.ratios4b]);

        assert.closeTo(count(results, 0), 25, delta(25));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 75, delta(75));
    });


    test("2 arg - ratios -1:-2:-3", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios5]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios5b]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));
    });


    test("2 arg - ratios with max values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios6]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));

        results = repeat(randIndex, 100, [data.obj, data.ratios6b]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));
    });


    test("2 arg - ratios with min values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios7]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));

        results = repeat(randIndex, 100, [data.obj, data.ratios7b]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));
    });


    test("2 arg - ratios with +infinity", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios8]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));

        results = repeat(randIndex, 100, [data.obj, data.ratios8b]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 33, delta(33));
        assert.closeTo(count(results, 2), 33, delta(33));
    });


    test("2 arg - ratios with +-infinity and max value", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios9]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 100, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios9b]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 100, delta(0));
    });


    test("2 arg - ratios with NaN values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios10]);
        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 100, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios10b]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 100, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));
    });


    test("2 arg - ratios with Number object values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios11]);
        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 66, delta(66));
        assert.closeTo(count(results, 2), 0, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios11b]);

        assert.closeTo(count(results, 0), 33, delta(33));
        assert.closeTo(count(results, 1), 66, delta(66));
        assert.closeTo(count(results, 2), 0, delta(0));
    });


    test("2 arg - ratios with numeric string values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios12]);
        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 100, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios12b]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 100, delta(0));
    });


    test("2 arg - ratios with non-number values", function () {
        var results = repeat(randIndex, 100, [data.array, data.ratios13]);
        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));

        results = repeat(randIndex, 100, [data.obj, data.ratios13b]);

        assert.closeTo(count(results, 0), 0, delta(0));
        assert.closeTo(count(results, 1), 0, delta(0));
        assert.closeTo(count(results, 2), 0, delta(0));
    });

});