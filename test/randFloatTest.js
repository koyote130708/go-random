/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

/* global NaN */

"use strict";

var assert = require("chai").assert;
var randFloat = require("../src/randFloat.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");


suite("#randFloat", function () {

    test("0 arg", function () {
        var results = repeat(randFloat, 10000);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val < Number.MAX_VALUE);
        });

    });


    test("1 arg - between 0 and 0", function () {
        var results = repeat(randFloat, 100, [0]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
        });

        assert.closeTo(count(results, 0), 100, 0);
    });


    test("1 arg - between 0 and a positive number", function () {
        var results = repeat(randFloat, 100, [0.1]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val <= 0.1);
        });

    });


    test("1 arg - between 0 and a negative number", function () {
        var results = repeat(randFloat, 100, [-0.1]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= -0.1 && val <= 0);
        });

    });


    test("1 arg - between 0 and a non-number", function () {
        var results = repeat(randFloat, 100, [undefined]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val <= Number.MAX_VALUE);
        });

        assert.equal(randFloat(null), 0);

        assert.equal(randFloat(false), 0);

        results = repeat(randFloat, 100, [true]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val <= 1);
        });

        assert.equal(randFloat(""), 0);


        results = repeat(randFloat, 100, ["2"]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val <= 2);
        });

        results = repeat(randFloat, 100, ["-2"]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= -2 && val <= 0);
        });

        results = repeat(randFloat, 100, [Number.POSITIVE_INFINITY]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0 && val <= Number.MAX_VALUE);
        });

        results = repeat(randFloat, 100, [Number.NEGATIVE_INFINITY]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= -Number.MAX_VALUE && val <= 0);
        });


        assert.throws(randFloat.bind(null, NaN), TypeError);

    });


    test("2 arg - between two numbers", function () {

        var results = repeat(randFloat, 100, [0.1, 0.3]);

        results.forEach(function (val) {
            assert(Number.isFinite(val));
            assert(val >= 0.1 && val <= 0.3, val + " is out of range");
        });

    });


    test("2 arg - between two numbers with dps", function () {

        var results = repeat(randFloat, 100, [0.1, 0.3, 2]);

        results.forEach(function (val) {
            assert(String(val).split(".")[1].length <= 2);
            assert(val >= 0.1 && val <= 0.3, val + " is out of range");
        });

    });

});