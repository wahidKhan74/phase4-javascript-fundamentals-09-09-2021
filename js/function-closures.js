// Closures : Nested Function
// closures has access to three different scope chain.
// 1. inner variable  2.outer varaible  3. global varibles

let firstName = "John";  // global variable

function fullNameMaker() {
    
    let middleName = "William";  // local varaible or function level varaible or outer varaible.

    // nested function  or closures
    function combine() {
        let lastName ="Smith";  //local varaible or inner varaible
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine();
}

let response = fullNameMaker();
console.log(response);