//String manipulation 

// The length Property - Tells us how many charchters we have in a string
var myString = "Hello my name is Henok"
console.log(myString.length) //==> 22, this is how many chrachters we have in a string 

// The toUpperCase() method converts a string to uppercase letters
console.log(myString.toUpperCase()) //==> converts all letters of myString to upper case 

// The toLowerCase() method converts a string to uppercase letters
console.log(myString.toLowerCase()) //==> converts all letters of myString to lower case 

// The indexOf() - is used to check if a string is within a string
var myArray = [1,2,3,4,5,6,7,8]
console.log(myArray.indexOf(5)) // returns index of 4


/*The slice() method takes out certain parts of a string 
and returns the extracted parts into a new string*/
var myString = "Hello my name is Henok";
console.log(myString.slice(0,5)) //==> Will extract "Hello" 


//The split() method is used to split a string into an array of substrings and you input the seperator (string charachter) to let split know where you want to seperate
var string = "John Jim Kelly Sara"
console.log(string.split(" ")) // This will log a new array of substring of names ==> ["John", "Jim", "Kelly", "Sara"]


//The indexOf() method returns the index of the first occurence of what ever specifed text
var myString = "I love hotwings! How about you?"

console.log(myString.indexOf("love")); // console logs => 2

//The search() method returns the position or index of the matched value
var myString = "I am so hungry!";
console.log(myString.search("am"))// consoles logs =>2


