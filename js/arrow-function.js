// anonymous function expresssion.
let makeData = function () {
    console.log("Hello, anonymous function expression!");
}

// arrow function
let displayData = () => {
    console.log("Hello, Arrow function expression!");
}

// arrow function
let oneLineFn = () => console.log("Hello, Single Arrow function expression!");

let ageCalculator = (name, yearOfBirth) => console.log(`Hi ${name} and your age is ${2021-yearOfBirth}`);


makeData();
displayData();
oneLineFn();

ageCalculator("John Snow",1990);
ageCalculator("Marry Snow",1890);
ageCalculator("Arria Snow",1998);