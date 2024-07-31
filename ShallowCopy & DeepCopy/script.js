//====================SHALLOW COPY $ DEEP COPY================================

// A shallow copy of an object or array copies the top-level properties, but nested objects/arrays are shared between the original and the copied object/array. Changes to nested objects/arrays will affect both the original and the copied object/array.

// method to create Shallow copy..⬇️
// Object.assign({},obj)..  //objName or array name
// Object.create();
// Array.slice()
// spread operator with array and objects in both cases spread operator can create a shallo copy

// Creating a shallow copy in JavaScript can be done in several ways. Here are the most common methods:

// 1. Using the Spread Operator (...)
// The spread operator is a concise and modern way to create a shallow copy of an object or an array.

// Object:
// const originalObj = { a: 1, b: 2 };
// const shallowCopy2 = { ...originalObj };
// shallowCopy2.a = 22;
// console.log(originalObj);
// console.log(shallowCopy2);

// Array:
// const originalArr = [1, 2, 3];
// const shallowCopy = [...originalArr];
// console.log(originalArr);
// shallowCopy[0] = 200
// console.log(shallowCopy);

// 2. Using Object.assign()
// Object.assign() can be used to create a shallow copy of an object.

// const originalObj = { a: 1, b: 2 };
// const shallowCopy = Object.assign({}, originalObj);
// shallowCopy.b = "ayaad chouhan"
// console.log(originalObj, shallowCopy );


// 3. Using Array.prototype.slice()
const originalArr = [1, 2, 3];
const shallowCopy = originalArr.slice();
originalArr[0] = 'Bca', "Mca"
// console.log(originalArr);
// console.log(shallowCopy);

// 4. Using Array.from()
// Array.from() creates a shallow copy of an array or an array-like object.

// const originalArr = [1, 2, 3];
// const shallowCopy = Array.from(originalArr);

// 5. Using Array.prototype.concat()
// concat() can be used to create a shallow copy of an array by concatenating it with an empty array.

// const originalArr = [1, 2, 3];
// const shallowCopy = originalArr.concat();

// 6. Using Object.create()
// Object.create() can create a shallow copy of an object, but it copies only the prototype chain and not the properties of the object itself. You need to combine it with other methods to copy properties.

const originalObj = { a: 1, b: 2 };
const shallowCopy2 = Object.assign({}, originalObj);

console.log(shallowCopy2);

// Examples and Summary
// Here's a quick comparison using an example object and array:

// Object Example:
// const originalObj = {
//   name: "Ayaad",
//   address: {
//     city: "Jodhpur",
//     pinCode: 342001
//   }
// };

// const shallowCopy1 = { ...originalObj };
// const shallowCopy2 = Object.assign({}, originalObj);
// const shallowCopy3 = Object.create(Object.getPrototypeOf(originalObj));
// Object.assign(shallowCopy3, originalObj);

// console.log(shallowCopy1);
// console.log(shallowCopy2);
// console.log(shallowCopy3);

// Array Example:

// const originalArr = [1, [2, 3], 4];

// const shallowCopy1 = [...originalArr];
// const shallowCopy2 = originalArr.slice();
// const shallowCopy3 = Array.from(originalArr);
// const shallowCopy4 = originalArr.concat();

// console.log(shallowCopy1);
// console.log(shallowCopy2);
// console.log(shallowCopy3);
// console.log(shallowCopy4);
// Key Points
// Spread Operator (...): Modern and concise for both objects and arrays.
// Object.assign(): Versatile for objects.
// Array.prototype.slice(): Common for arrays.
// Array.from(): Useful for arrays and array-like objects.
// Array.prototype.concat(): Simple for arrays.
// Object.create(): Useful for copying the prototype chain, combined with Object.assign() for properties.
//===========================Deep Copy=====================================

// A deep copy of an object or array copies all levels of the object or array. Changes to the copied object/array do not affect the original, and vice versa.

// Methods to Create Deep Copies
// Using JSON.parse() and JSON.stringify():
// This method is simple and effective for objects and arrays that do not contain functions, undefined, NaN, or Infinity.

// const originalArr = [1, 2, 3, [2,3,2]];
// const shallowCopy = JSON.parse(JSON.stringify(originalArr))
// shallowCopy[0] = 2000;
// shallowCopy[3][0] = 999;
// console.log(originalArr);
// console.log(shallowCopy);
