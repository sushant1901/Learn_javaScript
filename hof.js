// High order Function.

// A function that takes another function as an argument or returns a function as a result is called a high order function.
//map, filter, reducse.
//map: takes a function and an array and creates a new array with the function applied to each element of the array.
//filter: takes a function and an array and creates a new array with only the elements that satisfy the function.
//reduce: takes a function and an array and reduces the array to a single value by combining the elements of the array using the function.


// MAP

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr=numbers.map(function(x){
//     return x*x;
// })
// console.log(numbers);
// console.log(newArr);

//FILTER

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr=numbers.filter(function(x){
//     return x%2==0;
// })
// console.log(numbers);
// console.log(newArr);
 
//REDUCE

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumArr=numbers.reduce(function(accumulator,y){
    return accumulator+y;
},0)

console.log(numbers);
console.log(sumArr);
