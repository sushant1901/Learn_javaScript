// let car1={
//     name:"BMW",
//     model:"X5",
//     color:"black"
// }

// let car2={
//     name:"Audi",
//     model:"A6",
//     color:"white"
// }

// to avoid code duplication we can use constructor function.

// Constructor function.
// function car(brand, model, color) {
//   this.Brand = brand;
//   this.Model = model;
//   this.Color = color;
// }

// let car1 = new car("BMW", "X5", "white");
// let car2 = new car("Audi", "A6", "black");

// console.log(car1);
// console.log(car2);
// console.log("---------------------------------")

// car1.Brand="Jaguar";
// car1.Model="XJL";
// console.log(car1);


// creating fnction inside the constructor function for the objects. 

function car(brand, model, color) {
    this.Brand = brand;
    this.Model = model;
    this.Color = color;

    this.drive=function(){
        console.log(`I am driving ${this.Brand} ${this.Model}`);
    }
  }
  
  let car1 = new car("BMW", "X5", "white");
  let car2 = new car("Audi", "A6", "black");

car1.drive();
car2.drive();

