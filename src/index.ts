// classes are blueprints of objects
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    this.balance += amount;
  }
}

let account = new Account(1, "Ceci", 0);

account.deposit(100);
console.log(account instanceof Account);

// for Narrowing primitive types we use => typeof
// for Narrowing objects we use => instanceof
if (account instanceof Account) console.log(account);
