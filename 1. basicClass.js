"use strict";
// Basic Class
// Making a Class
class Person {
    // Defining Constructor
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        // Defining Other Properties
        this.friends = [];
    }
    // Defining Method
    greeting() {
        console.log(`Hello my name is ${this.name}`);
    }
}
// Creating New Instance
const ihsan = new Person('Ihsan', 10, 320);
