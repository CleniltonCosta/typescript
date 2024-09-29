// Day 3 - Exercise 4
var integer = 6;
var float = 6.66;
var hex = '0xf00d';
var binary = '0b1010011010';
var octal = '0o744';
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = 'Infinity';
var members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = '12345';
console.log(members);
