// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
// takes a single value 
_.identity = function(value){
    // return value unchanged 
    return value
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //If the value is an array and if true return "array"
    if(Array.isArray(value)){
        return "array"
    } else if( value === null){
        //If the value is null and if true return "array"
        return "null"
        //If it is not an array or null run typeOf function to value and return value
    } else{
        //Return the type of value
        return typeof value
    }
};
    
    

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array,number) {
   // Make an if statement with conditions if  array is not an array or if number is -  return []
   if (!Array.isArray(array) || number < 0 ){
       return [];
     }
     // Make an if statment with conditions if number is not a given or not a number return first element in array
     if (isNaN(number) || number === undefined){
        return array[0]
    // Make an else statment and return the first number iterm of array
    } else { 
            return array.slice(0,number)
}
    
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//takes two arguments and a number 

_.last = function(array,number){
    //Make an if statment with condition if array is not an array or if number is - return empty array
    if (!Array.isArray(array) || number < 0){
        return [];
    }
    //Make an if statement with condition if number is not a number return last element of array
    if (typeof number !== "number"){
        return array[array.length-1]
    }
    //If none if statements are true make an else statement and return last element of array
        else { return array.slice(-number);
        }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//takes an array and value 
// if value is an array 


_.indexOf = function(array, value){
    //Loop through array with for loop
    for(let i =0; i <= array.length - 1; i++){
        // If the element in the array is = to value return index on that itteration 
        if(array[i] === value) { 
            //Return index if true
            return i;
        }
    }
    // Return -1 if not an array 
    return -1;
} ;

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//take an array value 
//loop over array
_.contains = function(array, value){
    //Make a for loop
   for( var i =0; i < array.length; i++){
       // if the value equals any element in array return it true
       if (value === array[i]) {
           return true 
       }
       // if the value is not equal to any of the elements in the array return false
   }
   return false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
    // Make an if statement with to see if collection is an array 
*/
_.each = function(collection,func){
    
if(Array.isArray(collection)){
        // If  statement is true make a loop through the collection
    for (var i = 0; i < collection.length; i++){
            // Call function for every element in collection 
    func(collection[i], i, collection);
    }
        
        //Make an else if statment to see if collection is an object 
} else if (_.typeOf(collection) === "object" ){
    //run a for in loop through a collection 
    for(var key in collection){
     // Call a function for every property with element  
    func(collection[key], key, collection)
    }
    
   }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    debugger;
    // Create a new array
    let result = [];
    // Create a for loop through an array
        for (let i = 0; i < array.length; i++ ){
                // If element in array is not in new array (result) push element into new array
              if(_.indexOf(result, array[i]) === - 1) {
                     result.push(array[i]);
    }
}
// Return the new array with all duplicates removed from old array
    return result;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
 _.filter = function(array, func){
     // Create a new array
    let result =[];
    // Run a loop through an array 
    _.each(array, function(e, i, a){
        // Call function for each element in array
        if(func(e,i,a)){
        // If function called for each element is true push to new array
            result.push(e)
        }
    
    })
    return result;
 }
 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function (array, func){
    //create a new array = to filterd array when called function returns false for each element in that array
    var newArray = _.filter(array, function(e, i, array){
      return !func(e, i , array);
    })
    
 
    return newArray;
 // Return the new array
}

function reject(array, func){
    var newArray = filter(array, function(e, i, array){
        return !func(e, i , array);
    })
    
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, func){
    var myArrayTrue = [[], []];
// run loop through array and if called function on each element in array comes true push that element new array in first element array
   _.each(array, function(e, key, a){
        if(func(e, key ,a)){ 
            myArrayTrue[0].push(e);
            
        }
        });
// Run another loop through array and if called function on each element in array comes false push that element new array in second element array 
    _.each(array, function(e, key, a){
            if(func(e, key, a) === false){
            myArrayTrue[1].push(e);
        }
        
        });
         // Return new array
           return myArrayTrue
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    // Make a new array
    var returnArray =[];
    //Run a loop through array or object
    _.each(collection, function(e, i, collection){
        //push return value for called function to element in collection 
       returnArray.push(func(e, i, collection))
    })
    // Return new array
    return returnArray;
}

/*
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (array, prop){
//Create a new array with map method that has prop for every element in array 
    return _.map(array, function(element, i, array){
   return element[prop]    
        
    })
    
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// We are going to call a function on every element of collection

_.every = function(collection, func){
// We are going to call a function on every element of collection
// Return true if all elements are truthy 
var result = true;
_.each(collection, function(element, i, collection){
// Return true if the return value is true from func 
// See if function is not provided
        if(func === undefined){
// Return false if the return value is false from func 
      if(!element)  {
          result = false;
      }
// Return false if any element returns false  
    } else{ 
        if(!func(element, i, collection)){
        result = false
        }
    }
})
// return result
return result

function every(collection, func){
var result = true;
// We are going to call a function on every element of collection
// Return true if all elements are truthy
each(collection, function(element, i, collection){
// Return true if the return value is true from func 
// See if function is not provided
        if(func === undefined){
// Return false if the return value is false from func 
      if(!element)  {
          result = false;
      }
// Return false if any element returns false  
    } else{ 
        if(!func(element, i, collection)){
        result = false
        }
    }
})
// Return true if the return value is true from func 
// return result
return result
}
    



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){

var result = false;
    //We want to run a loop throught every element in array
_.each(collection, function(element, i, collection){
        //Make an if statment to see if func is provided  
        if(func === undefined){
            // make an if statement if one element is provided if so return true
      if(element)  {
            // if func is provided  and if one element is provided return true
          result = true;
      }
    } else{ 
        if(func(element, i, collection)){
        result = true
        }
    }
})
//return false if none of ifstatments are true
return result

}



return result
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //If there is no seed we want previous result to = the first element 
    if(seed === undefined){
        seed = array[0];
         // We want to loop through all elements in collection starting at index 1 
        for(var i = 1; i < array.length; i++){
            // Call func on all elements in collection  Ex. func(pr, element, index)
           seed = func(seed, array[i], i)
        }
        return seed
    }// If seed is = to seed run a loop through array and call function on all elements and set return value = to seed
    if(seed){
        seed = seed;
       _.each(array, function(element, index, array){
          seed = func(seed, element, index)
       }) 
    }// return seed
       return seed;
}
        
        

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, ...args){
// We want to copy the properties of all other objects except object1 and we want to add those properties from all other objectsto object1
    // We want to make a for loop to itterate through ...args
    console.log(object1); 
    console.log(args);
    _.each(args, function(object, index, collection){
        // Once we access each object we want to run a for-in loop to access the property 
        _.each(object, function(value, key, object){
            // We want to take all the properties of all the objects and move them to object1
            object1[key] = value
            
        })
    })
    // We want to return object1
    return object1;
}
                
            
        

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

}
