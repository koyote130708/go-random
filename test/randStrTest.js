/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

"use strict";

var assert = require("chai").assert;
var randStr = require("../src/randStr.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");

var DEFAULT_STRING_CHARS = randStr.DEFAULT_STRING_CHARS;
var DEFAULT_STRING_LENGTH = randStr.DEFAULT_STRING_LENGTH;

suite("#randStr", function () {

    test("0 arg", function () {
        var regex = new RegExp("^[" + DEFAULT_STRING_CHARS + "]{" + DEFAULT_STRING_LENGTH + "}$");
        var results = repeat(randStr, 100);

        results.forEach(function (val) {
            assert.equal(typeof val, "string");
            assert.equal(val.length, DEFAULT_STRING_LENGTH);
            assert(regex.test(val));
        });

    });


    test("1 arg - valid length", function () {
        assert.equal(randStr(0), "");

        var regex = new RegExp("^[" + DEFAULT_STRING_CHARS + "]{3}$");
        var results = repeat(randStr, 100, [3]);

        results.forEach(function (val) {
            assert.equal(typeof val, "string");
            assert.equal(val.length, 3);
            assert(regex.test(val));
        });

        results = repeat(randStr, 100, ["3"]);

        results.forEach(function (val) {
            assert.equal(typeof val, "string");
            assert.equal(val.length, 3);
            assert(regex.test(val));
        });

    });


    test("1 arg - invalid length", function () {
        assert.throws(randStr.bind(null, NaN), TypeError);
        assert.throws(randStr.bind(null, -1), RangeError);
    });


    test("2 arg - length and chars", function () {
        var results = repeat(randStr, 100, [3, "abcdefg"]);

        results.forEach(function (val) {
            assert.equal(typeof val, "string");
            assert(/^[a-g]{3}$/.test(val));
        });


        results = repeat(randStr, 100, [10, ["aaa", "bbb", "ccc"]]);

        results.forEach(function (val) {
            assert.equal(typeof val, "string");
            assert(/^[a-c]{10}$/.test(val));
        });


        results = repeat(randStr, 100, [3, ""]);

        results.forEach(function (val) {
            assert.equal(val, "");
        });


        results = repeat(randStr, 100, [3, null]);

        results.forEach(function (val) {
            assert.equal(val, "");
        });

    });

});