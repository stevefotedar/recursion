// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var elementClassMatch = function(element) {
    if (element.classList !== undefined && element.classList.contains(className)) {
      results.push(element);
    }
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        elementClassMatch(children[i]);
      }
    }
  }
  elementClassMatch(document.body);
  return results;
};
