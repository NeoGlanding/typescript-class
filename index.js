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
    getToKnow() {
        console.log(`This is ${this.name} Regional Culture, This culture exist in ${this.country}, more depth in ${this.region}`);
    }
}
const sunda = new RegionalCulture('Sunda', 'Indonesia', 'West Java');
