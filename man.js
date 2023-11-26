// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// console.log('isTwoOdd:' isTwoOdd 2 );



// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25== 0;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, the results into a single variable 

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

console.log(isDivisibleBy5)

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast);

// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticResult = ((n2 - n1) * n3) % n4;
console.log(arithmeticResult);

// Change the way that isOver25 calculates.

const isUnderOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isUnderOrEqual25);

// Log the overall results.
console.log(isValid);


// https://github.com/Fasika-Aga/Data-manipulation.git
// git init
//  git add README.md
//  git commit -m "first commit"
//   git branch -M main
//   $   git remote add origin https://github.com/Fasika-Aga/ggg.git
//     git push -u origin main
//     $ git add .
//      git init

// Constants
const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const costPerGallon = 3; // dollars

// Fuel efficiency at different speeds
const efficiency55 = 30; // miles per gallon
const efficiency60 = 28; // miles per gallon
const efficiency75 = 23; // miles per gallon

// Calculate for 55 mph
const speed55 = 55;
const gallonsFor55 = totalDistance / efficiency55;
const totalCost55 = gallonsFor55 * costPerGallon;
const tripDuration55 = totalDistance / speed55;

// Calculate for 60 mph
const speed60 = 60;
const gallonsfor60 = totalDistance / efficiency60;
const totalCost60 = gallonsfor60* costPerGallon;
const tripDuration60 = totalDistance / speed60;

// Calculate for 75 mph
const speed75 = 75;
const gallonfor75 = totalDistance / efficiency75;
const totalCost75 = gallonfor75 * costPerGallon;
const tripDuration75 = totalDistance / speed75;

// Compare the results

console.log(`Gallons of fuel needed: ${gallonsFor55}`);
console.log(`Total cost of fuel: $${totalCost55}`);
console.log(`Trip duration: ${tripDuration55} hours`);
console.log(`Is the budget enough? ${totalCost55 <= fuelBudget ? 'Yes' : 'No'}`);
console.log('\n');


console.log(`Gallons of fuel needed: ${gallonsfor60}`);
console.log(`Total cost of fuel: $${totalCost60}`);
console.log(`Trip duration: ${tripDuration60} hours`);
console.log(`Is the budget enough? ${totalCost60 <= fuelBudget ? 'Yes' : 'No'}`);
console.log('\n');


console.log(`Gallons of fuel needed: ${gallonfor75}`);
console.log(`Total cost of fuel: $${totalCost75}`);
console.log(`Trip duration: ${tripDuration75} hours`);
console.log(`Is the budget enough? ${totalCost75 <= fuelBudget ? 'Yes' : 'No'}`);


Javascript/data-man/index.htmlJavascript/data-man/man.js