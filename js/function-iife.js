// Imediately invoked function expression. -> self executing function
(function(){
    console.log("This is a IIFE (Imediately invoked function expression).");
})();


(function(){
    //logic
    let username = "John Smith";
    let age= 30;
    console.log(username,age);
    //nested function
    function display(name) {
        console.log(`Hello user, ${name}`);
    }
    display(username);  // function calling
})();