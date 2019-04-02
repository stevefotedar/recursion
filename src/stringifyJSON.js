// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'string'){
    result = '"' + obj + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    result = obj.toString();
  } else if (obj === undefined) {
    result = undefined;
  } else if (obj === null) {
    result = 'null';
  } else if (Array.isArray(obj)) {
    var arrStr = '';
    for (var i = 0; i < obj.length; i++) {
      arrStr += stringifyJSON(obj[i]) + ',';
    }
    result = '[' + arrStr.slice(0, -1) + ']';
  } else if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    var objStr = '';
    for (var j = 0; j < keys.length; j++) {
      if (typeof obj[keys[j]] !== 'function' && obj[keys[j]] !== undefined) {
        objStr += stringifyJSON(keys[j]) + ':' + stringifyJSON(obj[keys[j]]) + ',';
      }
    }
    result = '{' + objStr.slice(0, -1) + '}';
  }
  return result;
};
