// non parametrised constructor
function Person(){ };

//one parameter constructor
function Student(name){
    this.name = name;
}

// multi parametrised constructor
function Account(id, name, balance, email){
   this.id= id;
   this.name = name;
   this.balance = balance;
   this.email = email;
}

// create object
let person = new Person();
console.log(person);

// create student object
let student = new Student("Mike Smith");
let student2 = new Student("Marry Smith");
console.log(student);
console.log(student2);

// create student object
let account1 = new Account(10001,"Mike Smith",4545656.67,"mike.smith@gmail.com");
let account2 = new Account(10002,"John Snow",9845656.67,"john.snow@gmail.com");
let account3 = new Account(10001,"Dav Miler",1235656.67,"david.miller@gmail.com");
console.log(account1);
console.log(account2);
console.log(account3);
