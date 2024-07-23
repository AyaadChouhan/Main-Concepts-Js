// These are 10 practice questions for you to deepen your understanding of tagged templates in JavaScript;
function capitalizeTag(strings, ...values) {
  return strings.reduce((acc, curr, ind) => {
    if (strings.length >= values.length) {
      acc += `${curr}`;
    }
    if (values[ind] !== undefined) {
      acc += `${values[ind]}`;
    }
    return acc;
  }, ``);
}

// const name = "john doe";
// const result = capitalizeTag`Hello, ${name}`;
// console.log(result); // Should print "Hello, John Doe"

//=======================================================

// Conditional Formatting
// Create a tagged template conditionalTag that adds "!" to the end of a string if the value is true and "?" if false.

function conditionalTag(strings, ...values) {
  for (let i = 0; i < strings.length; i++) {
    if (values[i] === true) {
      return `${strings[i]} ${values[i] + "!"}`;
    } else if (values[i] === false) {
      return `${strings[i]} ${values[i] + "?"}`;
    }
  }
}

const isActive = false;
// const result = conditionalTag`Status: ${isActive}`;
// console.log(result); // Should print "Status: true!"

//====================================

// Escape SQL
// Write a tagged template sqlTag that escapes single quotes in the interpolated values to prevent SQL injection.

function sqlTag(strings, ...values) {
  return strings.reduce((acc, curr, ind) => {
    if (strings.length >= values.length || strings.length <= values.length) {
      acc += `${curr}`;
    }
    if (values[ind] !== undefined) {
      acc += `${values[ind]}`;
    }
    return acc;
  }, ``);
}

// const userInput = "O'Reilly";
// const result = sqlTag`SELECT * FROM users WHERE name = '${userInput}'`;
// console.log(result); // Should print "SELECT * FROM users WHERE name = 'O''Reilly'"


//============================

// Repeat Strings
// Implement a tagged template repeatTag that repeats each interpolated string value twice.

function repeatTag(strings, ...values) {
    let str = ``
     str = values[0].repeat(2)
     return str
}

// const word = "Hello";
// const result = repeatTag`${word}`;
// console.log(repeatTag`${word}`);
// console.log(result); // Should print "HelloHello"


//==================
// Uppercase Template
// Create a tagged template upperTag that converts all the template literals and interpolated values to uppercase.

function upperTag(strings, ...values) {
    let str = ``;
   
  for (let i = 0; i < strings.length; i++) {
        if (strings.length > values.length) {
            str += `${strings[i].toUpperCase()}`
        }
        if(values[i] !== undefined){
            str += `${values[i].toUpperCase()}`
        }
  }
  return str
}

const name = "Alice";
const result = upperTag`My name is ${name}`;
console.log(result); // Should print "MY NAME IS ALICE"