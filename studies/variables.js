/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can
 * use variables.  Variables are named identifiers that can point to values 
 * of a particular type, like a Number, String, Boolean, Array, Object or
 * another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.

THE 3 VARIABLES:
var - are containers for reassginable values that are hosited to the top of the function scope or global scope

let - are containers for reassginable values. let is block scoped (the let scope is bound the it's block)

const - is not a container that is reassignable and const is block scoped meaning they are bound in where they are declared 

Let and const are declared once interpeter reaches the line they are declared at. 
Accesing let or const before they are declared would cause a Refrence Error.
*/

//Examples hositing with the 3 variables 
var x = 10

function funcX(){
    x = 20;
}

console.log(x); // will console log => 10   because reassignment is only within function 

let y = 0
if(true) {
    let y = 12
};
console.log(y) // will console log => 0  because variable is blockscoped 



const a = 10
a = 25 
console.log(a);// will run an error that const can be reassigned 


/*

 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";