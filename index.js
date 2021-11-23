"use strict";
// 1. Basic Class
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
        console.log(`Hello my name is ${this.name}, I'm ${this.age} years old`);
    }
}
// Creating New Instance
const ihsan = new Person('Ihsan', 10, 320);
// 2. Inheritance
class Student extends Person {
    // Defining Constructor
    constructor(name, age, id, school, grade, studentId) {
        super(name, age, id);
        this.school = school;
        this.grade = grade;
        this.studentId = studentId;
    }
    // Polymorphism
    greeting() {
        console.log(`Hello my name is ${this.name}, I'm ${this.age} years old, Now I'm Schooling in ${this.grade} at ${this.school}`);
    }
    // Setter
    set setStudentId(id) {
        this.studentId = id;
    }
    // Getter
    get getStudentId() {
        return this.studentId;
    }
}
const alfian = new Student('Alfian', 13, 3203, 'SMKN 1 Cibinong', 10, 20023);
// 3. Abstract Class
class Culture {
    // Defining Constructor
    constructor(name) {
        this.name = name;
    }
}
class RegionalCulture extends Culture {
    constructor(name, country, region) {
        super(name);
        this.country = country;
        this.region = region;
    }
    // Changing the Abstract Function
    getToKnow() {
        console.log(`This is ${this.name} Regional Culture, This culture exist in ${this.country}, more depth in ${this.region}`);
    }
}
const sunda = new RegionalCulture('Sunda', 'Indonesia', 'West Java');
// 4. Singletons and Private Constructor
class UniqueClass {
    // Defining Private Constructor
    constructor(name) {
        this.name = name;
    }
    // Defining the "new" method
    static getUnique() {
        if (UniqueClass.instance) {
            return UniqueClass.instance;
        }
        this.instance = new UniqueClass('Unique Thing');
        return this.instance;
    }
}
// Making Unique Class Instance
const unique = UniqueClass.getUnique();
// Implement an Interface to Class
class Wood {
    constructor(name) {
        this.name = name;
    }
    info() {
        console.log(`The ${this.name} wood is Non Living Thing`);
    }
}
// Create an Instance
const oak = new Wood('Oak Wood');
// Creating Class Implement Extended Interface
class Machine {
    constructor(name, onoff) {
        this.name = name;
        this.onoff = onoff;
    }
    info() {
        console.log(`This is can be On Off`);
    }
}
const bubut = new Machine('Bubut', 'Relay');
// Implement Interface as a Function
const addition = (a, b) => {
    return a + b;
};
class Testing {
    constructor(name) {
        this.name = name;
    }
}
const dave = new Testing('Dave');
console.log(dave);
