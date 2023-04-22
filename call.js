//without using call method

// let person1 = {
//     name :"John",
//     age: 23,
//     showDetails: function(){
//         console.log(this.name+" is "+this.age+" years old ");
//     }
// }

// let person2 = {
//     name :"harry",
//     age: 24,
//     showDetails: function(){
//         console.log(this.name+" is "+this.age+" years old ");
//     }
    
// }


// person1.showDetails();
// person2.showDetails();


//using call method

// let person1 = {
//     name :"John",
//     age: 23,
//     showDetails: function(){
//         console.log(this.name+" is "+this.age+" years old ");
//     }
// }

// let person2 = {
//     name :"harry",
//     age: 24,
// }


// person1.showDetails.call(person2);


// call method with external arguement.

// let person1 = {
//     name :"John",
//     age: 23,
// }

// let person2 = {
//     name :"harry",
//     age: 24,
// }

// let showDetails= function(city,car){
//     console.log(`${this.name} is ${this.age} years old and he lives in ${city} and he drives ${car}`);
// }


// showDetails.call(person1,"Noida","BMW");
// showDetails.call(person2,"Delhi","Audi");



//apply method

// let person1 = {
//     name :"John",
//     age: 23,
// }

// let person2 = {
//     name :"harry",
//     age: 24,
// }

// let showDetails= function(city,car){
//     console.log(`${this.name} is ${this.age} years old and he lives in ${city} and he drives ${car}`);
// }


// showDetails.apply(person2,["Delhi","Audi"]);
// showDetails.apply(person1,["Noida","BMW"]);


//bind method

let person1 = {
    name :"John",
    age: 23,
}

let person2 = {
    name :"harry",
    age: 24,
}

let showDetails= function(city,car){
    console.log(`${this.name} is ${this.age} years old and he lives in ${city} and he drives ${car}`);
}


let showDetailsBinds=showDetails.bind(person1,"Noida","BMW");
showDetailsBinds();
