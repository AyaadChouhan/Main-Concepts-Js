// ================Iterators===============

// iterator is used for teaversing on an object/array and it this iterator function allthing are in our control we can do iteration manully as the purpose what i want
// An iterator is an object that provides a next() method, which returns the next item in a sequence. This method returns an object with two properties:

// value: The next value in the sequence.
// done: A boolean indicating whether the sequence has finished.

function numberIterator(arr) {
  let num = 0;
  return {
    next() {
      // this next property is not a inbuilt function this is a user define function and if you want to change the name of next() function to trverseFunc() or iteratorfunc this you can..
      if (num < arr.length) {
        let val = { value: arr[num++], done: false };
        // num++
        return val;
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
// let mainFunc2 = numberIterator(arr); // numberIterator() return the object to mainFunc2 and it also have a backpack it means when numberIterator() return the object it also have a link to label (i) that is linked to the returned object and then mainfunc2 have a returned object and also have a back pack and in the backpack we have a label i which is 1
// console.log(mainFunc2.next());
//⬆️
//   This next() method allows for manual control over the iteration process, enabling the iterator to be used in various ways as per your specific needs.

// console.log(mainFunc2.next());
// console.log(mainFunc2.next());

// console.log(mainFunc2.next());
//=============================================

// function iterator(str) {
//   let i = 0;
//   return {
//     next() {
//       if (i < str.length) {
//         return {
//           val: str[i++],
//           done: false,
//         };
//       } else {
//         return { val: undefined, done: true };
//       }
//     },
//   };
// }
// let calliter = iterator("str");
// console.log(calliter.next());
// console.log(calliter.next());
// console.log(calliter.next());
// console.log(calliter.next());
// console.log(calliter.next());
// console.log(calliter.next());

class iter {
  constructor(arr) {
    this.arr = arr;
    this.i = 0;
  }
  next() {
    if (this.arr[this.i] !== undefined) {
      return {
        value: this.arr[this.i++],
        done: false,
      };
    } else {
      return {
        value: this.arr[this.i++],
        done: true,
      };
    }
  }
}

// let data = new iter([11, 22, 33, 44, 55]);
// console.log(data.next());
// console.log(data.next());
// console.log(data.next());

// let obj = {
//     next(){
//         let i = 0;
//         if (arr[i] !== undefined) {
//             return {
//               value: arr[i++],
//               done: false,
//             };
//           } else {
//             return {
//               value: undefined,
//               done: true,
//             };
//           }
//     }
// }

//=====================================================

// function iterator(arr) {
//   let i = 0;
//   return {
//     next() {
//       if (arr[i] !== undefined) {
//         return {
//           value: arr[i++],
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }
// let callInner = iterator([1, 2, 3, 4, 5]);
// console.log(callInner.next());
// console.log(callInner.next());
// console.log(callInner.next());
// console.log(callInner.next());
// console.log(callInner.next());
// console.log(callInner.next());


// function newIter(arr) {
//   let iter = arr[Symbol.iterator]()
//   return iter;
// }
// const val = newIter([1,2,3,3]);
// console.log(val.next());
// console.log(val.next());
// console.log(val.next());
// console.log(val.next());
// console.log(val.next());


//================Generator function==================

// Generator functions in JavaScript are a special functions that can be paused and resumed, allowing for more flexible and memory-efficient handling of asynchronous operations, iterators, and other scenarios where you need to maintain the function's state between executions.
// A generator function is declared with the function*
// function* name(params) {
  
// }

//======================= yield =========================
// The yield operator is used to pause and resume a generator function.

// The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller.



// Once we start thinking of our data as flows (where we can pick of an element one by one) we can rethink how we produce those flows Js now lets us produce the flows using a function 
function* createFlow() {
  yield 4;
  yield 5;
  yield 6;

}
//  yield is a super powerful keyword just like a light return that exits out of the function.But it's suspending the execution context.It's not ending it.

const returnNextElement = createFlow(); //when we call createFlow which is generator function it is return a object to returnNextElement and not create a execution context and in the object {next : (function)} we have property on it next()
const element1 = returnNextElement.next(); //  This function onthe object that got returned out of create flow has an intimatebond to where it was born at create flow, that when we call the next,it's gonna start initiate calling create flow, the function from which it was born.
const element2 = returnNextElement.next();

function *generator() {
  let myData = yield "hello world";
  return myData; // what is myData assinged ?
}
let el1 = generator(30);
// when call it next() method it yeild our value and suspended our code or exits it out with string hello world
console.log(el1.next().value); 
// now think about what will be myData is assinged🫠 let call it again
console.log(el1.next(94949).value);// myData = 94949 => myData is undefined yet bcz we doesnt assign values init but we can pass argument in next method which is implicitly assing parameter to expression myData which is left hand side if yeild


















