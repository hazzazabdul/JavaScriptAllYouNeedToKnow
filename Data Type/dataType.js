// Two Types of data
// 1. Primitve\
/**
 *
 * primitive data types are javascript own data types
 */

/**
 * Number => 10, 5, 6.8
 * String => everything in ("" / '') are string. Like => "Jazaz", "3543"
 * Boolean => true, false
 * undefined, null  => both indicates
 * undefined => nothing is defined
 * null => absence of a value
 */

// 2. Object
/**
 * object type are built with primitive
 */
/**
 * Array
 * Object
 * Function
 */

/************ String ************/

// String literal

const str1 = "Hello";
const str2 = "Hello";
const str3 = `Hello`;

// String Constructor can convert number into string
const str4 = String("wellcome");
const str5 = String("8987");
const str6 = String("89.87");

console.log(str4, str5, str6);

/************ Number ************/

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

/************ Boolean ************/

// Boolean literal
const b1 = true;
const b2 = false;

// Boolean constructor can indentify if the value true or false

const b3 = Boolean(056);
const b4 = Boolean("056");
const b5 = Boolean("056.sdf");
const b6 = Boolean(0);
console.log(b3, b4, b5, b6);

/************ Undefined vs Null ************/

/**
 * Undefined =>  A variable without value always store undefined.
 * it is declared but not assigned any value
 */

/**
 * Null => A variable with unknown value can store null.
 * if you expact any value we can fill it with null initially.
 * Null is a special type used as a absence of an object.
 * we are expecting an object in this sitution we can use null.
 */


/************ Hexadecimal vs Octal ************/

/**
 * If we want write hexadecimal number in js we have to use (0x or 0X) before hexadecimal number
 */


const hex = 0xff
console.log(hex) // 255

/**
 * If we want write Octal number in js we have to use (0) before hexadecimal number
 */

const oct = 0756
console.log(oct) // 494