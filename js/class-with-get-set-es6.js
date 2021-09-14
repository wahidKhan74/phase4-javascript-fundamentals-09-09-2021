// JavaScript class : It is added from es6 , as a new syntax to declare oop
class Person {
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

    // es6 syntax for get & set method ( for access method as property)
    get Name() {
        return this.name;
    }
    get Id() {
        return this.id;
    }
    set Id(id){
        this.id = id;
    }
    set Name(name){
        this.name = name;
    }
}

let person = new Person(10001,"John Smith",32,"john.smith@gmail.com");

console.log(person);
console.log(person.id);
console.log(person.name);

// call member function
console.log(person.greetings());
person.printData();

// call set and get
person.Name="John Snow";
person.Id = 1010101010;
person.nationility ="US"

console.log("The Name : " + person.Name);
console.log("The Id : " + person.Id);

