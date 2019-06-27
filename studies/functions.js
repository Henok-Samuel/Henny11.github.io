/*

Creating a function 
 
 The two stages of creating a a function are:
 1.Function Decleration 
 2.Function Call
 
 Function decleration - You create an action or instruction you want the computer to perform (This is called the block code).
 We want the action to be acted on multiple possible values we don't want it be
 acted on concrete values but instead we want it done to placeholders called parameters. *Parameters* 
 exist in our function as a substitute for anytime we want to function to act on certain values which would be the *arguments*. 

A function can have mulitple parameters or not paramters at all (So parameters are optional).
A return statement determines the value the functions outputs (returns). Not all functions have
return statements and the functions that dont will return undefined.

Function and Scope
Variables defined in a function are locally scoped. Variables defined outside a function are globally scoped.
Every function when invoked creates a new scope. Variables that are globally scoped can be used within
a function but variables that are locally scoped can be used outside that scope.
*/
function times3(){
 let x = 10
 return x * 3
}
//console.log(x)     //=====> Will cause a refrence error that x is not defined because x was only defined in the function scope 

/*
 Functin call 
Function styntax you create function with keyword function then name it afterwards 
and then in () you put your paramters if any then its followed with {} (function body) where you put your block code.
 */
 
 function multiply(num1,num2){        //====> So we  declared a function and named it 
     return num1 * num2  ;             //      and gave it two parameters (Potential inputs) and 
 } 
 
 function add(){
  return 1 + 3;                       // A function without parameters but still returns a value
 }
 /*
 Function Call
 After we declare a function we want to call on it to use certain values.To invoke a function
 we call the function name and fill it with the arguments for our parameters.
 A function call consisits of function name, function arguments inside of ().
 */
 
 console.log(multiply(10,20)) /* The values 10 & 20 are our arguments and the called function 
 should print 200
 */
 
 //A function expression is a function that is stored in a variable 
 var sum = function(a,b) {
 return a + b
 }
 
 //Calling function expression
 sum(10, 20); //=> 30
 
 
 
/*Clousure is when a inner function has access to an out function variables || A clourse is a function that has a refrence from a private variable*/
 
function profileIntro(firstName, lastName){
var intro = "My name is ";
function fullName(){
 return intro + firstName + " " + lastName;         //Inner function (fullname) has access to the variable intro outside its scope
}
return fullName();
}

console.log(profileIntro("Henok", "Samuel")); //==> Is going to console log "My name is Henok Samuel"