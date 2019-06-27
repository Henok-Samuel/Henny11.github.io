// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//let arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(array){
 var newArray = array.reduce(function(pre, cur){
   return pre.concat(cur);
   
 }, [])
 return newArray
};


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, execute) {
  for(var value = start; test(value); value = update(value)) {
    execute(value);
  }
}
 



// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predicate) {
for (let element of array){
  if (predicate(element) === false) {
    return false
  }
}
return true
}

/*function every(array, predicate) {
  return array.some(predicate);
}*/

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
var scripts = countBy(text, char =>{
  let script = characterScript(char.codePointAt(0));
  return script ? script.direction: "none";
}).filter(({name}) => name != "none");
switch(scripts.length) {
  case 0:
    return "no dominant direction found";
    case 1:
    return scripts[0].name;
    default:
    if(scripts.reduce((acc,cur) => acc.count === cur.count)) {
      return "no dominant direction found";
    } else {
      return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
    }
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
