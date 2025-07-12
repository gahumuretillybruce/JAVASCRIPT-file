// FIVE WAYS OF CREATING OBJECTS IN JAVASCRIPT

// 1. plain object literal
// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// 2. object.create() method
let animal = Object.create({
    sound: "animal sound",
    makeSound: function() {
        console.log(`The ${this.species} goes ${this.sound}`);
    }

         //OR

    // bark: function() {
    //     console.log("Woof! Woof!");
    // }
});

const dog = Object.create(animal);
dog.sound = "woof";
dog.makeSound();

console.log(dog); // Output: woof


// 3. constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1= new Person("Alice", 25);
const person2 = new Person("Bob", 28);
const person3 = new Person("Charlie", 22);
const person4 = new Person("David", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 28 years old.
person3.greet(); // Output: Hello, my name is Charlie and I am 22 years old.
person4.greet(); // Output: Hello, my name is David and I am 30 years old.

// 4. class syntax (ES6)
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021); 
const car3 = new Car("Ford", "Mustang", 2022);
const car4 = new Car("Chevrolet", "Malibu", 2023);  
car1.start(); // Output: Car: Toyota Camry, Year: 2020
car2.start(); // Output: Car: Honda Civic, Year: 2021

// 5. factory function
function createproduct(name, price) {
    return {
        name: name,
        price: price,
        displayInfo: function() {
            console.log(`Title: ${this.name}, Price: $${this.price}`);
        }
    };
}

const product1 = createproduct("Laptop", 999);
const product2 = createproduct("Smartphone", 799);
const product3 = createproduct("Tablet", 499);
const product4 = createproduct("Smartwatch", 199);
product1.displayInfo(); // Output: Title: Laptop, Price: $999
product2.displayInfo(); // Output: Title: Smartphone, Price: $799


//encapsulation helps to hide the internal state of an object and only expose what is necessary.
// It allows you to control access to the object's properties and methods, ensuring that they are used

//inheritance 
// allows one class to inherit properties and methods from another class, promoting code reuse and establishing a hierarchy.
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows you to

class Animal{
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "Dog");
    }

    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

let rexy = new Dog("Rex");
rexy.makeSound(); // Output: Rex barks

class Cat extends Animal {
    constructor(breed) {
        super(breed, "Cat"); // 
    }

    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

//polymorphism
//methods can be overridden in derived classes, allowing for different implementations of the same method.
//used in decision-making processes, where different classes can provide their own implementations of a method while maintaining the same interface.
class User {
    login() {
        console.log("User logged in");
    }
}

class Host{
    login() {
        console.log("Host logged in with additional privileges");
    }
}
let newHost = new Host();
newHost.login(); // Output: Host logged in with additional privileges

//abstraction
//hides complex implementation details and exposes only the necessary parts of an object or class.
// It allows you to create a simplified interface for interacting with objects, making it easier to use
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }

    stop() {
        console.log(`Stopping the ${this.make} ${this.model}`);
    }
}

