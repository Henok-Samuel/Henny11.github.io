/*
 * Control flow:
 *
 Control flow of an application is about how we make decisions in our code
 if true or false. Based on the results of the question (condition) we decide if the code 
 runs if true or false.
 
To use control flow we use conditional if statmentents along with else-if and 
else statements if needed. The if statement is the first statement used and can 
only be applied once, if that condition is not met (fails) we have the option of
doing another if statement but this time it's called "else if" one or multiple 
times (After the first if statement). And then we have the option to set an else 
statement after an if or else if statement which executes code if none of the 
conditions passed (were true) in the if and else if statements.
 
 *The syntax of an if statement is type in keyword "if" followed by () which we put or condition in
 then followed by a {} which we put our code block in. The else if statement is the same as if just
 with keyword (else if) instead and is always followed by the first if statement. 
 The else chain does not have any condition so {} and block code within is only required.

 */

// Example of if statement with chains - else if & else

var age = 18; // Created a variabale and assigned it a value 
if (age >= 18){  //Created an if statement with a conidtion if var age >= 18 run (code block) 
    console.log("You are old enough to use this site!");
    
} else if(age >= 13){console.log("You are a teen but must have a Parent approve before you can use this site."); 
//^^^^^ Created an else if statment with a new condition and new code block to run if condition is true
    
} else{console.log("You are too young to use this website"); //If no conditions are true than else statement will run its code
    
}

/*A switch statement is very similar to an if statement with a different formart.
The switch statement evaulates an expression and matches it's value to a case 
clause and executes statements associated with the case. A break statement end each case..

With an if statment you can check multiple conditions at a time and with an switch statement 
you have one condtion for each case but you can have multiple cases in a switch statment. The switch statement
is more organized and easy to understand because of the simple layout.
*/
 //Example
 var favDessert = "cake";
 switch(favDessert){                                  
     case "pie":                                      // Add case clause 
         console.log("we have 50 pies right now");
         break;                                       //After case clause
     case "cake":
         console.log("We have 10 cakes right now");
         break;
    default:                                           // Default clasue last
    console.log("Sorry we do not have the dessert");
 }
