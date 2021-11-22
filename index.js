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
