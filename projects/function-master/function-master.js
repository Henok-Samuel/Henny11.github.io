//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
console.log(object)
    var valuesInA = []
   
    for (var key in object){
     valuesInA.push(object[key])
    }
    return valuesInA;

  /*QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
      var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
      var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
      assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
      assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);*/
    };
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var myArray = Object.keys(object) 

    return myArray.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var myArray = []
    for (var key in object) {
        if (typeof (object[key]) === "string") { 
             myArray.push(object[key])
        } 
}
    return myArray.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true) {
        return "array"
        
    }
        else if (typeof(collection) === "object"){
            return "object"
        }
    }


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string[0].toUpperCase() + string.slice(1)
};

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    var myArray = string.split(" "); 
    var myArrayCaps = [];
    for( var i = 0; i < myArray.length; i++){
        myArrayCaps.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));
        
    }
    return myArrayCaps.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var nameCap = object.name[0].toLocaleUpperCase() + object.name.slice(1);

return "Welcome " + nameCap + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var nameCap = object.name[0].toLocaleUpperCase() + object.name.slice(1);
var speciesCap = object.species[0].toLocaleUpperCase() + object.species.slice(1);
return nameCap + " is a " + speciesCap;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (object.hasOwnProperty("noises") && object.noises.length) {
    return object.noises.join(" ")
}
    else {
         return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
 if(string.search(word) > 1){
     return true
 } else { return false
 }
}
    
    /*for (var i = 0; i < stringArray.length; i++){
        if (typeof stringArray(i) === "string" && stringArray.includes(word)){
            return true
        } 
     return false
    }*/
  



//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name)
return object;
}
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if (object.friends) {
    return (object.friends.includes(name));
}
    return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 let notFriends = [];
 for( var i = 0; i < array.length; i++){
     if ((isFriend(name,array[i]) === false) && (name !== array[i].name)){
         notFriends.push(array[i].name);
     }
     }
     return notFriends
 }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
 object[key] = value
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var key in object){
    for (var i = 0; i < array.length; i++) {
        if (array[i] === key){
            delete object[key];
            }
        }
} return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let unique = [...new Set(array)]
    return(unique);
}
 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
// Function 5 - Capitalize Word //////////////////////////////////////
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
