let thisIsANumber = 42;
//The Lack of "" signifies that this is infact a number and that we want it to be recognised as such

let num1 = 42, num2 = "1", num3 = 2, num4 = 657;
// NOTE "num2" has its "1" in "" this means that the 1 will be treated as a string

console.log(num1 + num2);
//The output for this file is now 421, this has not added the numbers and has simply compounded them as a number and a string

console.log(num1 + num3);
//The output for this however will be that of "44", this is due to the ocmpiler knowing that they are both numbers and the mathmatical sign "+"

console.log(num1 * num3);
//Output shall be 84.
console.log(num4 / num1);
//This shows that the compiler can work with numbers that are not a round int. Output is 15.642.......

//List of operators + - * / %(Remander) , you can also use () as parththasees
console.log(num1 * num3 + (num4 % num3))
//Our output here is that of 85. num4 remainder num3 is 1, then num1 * num3 = 84. 84+1 = 85

//You can overide variables too
let answer = 12;
answer = 72;
answer = 4;
console.log(answer);
//Although we started with 12, we output 4 as by the time the console wants to read it it has been changed.