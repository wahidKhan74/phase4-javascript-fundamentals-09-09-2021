// constructor
function Account(id, name, balance, email) {
    this.id= id;
    this.name = name;
    this.balance = balance;
    this.email = email;
}

 //modify Account prototype
 Account.prototype.state ="New York";
 Account.prototype.nationality ="American";

 Account.prototype.showBalance = function() {
     return this.balance;
 }


 let account1 = new Account(10001,"Mike Smith",4545656.67,"mike.smith@gmail.com");
 console.log(account1);

 // modifying object directly (add new property)
 let account2 = new Account(10002,"John Snow",4545656.67,"john.snow@gmail.com");
 account2.bankName ="Iron Bank";
 console.log(account2);

 // acccess prototype properties and methods
 console.log(account1.state);
 console.log(account1.nationality);
 console.log(account1.showBalance());