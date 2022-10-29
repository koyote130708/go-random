/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

"use strict";

var assert = require("chai").assert;
var randInt = require("../src/randInt.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");


suite("#randInt", function () {

    test("0 arg", function () {
        var results = repeat(randInt, 10000);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= 0 && val <= Number.MAX_SAFE_INTEGER);
        });

    });


    test("1 arg - between 0 and 0", function () {
        var results = repeat(randInt, 100, [0]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
        });

        assert.closeTo(count(results, 0), 100, 0);
    });


    test("1 arg - between 0 and a positive number", function () {
        var results = repeat(randInt, 100, [2]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
        });

        assert.closeTo(count(results, 0), 33, 16);
        assert.closeTo(count(results, 1), 33, 16);
        assert.closeTo(count(results, 2), 33, 16);
    });


    test("1 arg - between 0 and a negative number", function () {
        var results = repeat(randInt, 100, [-2]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
        });


        assert.closeTo(count(results, 0), 33, 16);
        assert.closeTo(count(results, -1), 33, 16);
        assert.closeTo(count(results, -2), 33, 16);
    });


    test("1 arg - between 0 and a non-number", function () {
        var results = repeat(randInt, 100, [undefined]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= 0 && val <= Number.MAX_SAFE_INTEGER);
        });

        assert.equal(randInt(null), 0);

        assert.equal(randInt(false), 0);

        results = repeat(randInt, 100, [true]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= 0 && val <= 1);
        });

        assert.equal(randInt(""), 0);


        results = repeat(randInt, 100, ["2"]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= 0 && val <= 2);
        });

        results = repeat(randInt, 100, ["-2"]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= -2 && val <= 0);
        });

        results = repeat(randInt, 100, [Number.POSITIVE_INFINITY]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= 0 && val <= Number.MAX_VALUE);
        });

        results = repeat(randInt, 100, [Number.NEGATIVE_INFINITY]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
            assert(val >= -Number.MAX_VALUE && val <= 0);
        });


        assert.throws(randInt.bind(null, NaN), TypeError);

    });


    test("2 arg - between two numbers", function () {
        var results = repeat(randInt, 100, [1, 3]);

        results.forEach(function (val) {
            assert(Number.isInteger(val));
        });

        assert.closeTo(count(results, 1), 33, 16);
        assert.closeTo(count(results, 2), 33, 16);
        assert.closeTo(count(results, 3), 33, 16);
    });

});