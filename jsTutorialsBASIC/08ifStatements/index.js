if (5 === 5) { // We use "===" to compair 2 values, as this is true the following code will execute 
    console.log("Yes");//This code will execute
}
if (5 > 10){//This is false
    console.log("No");//This code wont execute
}
if (10 > 5){//This is true 
    console.log("Yes");//This code executes
}

let score = 1000;
if (score >= 1000){
    score = score + 100;
}
console.log(score);

if (score <= 1){
    console.log("Statement 1 has run")
} else {
    console.log("Statement 2 has run")
}
/**
 * Here statement 2 will run as the if resolves to false and then then if statemtn turns to its else
 */

if (score <= 1){
    console.log("Statement 1 has run")
} else if(score === 1100){
    console.log("Statement 1.5 has run")
} else {
    console.log("Statement 2 has run")
}
/**
 * In this example the statement 1.5 runs but that is all. This is down to the fact that the first if is flase
 * the second if resolves true and then the if statement jumps out after resovling the 2nd if
 */
