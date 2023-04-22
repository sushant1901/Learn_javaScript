//console.log('Hello World')
// execution context--> wrapper where all the code is executed.
//1. global object--> is for javascript execution context. In browser it is window object.
//2. this keyword--> is a empty object in javaScript.In browser it is equals to window object.

// console.log(global);
// console.log(this);
//--if code in not in any function then it is in global area.
//--the wrapper created for this code is known as global execution context.

//--JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//--variables or classes to the top of their scope, prior to execution of the code.

//console.log(5+6);

// function sayHello(param){
//     console.log('Hello World', param);
//     param();
//     return "sttrfbj";

// }
// function sayBye(){
//     console.log('Bye World');
// }
//  let rVal = sayHello(sayBye);
//     console.log(rVal);


// function outer()
// {
//     console.log("I am outer, returning inner");
//     return function inner(){
//         console.log("I am inner");
//     }
// }
// let rVal=outer();
// console.log(rVal);
// rVal();

// function real(){
//     console.log("I am 1st function");
// }
// real();
// function real(){
//     console.log("I am 2nd function");

// }
// real();
// function real(){
//     console.log("you both are waste");
// }

// real();

// let num=10;
// for(let i=0;i<num;i++){
//     console.log(i);
// }

// question--> check no is prime or not.

let number =20;
flag=true;
for(let i=2;i<number;i++){
    if(number % i==0){
        flag=false;
        break;
    }
}

if(flag==true){
    console.log("is prime");
}else{
    console.log("not a prime")
}



