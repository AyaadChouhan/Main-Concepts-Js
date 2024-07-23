// Template Literals in JavaScript
// This repository provides a comprehensive overview of template literals in JavaScript, including core concepts, practical examples, and common corner cases. Template literals are a powerful feature that enhance string manipulation, allowing for embedded expressions, multi-line strings, and tagged templates.

// Template Literals in JavaScript
// Template Literals is a way of using expresssions in strings
// 1. Basic Syntax
// Enclosed by backticks (``), not single or double quotes.
// Can include placeholders for expressions with ${}.

const name = "Alice";
const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, Alice!

// . Multiline Strings
// Allows for strings spanning multiple lines without needing explicit newline characters.

const multiline = `this is a
 mulitline string.`;
// console.log(multiline);
// Output:     // This is a
// multiline string.

// we can use expressions inside  `${}`.
let a = 1;
let b = 2;
// console.log(`the sum of ${a} and ${b} is ${a + b}`);

// ================Corner Cases of template literals=======================

// When interpolating objects, the default toString() method is called, which returns [object Object]. Use JSON.stringify() to get a more useful representation.

let obj = { a: 1, b: 2 };
// console.log(`Object: ${obj}`); // Output: Object: [object Object]
// console.log(`Object: ${JSON.stringify(obj)}`); // Output: Object:

// Arrays are converted to a comma-separated string of their elements.

let arr = [1, 2, 3];
// console.log(`Array: ${arr}`); // Output: Array: 1,2,3

//=======================Tagged Template====================

// Tagged templates in JavaScript are a feature of template literals that allow you to customize the way your templates are processed.
//  By tagging a template literal, you can manipulate the resulting string or perform other operations on the template's parts and values.
// syntax => tag`content...`
// in tagged template =>
function mytag(strings, ...values) {
  //   console.log(strings);
  //   console.log(values);
  // let str = ``;
  // for (let i = 0; i < strings.length; i++) {
  //   if (strings.length > values.length) {
  //     str += `${strings[i]}`;
  //   }
  //   if (values[i] !== undefined) {
  //     str += `${values[i]}`;
  //   }
  // }
  // return str;
  //=================
  //   return strings.reduce((acc, curr, ind) => {
  // //    acc += `${curr}${values[ind]}`
  //     if (strings.length > values.length) {
  //       acc += `${curr}`;
  //     }
  //     if (values[ind] !== undefined) {
  //       acc += `${values[ind]}`;
  //     }
  //     return acc;
  //   }, ``);
  //   return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}`;
}

// The .raw property is part of the first argument (usually named strings) passed to a tagged template function. This property contains the raw string segments of the template literal.

function tag(strings, ...values) {
  console.log('Strings:', strings);
  console.log('Raw Strings:', strings.raw);
  console.log('Values:', values);

  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

const myname = 'Alice';
const filePath = 'C:\\Users\\Alice\\Documents';

const message = tag`Hello, ${myname}! Your file path is: ${filePath}\nNew line test.`;
console.log('Final message:', message);

