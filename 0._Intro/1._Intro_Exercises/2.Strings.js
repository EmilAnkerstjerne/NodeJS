// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = +numberOne + +numberTwo;
const sum1 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

//---

const anotherSum = (+anotherNumberOne + +anotherNumberTwo).toFixed(2);
const anotherSum1 = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);
console.log(anotherSum);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3;
const fixedAverage = average.toFixed(5);
console.log(fixedAverage);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);
console.log(letters[letters.search("c")]);
console.log(letters.match("c"));



// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const fact2 = fact.replace("j", "J");
console.log(fact2);


// --------------------------------------



