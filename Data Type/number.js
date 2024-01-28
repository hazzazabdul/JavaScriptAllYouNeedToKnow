/**
 * in Javascript integer & floating numbers are same
 */

// We can declare Number
const n = 56;
const nn = 65.56;
const nnn = Number(45);

/**
 * By using Number constructer we can convert number string into number
 */

const numStr1 = Number("68");
const numStr2 = Number("68.86");
console.log(numStr1);
console.log(numStr2);

/**
 * If we try to convert string into numbe than it will give us NaN
 */

console.log(Number("askdjfhdas"));

/**
 * Convert floating number into integer number
 */

console.log(parseInt(nn));

/**
 * Convert integer number into floating number. javascript didn't count 00 after dot
 */

console.log(parseFloat(n));

/**
 * max value javascript can store
 */

console.log(Number.MAX_VALUE);

/**
 * minimum value javascript can store
 */

console.log(Number.MIN_VALUE);
