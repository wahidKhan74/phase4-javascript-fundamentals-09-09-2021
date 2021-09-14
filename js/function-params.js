
var maker = function(name,age){
    //logic
    console.log(`Hello user, ${name} and your age is ${age}`);
}

//object
var user =  {
    name:"John",
    age:20,
    email:"john@gmail.com"
}

maker("John Smith", 32);
maker();
maker("John Smith");

maker(3445,345345);

//call function with object.
maker(user);