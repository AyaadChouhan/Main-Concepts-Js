// Advanced Array Destructuring

// Destructuring with Default Values and Rest
// const numbers = [1, , 3];
// const [a = 10, b = 20, ...rest] = numbers;
// console.log(a, b, rest); // ? output : 1, 20,[3]

// Nested Destructuring with Rest Operator
// const nestedArray = [1, [2, 3, [4, 5]], 6];
// const [a, [b, , [c, d]], e] = nestedArray;
// console.log(a, b, c, d, e); // ? output : 1,2,4,5,6

// Skipping and Default Values Combined
// const values = [1, , 3, 4];
// const [a, b = 2, c, d, e = 5] = values;
// console.log(a, b, c, d, e); // ? output : 1,2,3,4,5

// Destructuring a Function's Return Value
// function getCoordinates() {
//   return [10, 20, 30];
// }
// const [x, y, z] = getCoordinates();
// console.log(x, y, z); // ? output : 10, 20, 30

// Complex Nested Destructuring
// const data = [1, [2, 3, [4, 5]], 6, 7];
// const [a, [b, , [c, d]], ...rest] = data;
// console.log(a, b, c, d, rest); // ? output : 1,2,4,5[6, 7]

// Advanced Object Destructuring
// Destructuring with Renaming and Default Values

// const user = { name: "Alice", age: 25, city: "Wonderland" };
// const { name: userName, age: userAge, country = "Unknown" } = user;
// console.log(userName, userAge, country); // ? output : Alice, 25, Unkown

// Nested Object Destructuring
// const user = { name: "Alice", address: { city: "Wonderland", zip: "12345" } };
// const {
//   name,
//   address: { city, zip },
// } = user;
// console.log(name, city, zip); // ? output : Alice, Wonderland, 12345

// Destructuring Function Parameters
// function displayUser({ name, age, city = "Unknown" }) {
//   console.log(name, age, city);
// }
// const user = { name: "Alice", age: 25 };
// displayUser(user); // ? output : {name: Alice, age: 25, city: Unkown}
// What will be the output of the function call displayUser(user)?

// Rest Property in Object Destructuring

// const person = { name: "Alice", age: 25, city: "Wonderland" };
// const { name, ...details } = person;
// console.log(name, details); // ? output : Alice, {age: 25, city: Wonderland}

// Destructuring with Dynamic Property Names

// const key = "age";
// const user = { name: "Alice", age: 25, city: "Wonderland" };
// const { [key]: userAge } = user;
// console.log(usage); // output : 25

// let obj = [
//    {
//     name: "ayaad",
//     age: 22,
//   },
//   {
//     name: "afan",
//     age: 32,
//   },
// ];
let newObj = {};
// for (const val of obj) {
//     // console.log([val.name]);
//     newObj[val.name] = val.age
//     // newObj[val.age] = val.age
// }
// // console.log(newObj);
let arr = ["a", "b", "c"];
let obj = { bio: { name: "ayaad" }, add: { country: "India" } };
let copy = obj//JSON.stringify(obj);
copy.bio.name = "khan"
// console.log(obj);
// ({bio : {name: nm}, add : {country}} = obj)
const {add : {country}} = obj
// console.log(country);


// let {
//   bio: { name: myname },
//   add: { country },
// } = obj;
// for (const key in arr) {
//   // console.log(arr[key]);
// }

// console.log(obj.add.country);

function mergeFunc(...obj) {
  return obj.reduce((acc, curr)=>{
    return {...acc, ...curr};
  }, )
}
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
console.log(mergeFunc({}, obj1, obj2));

const merge = {...obj1, ...obj2}
// console.log(merge);

let nmyewObj = Object.assign(obj1, obj2)
console.log(obj1);
