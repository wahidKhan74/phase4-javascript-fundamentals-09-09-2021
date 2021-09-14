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

    // get & set
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }

    setName(name){
        this.name = name;
    }
    setId(id){
        this.id = id;
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
person.setName("John Snow");
person.setId(1010101010);

console.log("The Name : " + person.getName());
console.log("The Id : " + person.getId());

