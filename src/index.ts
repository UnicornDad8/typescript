// classes are blueprints of objects
class Account {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Ceci", 0);

account.deposit(100);
console.log(account.getBalance());
