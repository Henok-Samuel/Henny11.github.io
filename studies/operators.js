/*Assignment operators
=     // Assignment operator            x = y        
+=    // Additon operator               x = x + y       
-=    // Subtraction operator           x = x - y
*=    // Multiplication operator        x = x * y
/=    // Divison operator               x = x / y
%=    // Remaineder operator            x = x % y
**=   // Exponentiation operator        x = x ** y
<<=   // Left shift operator            x = x << y
>>=   // Right shift operator           x = x >> y
>>>=  // Unsigned right shift operator  x = x >>> y

*/
//Examples of (Shorthand) assignment operators being used
var x = 1
var y = 5

console.log(x += y) //= 6
console.log(x -= y); //= -4
console.log(x *= y); //= 5
console.log(x /= y); //= 1/5 or .20
console.log(x %= y); //= 1
console.log(x **= y); //= 1
console.log(x >>= y); //= 0
console.log(x <<= y); //= 32
console.log(x >>> y); //= 0
/*Arithmetic operators-
+ is the Addition operator
- is the Subtraction operator
* is the Multiplication operator
/ is the Divison operator
% is the Modulus (division remainder) operator
-- is the Decrement operator 
++ is the Increment operator 
*/
//Examples of opertators being used

//Addition operator 
console.log(1+2); //===> prints 3 to the console

//Subtraction operator 
console.log(5-3); //===> prints 2 to the console 

//Multiplication opertor
console.log(5*2); //===> prints 10 to the console

//Division opertator 
console.log(10/2);//===> prints 5 to the console

//Modulas operator
console.log(6%5); //===> prints 1 to the console (returns the remainder)

//Increment operator 
var y = 5
var x = y++
console.log(x) //===> prints 6 to the console

//Decrement operator 
var b = 10
var a = --b
console.log(a) //===> prints 9 to the console
//-------------------------------------------------------------------------------------------------------------------------------
//Comparison operators
/*Comparison operators - 
Compares two values and evaluate it to a boolean (true or false)*/

//Binary comparison operators
//Greater than operator 
console.log(1 < 10); //===> true
//Less than operator 
console.log(1 > 10); //===> false
//Greater  than operator 
console.log(5 <= 5); //===> true
//Less than or equal to operator 
console.log(1 <= 1); //===> true


//Equal to value and type to operator 
console.log(2===2); //===> true 

//Not eaual to value or type operator
console.log(2!==2); //===> false

//Not eaual to value but not type operator
console.log(2!= "2"); //===> false

//Equal to operator value but not type
console.log("2"== 2);//===> true


//-------------------------------------------------------------------------------------------------------------------------------
//Logical operators  
/*
Logical operators
&& is the AND operator - Both conditions resolve to true
|| is the OR operator - One of the coditions resolve to true 
! is the BANG operator - Flips the truthiness of the value

*/
console.log(1 < 3 && 1 > 0 ); //===> true 
console.log(2 < 2 || 1 > 0 );; //===> true 
 

/*Unary operators (!, typeOf, -)
A unary operator is an operator that only has one operand.
The operand comes either before or after operator.*/
//+ ==> Tries to convert operand to a number
var i = true
console.log(+i)
//- ==> Tries to convert operand to a number and negates it 
var i = false
console.log(-i)
//++ ==> Adds 1 to its operand 
var i = 1
console.log(++i)
//-- ==> Decrements 1 to its operand
var i = 1
console.log(--i)
//typeof ==> returns what type datatype the operand is  
var i = 1
console.log(typeof i)

//! ==> Converts to boolean than negates it 
var i = 1 
console.log(!i)


/*Ternary operator (a ? b : c) The ternary operator is the only operator that takes
3 operands. The operator is frequently used as a shortcut for an if statement.*/
var x = 10, y = 5;

var result = x > y ? x : y;

console.log(result);