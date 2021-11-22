// Basic Class

// Making a Class
class Person {
    // Defining Other Properties
    protected friends: string[] = [];

    // Defining Constructor
    constructor(public name: string, public age: number, protected readonly id: number) {}

    // Defining Method
    greeting(): void {
        console.log(`Hello my name is ${this.name}`)
    }
}

// Creating New Instance
const ihsan = new Person('Ihsan', 10, 320);