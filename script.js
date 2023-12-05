/* Concept of Prototypes:
    - In JavaScript, a prototype is an object from which other objects inherit properties and methods.
      Every JavaScript object has a property called 'prototype' that refers to another object. This is
      the prototype from wich the object inherits.
    - When you try to access a property or method of an object, JavaScript first looks at the object
      itself, and if it doesn't find it there, it looks at the objects prototype, and so on up the
      chain until it finds the property or reaches the end of the prototype chain. */

/* Creating and Using Prototypes:
    - You can set the prototype of an object using 'Object.create()'. This method creates a new object
      with the specified prototype object and properties. */
// Example:
const animal = {
  isAlive: true
};

const dog = Object.create(animal);
console.log(dog.isAlive);

/* Constructor Functions and Prototypal Inheritance
    - Constructor Functions:
        - Constructor functions are used to create instances of an object. The 'new' keyword is used to
          create a new instance, and the constructor function defines properties and methods for that instance.
        - Each constructor function has a 'prototype' property that is shared by all instances created using
          that constructor. This is where you can define methods to be shared across all instances. */
// Example of Constructor Function and Inheritance:
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}
Dog.prototype = Object.create(Animal.prototype) // Set Dog's protoype to Animal's prototype
Dog.prototype.constructor = Dog; // Set the constructor property

const dog1 = new Dog('Rex');
dog1.speak();

Animal.prototype.barf = function () {
  console.log(`${this.name} just barfed out of his ass.`);
};
const dog2 = new Dog('Barfass');
dog2.barf();