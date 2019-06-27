/*
Loops in JavaScript allow us to exectue block of code mulltipy times.
There are 3 main loops you can use for loops: for loops, for in loops, and while loops.

For loops are only for arrays and strings
For in loops are to itterate the keys in an object.

The three statements needed in a loop for configuration 
1.Start condition: the condition set to tell you loop where to begin

2.Stopping condition: the condition set to tell when your loop to stop based on a boolean value.

3.Increment: How much the variable will change per iteration. 
*/
//Example for loop
for(var i = 0; i < 10; i++){
    //code block to be executed 
    
}
//Examples of looping forwards and backwards for a forloop
//Looping Forwards
var myArray =[10 , 20, 30, 40, 50];
for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
};

//Looping Backwards
for(var i = myArray.length - 1; i >= 0; i--){
    console.log(myArray[i])
};

//Looping through first 3 elements
for(var i = 0; i < 3; i++){
    console.log(myArray[i])
};

// For in loop example
var myObject ={
    nameFirst: "Henok",
    age: 25
    }
for(var key in myObject){
   console.log(myObject[key]) //pulling all the values in the keys of the object ==> "Henok", 25
}

/*
A while loop is when you want to repeat a section of code until a condition is met.
Can be used when you need to repeat an action for not a definte amount of time.
*/
//Example
var count = 1

while (count < 5) {
  console.log(count)
  count = count + 1;
}
