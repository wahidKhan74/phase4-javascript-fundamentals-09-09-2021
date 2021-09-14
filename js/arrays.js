let listOfNames = ["John", "Mike", "David",34545, true,"William"];


console.log(listOfNames);
//access data via index
console.log(listOfNames[3]);
console.log(listOfNames[5]);

// push : allows to add data at the end of an array
listOfNames.push("Marry");

// pop : allows to remove data from the end of an array
listOfNames.pop();

// unshift : add data in the begining of an array
listOfNames.unshift("Mr");

// shift : remove data in the begining of an array
listOfNames.shift();