// “var” has no block scope......

// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

if (true) {
  var test = true; // use "var" instead of "let"
}
// alert(test); // true, the variable lives after if

//   As var ignores code blocks, we’ve got a global variable test.

//   If we used let test instead of var test, then the variable would only be visible inside if:

if (true) {
  let test = true; // use "let"
}
//  alert(test); // ReferenceError: test is not defined

//=============================================
// “var” tolerates redeclarations......

// If we declare the same variable with let twice in the same scope, that’s an error:

// let user;
// let user; // SyntaxError: 'user' has already been declared
// With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

var user = "Pete";

var user = "John"; // this "var" does nothing (already declared)
// // ...it doesn't trigger an error
//  alert(user); // John

// “var” variables can be declared below their use
function country() {
  myCountry = "india";
  console.log(myCountry);
  var myCountry;
}
country();
function sayHi() {
  phrase = "Hello";
  console.log(phrase);
  var phrase;
}
sayHi();
