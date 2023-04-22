//this keyword in non strict mode.
// will se how this keyword works in nodejs.

//this in global scope

// console.log(this); // this will print empty object

//this in function

// function thisTest(){
//     console.log(this);// return global object

// }

// thisTest();

//this in object-->function.
// let obj={
//     name:"sachin",
//     age:23,
//     print:function(){
//         console.log(this);
//     }
// }
// obj.print(); // this will print object

//this in object-->function-->function.
// let obj = {
//   name: "sachin",
//   age: 23,
//   print: function () {
//     function g() {
//       console.log(this);// this will print global object
//     }
//     g();
//   },
// };
// obj.print();

"use strict";
//this in global scope
// console.log(this); // this will print empty object

//this in function under strict mode.

// function thisTest(){
//     console.log(this);// return undefined

// }
//this in object --> function under strict mode.
// let obj={
//     name:"sachin",
//     age:23,
//     print:function(){
//         console.log(this);
//     }
// }
// obj.print(); // this will print object

//this in object-->function--> function under strict mode.

// let obj = {
//   name: "sachin",
//   age: 23,
//   print: function () {
//     function g() {  
//       console.log(this); // this will print undefined
//     }
//     g();
//   },
// };
// obj.print();
