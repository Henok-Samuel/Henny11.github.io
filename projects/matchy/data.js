/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Dog";
animal["name"] = "Lucky";
animal.noises = [];
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0]= "Woof"

noises.push("Meow");
/*function addNoiseToEnd(noise){
    noises.push(noise)
    }*/
noises.unshift("Brrrrrr")
/*addNoiseToEnd("Meow");
function addNoisetoBeg(noise){
noises.unshift(noise)   

}
addNoiseToEnd("Moooo");*/

noises[noises.length] = "Haha";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises
noises.push("Boom");
/*noises.noises ="Owwwwww"
console.log(animal);*/

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
    
}


animals.push(duck);
console.log(animals);
var dolphin = { species: 'dolphin', name: 'Craig', noises: ['Quaaaaa', 'Ehehehe'] }
animals.push(dolphin);
var bird = { species: 'Bird', name: 'Joey', noises: ['feeewa', 'chch'] }
animals.push(bird);
//////////////////////////////////////////////////////////////////////
var friends = []

function getRandom(animals) {
  let min = Math.ceil(animals.length); 
  let max = Math.floor(0);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    
    
friends.push(animals[getRandom(animals)].name);

console.log(friends)
animals[getRandom(animals)].friends = friends;


    
    
    
    
    

// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
