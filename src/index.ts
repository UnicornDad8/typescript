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

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  /*
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");

    this._balance = value;
  }
  */
}

let account = new Account(1, "Ceci", 0);

account.deposit(100);
console.log(account.balance);
