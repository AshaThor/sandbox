let value = "Apple";
console.log(value);
//Output "Apple"

//To determine what sort of variable that is we use the function typeof

console.log(typeof(value));
//Output "string", this tells us that the outputted variable is a string.

let value2 = 9;
console.log(typeof(value2));
//Output number

let value3 = 4.1 + 4.3;
console.log(value3)
//Output 8.3999999999 <- this is not correct however is very close to accurate

let value4 = 10/0;
console.log(value4)
//Output "Infinity"

let value5 = -10/0;
console.log(value5);
//Output "-Infinity"

/**
 * Unlike some languges, js does not throw an error when dividing by 0 it simply outputs infinity
 * This is unlike java where you would expect an exception.
*/

let value6 = 0/0;
console.log(value6);
//Output NaN <- Not a number
console.log(typeof(value6));
//Output number, so its a number but not a number 