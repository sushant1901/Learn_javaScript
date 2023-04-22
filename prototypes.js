// let arr=[1,2,3,4,5,6,7,8,9,10];

// learning about prototypal inheritance.

let object1 = {
  talk: true,
  canFly() {
    console.log("I can fly");
  },
};

let object2 = {
  canCode: false,
  canCook() {
    console.log("I can cook");
  },

  // __proto__: object1==>u can write protoype in side any object which can be used as base.
};

object1.__proto__ = object2;

console.log("Can a object2 talk: " + object2.talk);
console.log("Can a object2 fly: " + object2.CanFly());
console.log("Can a object2 code: " +object2.CanCode);
console.log("Can a object2 cook: " + object2.CanCook());
