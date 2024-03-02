// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");


"Hello World".endsWith("Hello");


"Hello World".endsWith("rld");


var firstString = "I have iPhone"
var secondString = "U have iPad"

console.log(firstString.startsWith("I"));
console.log(secondString.startsWith("I"));
//returns a boolean of whether the string meets the condition
console.log(firstString.toUpperCase());
//converts the string to all upper case
console.log(secondString.toLowerCase());
//converts the string to all lower case

console.log(firstString.charAt(3));
//gives value of the 3rd index in the string (goes 0 1 2 3) 
console.log(secondString[3]);
//same as above but treating the string like an array

if (firstString.length > secondString.length){
    console.log("first string is bigger in length")
}

// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var itemNumbers = [1,5,4];
var years = [1996, 1998, 2020, 2024];
var favoritePeople = ["mom","dad","friends"]

// itemNumbers.length ; // 3
// itemNumbers.push(6,7,8); //adds the argument to the last of the array
// console.log(itemNumbers.length); // 6 after the push
// itemNumbers[6] = "Fruit";
// console.log(Object.keys(itemNumbers)); //prints out all array positions

console.log(years.concat(itemNumbers)); // concat(); combines two arrays into one
console.log(itemNumbers.copyWithin(0,1,2)); //copyWithin(target,start,end). the Start index will move to the target index)
function favorites(fav){
    return fav.length < 3;
}
console.log(favoritePeople.every(favorites)); //every() method executes a function for each array element
// returns true if function is true for all elements. returns false if false for ONE element.

var result = favoritePeople.filter((people) => people.includes("a")); //filter() method creates a copy based on your given filter
console.log(result); //result is the new array


