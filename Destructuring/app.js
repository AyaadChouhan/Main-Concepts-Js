// Destructuring in JavaScript is a powerful feature, but it comes with some corner cases and nuances that you should be aware of. Here are some common ones:

// 1. Destructuring with Default Values
// When using default values, the default is only used if the value being destructured is undefined.

// const { a = 10 } = { a: undefined }; // a will be 10
// const { b = 10 } = { b: null }; // b will be null, not 10

// 2. Nested Destructuring
// When destructuring nested objects, you must ensure the intermediate levels are defined.
// const data = { a: { b: undefined } };
// const { a: { b = 10 } } = data; // b will be 10

// const data2 = {};
// const { a: { b: c } = {} } = data2; // Throws an error because a is undefined

// 3. Destructuring Arrays with Sparse Values
// Destructuring arrays with sparse values (i.e., arrays with holes) can lead to unexpected results.

// const arr = [1, , 3];
// const [x, y, z] = arr; // x is 1, y is undefined (not skipped), z is 3

// 4. Destructuring Function Parameters
// When destructuring function parameters, missing or undefined parameters can lead to errors.

function foo({ x, y }) {
  console.log(x, y);
}

foo({ x: 1 }); // Throws an error because y is undefined

// 5. Rest Parameter in Destructuring
// Rest parameters can be tricky when used with destructuring, especially with arrays and objects.

// const [x, ...y] = [1, 2, 3]; // x is 1, y is [2, 3]

// const { a, ...b } = { a: 1, b: 2, c: 3 }; // a is 1, b is { b: 2, c: 3 }

// const { a, ...b } = { a: 1 }; // a is 1, b is {}

// 6. Default Values in Nested Destructuring
// Default values in nested destructuring can sometimes lead to confusing results.

// const obj = { a: { b: 2 } };
// const { a: { b = 10, c = 20 } = {} } = obj; // b is 2, c is 20

// 7. Variable Name Clashes
// When destructuring, ensure variable names do not clash with existing variables in scope.

// let x = 5;
// const obj = { x: 10, y: 20 };
// ({ x } = obj); // x is now 10, previously 5

// 8. Computed Property Names
// Using computed property names in destructuring can be tricky and may lead to unexpected behavior.

// const key = 'a';
// const { [key]: value } = { a: 1, b: 2 }; // value is 1

// 9. Destructuring in Loops
// When destructuring in loops, be cautious of the scoping and iteration variables.

// const arr = [{ a: 1 }, { a: 2 }];
// for (const { a } of arr) {
//   console.log(a); // logs 1 and then 2
// }

// 10. Swapping Variables
// Swapping variables using destructuring is concise but can be confusing if not used carefully.

// let a = 1, b = 2;
// [a, b] = [b, a]; // a is now 2, b is now 1
// Understanding these corner cases can help you use destructuring more effectively and avoid potential pitfalls.

