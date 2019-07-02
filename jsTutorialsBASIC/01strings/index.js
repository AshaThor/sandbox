console.log("Hello World");

//Making a variable is the "let" keyword
let productName = "Hammer";
//This delares and sets the vaiable name "productName" and sets it to the value of "Hammer"

//Much like in Java you need to finish the line with a semicolon ;

console.log(productName);
//Prints "Hammer"

 let productId = "H2643";

 console.log(productName, productId);
// use a comma , to attach multiple variables together in a console out
//This output is "Hammer H2643"
//Note that in the poutput there is a space and this is different from say Java where it will compound your statements into one string.

let singleProductName = "Spoon",
    singleProductID = "S626";
//NOTE Above i have used a comma to declare two variables at the same time without using a 2nd let

console.log(singleProductName, singleProductID);
// This will produce "Spoon S626"

//When using Strings remember that ' are special so if we wish to include it in our output we need to think about this
// put a \' to make it output

let specialCase = 'We\'re here';

console.log(specialCase);
/*
Output is "We're here" wit the ' included as we told the compiler we wanted its output
This is known as excaping the character
*/

//To concatinate two strings you will need to use the + operatior
let x = "Eng" , y = "lish";
console.log(x+y);
//The output here is "English", this is because we concatinated out strings together to create one string from two
