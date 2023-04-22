//The immutable objects are objects whose value can not be changed after initialization. 
//We can not change anything once the object is created.

//this is known as mutability.Refrence type is mutable.

// const person1={
//     name:'John',
//     age:25
// }

// const person2= person1;
// person2.name='Peter'; 

// console.log(person1);
// console.log(person2);



//with Object.assign() method we can create a new object with the same properties as the original object.
//and convert it to immutable object.

// const person1={
//     name:'John',
//     age:25
// }

// const person2= Object.assign({},person1);
// person2.name='Peter';
// person2.age=30; 

// console.log(person1);
// console.log(person2);

//using spread operator
const person1={
    name:'John',
    age:25
}

const person2= {...person1};
person2.name='Peter';
person2.age=30; 

console.log(person1);
console.log(person2);

