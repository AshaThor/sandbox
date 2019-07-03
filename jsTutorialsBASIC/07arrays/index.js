let values0 = [];
//This is an array
let values1 = [1,2,3,4];
//This is an initialised array
console.log(values1[0]); //Output "1"
console.log(values1[1]); //Output "2"
console.log(values1[2]); //Output "3"
console.log(values1[3]); //Output "4"
console.log(values1[4]); //Output "Undeffined"

//REMEMBER index 0

console.log(values1);
/*
Output "Array(4) [1,2,3,4]"
This shows us that the array is 4 elements long and then prints every element in the array
*/

console.log(values1.length);
//Output 4

values1.push(12);
//Pushing will add a value to the end of the array.
console.log(values1);
//Output "Array(5) [1,2,3,4,12]" <- this is because we have added a value to the end of the array

values1.pop();
//This deletes the last entry in the array list 
console.log(values1);
//Output "Array(4) [1,2,3,4]"

//That "Popped" value can be stored in a variabal
let item = values1.pop();
console.log(values1, "\n" , item);
/**
 * Output: Array(3) [1,2,3]
 * 4
 * This is due to the 4 being caught by item 
 */