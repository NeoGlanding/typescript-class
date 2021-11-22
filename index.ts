// 1. Basic Class

// Making a Class
class Person {
    // Defining Other Properties
    protected friends: string[] = [];

    // Defining Constructor
    constructor(public name: string, public age: number, protected readonly id: number) {}

    // Defining Method
    greeting(): void {
        console.log(`Hello my name is ${this.name}, I'm ${this.age} years old`)
    }
}

// Creating New Instance
const ihsan = new Person('Ihsan', 10, 320);


// 2. Inheritance
class Student extends Person {
    // Defining Constructor
    constructor(name: string, age: number, id: number, public school: string,public grade: number, private studentId: number) {
        super(name, age, id)
    }

    // Polymorphism
    greeting(): void {
        console.log(`Hello my name is ${this.name}, I'm ${this.age} years old, Now I'm Schooling in ${this.grade} at ${this.school}`)
    }

    // Setter
    set setStudentId(id: number) {
        this.studentId = id
    }

    // Getter
    get getStudentId() {
        return this.studentId
    }
}

const alfian = new Student('Alfian', 13, 3203, 'SMKN 1 Cibinong', 10, 20023);