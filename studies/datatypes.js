/*
* Datatypes
*
0. Javascript is a dynamic language, this means variables in JavaScript
do not directly associate with any data type. These variables are
able to be assigned to all types of data. The different
types of data include:
Number, String, Boolean, Array, Object, Function, undefined, null, Nan, Infinity or –Infinity.
There are primative and complex data types the difference is that primitives are 
immutable and non-primitives are mutable(changeable).
Primitatve include: Number, String, Boolean, undefined, null, and Infinity or –Infinity.
Complex datatypes include: Array, Object, and Function.

Primative datatypes are copy by value and complex datatypes are copy by refrence. When a variable is assigned to 
a primitive type value and new variable is reassigned to that variable it is copying the value from that variable, so the orginal 
variable is left unchanged. But when a variable is being assigned to a complex datatype any reassigning to a new variable it 
is going to refrenece the value stored in the orginal variable so it can be changed because of the refrence.


*/

/*1. Number 
- The number type are intergers or flotating point numbers.
To create in Javascript  all you have to do is simply just type them out

Example of Number:

*/
var number1 = 100;

/*2. String
-The string type is any string of charachters that you want to create as a value.
To charachters into a string you must wrap them around single or double quotes (' ' or " " ).

Example of a string: "Hello everyone!" or "Good Morning!"
*/
console.log("Hello"); // Prints out string that I made using double quotes

/*3. Boolean 
Booleans can only have two values and that is true or false. Booleans are used to know if a value
is true or false. (Usually used for control flow and if statements)
*/
//Example of a Boolean being used below
var age ;

if(age >= 18) {
  console.log(true)
} else{console.log(false)
    
} // This code will run true if the value of age is greater than or equal 18 or else it would be false

/*4. Array 
An array is a zero indexed list. Arrays are collections that allow you
to store different type of data types into a list. Arrays are complex data types
because they are able to hold other data types including themselves (Arrays).
*/
// Creating an Array
var myArray = [] // created variable & assigned it to an empty literal Array

// Accesing an Array element
var myArray = [100, "Age", true,];
myArray[1]; //Accesses 2nd element in myArrayList

/*
5. Object
Like an array an object is a collection that allows you to store 
different datatypes values but the difference is that it's not ordered 
and does not have an index, instead they have keys. An object is a collection
of key value pairs. To find a postion of a value for an Array we find it by 
the index but with an Object we acess the value by the key (name).
Objects are associative Arrays because the key is associated with value in that key.
*/
//Creating an Object
var myObject ={} // created variabale & assigned to an empty literal Object
// Creating key-value pairs in an Object Accessing an Object element
var myObject = {
    name: "Henok",
    age: 25
};
//Accessing an Object element
myObject.name // ==> returns "Henok"

/*
6. Function
A function is made up of block code that are statements that are encapsulated. The statements 
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 */
 function multiply(num1,num2){        
     return num1 * num2               
 } 
/*
7. undefined 
Is a declared variable that has not been given a value
*/
var x;
console.log(x);
/*
8. null
A variable that has no value and in math operations null is converted to 0
*/
var age = null; //==> no  value
console.log(age + 10); //==> console logs 10
/*
9. NaN
The NaN  represents "Not-a-Number" value.
*/
var x;
console.log(x-1);//===> console logs NaN because undefined -1 is not a number
/*
10. Infinity & -Infinity
Infinity is a number value that represents positive infinity and - Infinity  represents negative infinity
*/
var i =  1/0;
console.log(i);