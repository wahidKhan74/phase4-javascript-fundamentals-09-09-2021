// function expression it is a syntax to declare function with varaible assignment
// 1. labeled function expression     2. anonymous function expression
// var identifier = fName() { // body }


// function decleration syntax
function showData(){
    console.log("Hello, function decleration !");
}

// labeled function expression
let printData = function printFn(){
    console.log("Hello, labeled function expression!");
}

// anonymous function expresssion.
let makeData = function () {
    console.log("Hello, anonymous function expression!");
}

// function expresssion with parameter.
let buildData = function (name,age,decription) {
    console.log("Hello, anonymous function expression with parameter !");
    console.log(`Hello user, ${name}, your age is ${age} and you are ${decription}`);
}

showData();
printData();
makeData();
buildData("John Snow",30,"Canadian");
buildData("Marry Snow",30,"Indian");