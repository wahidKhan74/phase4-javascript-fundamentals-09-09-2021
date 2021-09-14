class Account {
    constructor(id, name, email, balance) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.balance = balance;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    showAccount() {
        console.log(`The user , ${this.name} with account id ${this.id} and balance ${this.balance}`);
    }
}
let account = new Account(1000001, "John Smith", "joh.smith@gmail.com", 9897875.45);
console.log(account);
console.log(account.id);
account.Id = 20000111;
console.log(account.Id);
account.showAccount();
