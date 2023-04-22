// is the square of the no is even.

// Imperative way
// const x=5;
// const xSq=x*x;
// let isEven;
// if(xSq %2==0){
//     isEven=true;
// }else{
//     isEven=false;
// }
// console.log(isEven);

// declarative way.

const isSquareEven=(x)=>((x*x)%2===0? true : false)
console.log(isSquareEven(8));
