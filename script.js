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
console.log('Is the dog alive? True or false?: ')
console.log(dog.isAlive);

