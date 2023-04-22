// if(true){
//     console.log("hello");
//     console.log("hello again");
// }

// {}--> block
// VARIABLE SHADOWING--> when a variable is declared 
//in a certain scope having the same name defined on its 
//outer scope and when we call the variable from the inner scope, 
//the value assigned to the variable in the inner scope is the
// value that will be stored in the variable in the memory space. 
//This is known as Shadowing or Variable Shadowing.
let fruit="apple";
console.log(fruit);
{
    let fruit;
    console.log(fruit);
    fruit="orange";
    {
        console.log(fruit);
    }
    console.log(fruit);

}
console.log(fruit);