const array = ["a", "b", "c"];
const obj = {1: "a", 2: "b", 3: "c"};
const str = "abc";
const set = new Set(["a", "b", "c"]);
const map = new Map([[1, "a"], [2, "b"], [3, "c"]]);

const ratios0 = [0, 0, 0];
const ratios0b = {1: 0, 2: 0, 3: 0};

const ratios1 = [1, 1, 1];
const ratios1b = {1: 1, 2: 1, 3: 1};

const ratios2 = [1, 2, 3];
const ratios2b = {1: 1, 2: 2, 3: 3};

const ratios3 = [3, 2, 1];
const ratios3b = {1: 3, 2: 2, 3: 1};

const ratios4 = [1, -2, 3];
const ratios4b = {1: 1, 2: -2, 3: 3};

const ratios5 = [-1, -2, -3];
const ratios5b = {1: -1, 2: -2, 3: -3};

const ratios6 = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
const ratios6b = {1: Number.MAX_VALUE, 2: Number.MAX_VALUE, 3: Number.MAX_VALUE};

const ratios7 = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE];
const ratios7b = {1: Number.MIN_VALUE, 2: Number.MIN_VALUE, 3: Number.MIN_VALUE};

const ratios8 = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
const ratios8b = {1: Number.POSITIVE_INFINITY, 2: Number.POSITIVE_INFINITY, 3: Number.POSITIVE_INFINITY};

const ratios9 = [Number.NEGATIVE_INFINITY, Number.MAX_VALUE, Number.POSITIVE_INFINITY];
const ratios9b = {1: Number.NEGATIVE_INFINITY, 2: Number.MAX_VALUE, 3: Number.POSITIVE_INFINITY};


const ratios10 = [NaN, 2, NaN];
const ratios10b = {1: NaN, 2: 2, 3: NaN};

const ratios11 = [new Number(1), new Number(2), new Number(0)];
const ratios11b = {1: new Number(1), 2: new Number(2), 3: new Number(0)};

const ratios12 = ["1", "2", 3];
const ratios12b = {1: "1", 2: "2", 3: 3};

const ratios13 = [false, null, BigInt(3)];
const ratios13b = {1: false, 2: null, 3: BigInt(3)};

module.exports = {
    array,
    obj,
    str,
    "set": set,
    map,
    ratios0,
    ratios0b,
    ratios1,
    ratios1b,
    ratios2,
    ratios2b,
    ratios3,
    ratios3b,
    ratios4,
    ratios4b,
    ratios5,
    ratios5b,
    ratios6,
    ratios6b,
    ratios7,
    ratios7b,
    ratios8,
    ratios8b,
    ratios9,
    ratios9b,
    ratios10,
    ratios10b,
    ratios11,
    ratios11b,
    ratios12,
    ratios12b,
    ratios13,
    ratios13b
};