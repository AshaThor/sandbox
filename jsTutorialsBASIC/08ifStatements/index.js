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