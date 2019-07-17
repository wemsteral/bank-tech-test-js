const INITIAL_BALANCE = 0;

class Account {
  constructor() {
    this.balance = INITIAL_BALANCE;
  }

  viewBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
