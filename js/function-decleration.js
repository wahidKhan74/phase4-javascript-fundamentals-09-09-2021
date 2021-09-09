// syntax
// function functionName() {}

// non parametrised function.
function showMessage() {
    console.log("Hello user, welcome to JavaScript !");
}

// one parameter function
function displayMessage(name) {
    console.log("Hello, "+ name + " welcome to JavaScript !");
}

// multi parameter function
function fetchContent(name, age, gender) {
    console.log(`Hello, ${name} your age is ${age}, and your gender is ${gender} .`);
}

// default pararmeter function
function getContent(name="New User",phonenumber="1010101010") {
    console.log(`Hello user, ${name} your phone number is ${phonenumber} .`);
}

showMessage();
displayMessage("Mike Smith");  // pass argument as string
displayMessage(); // pass non argument  => name = undefined
displayMessage(123234324); // pass num,ber argument

fetchContent("Mike Smith",32,"male");

getContent("Mike Smith",9898989898);
getContent();
getContent("Mike Smith");
// showMessage();
// showMessage();