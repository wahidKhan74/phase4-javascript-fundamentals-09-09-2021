// JavaScript class : It is added from es6 , as a new syntax to declare oop
class Person {
    // properties
    id;
    name;
    age;
    email;
    greetings;

    // constructor 
    constructor(id, name, age,email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // member function
    printData() {
        console.log("Hi user, "+this.name +" & your age is "+this.age);
    }
    greetings = function() {
        return "Hello";
    }
}

let person = new Person(10001,"John Smith",32,"john.smith@gmail.com");

console.log(person);
console.log(person.id);
console.log(person.name);

console.log(person.greetings());
person.printData();