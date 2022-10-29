/*
 * Copyright (c) 2018 Michael Ko
 * 
 * This work is licensed under the GNU LGPLv3 license.
 * <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */

"use strict";

var assert = require("chai").assert;
var randBool = require("../src/randBool.js");
var repeat = require("./utils/repeat.js");
var count = require("./utils/count.js");


suite("#randBool", function () {

    test("0 arg", function () {
        var results = repeat(randBool, 100);

        results.forEach(function (val) {
            assert.equal(typeof val, "boolean");
        });

        assert.closeTo(count(results, true), 50, 25);
        assert.closeTo(count(results, false), 50, 25);

    });

});