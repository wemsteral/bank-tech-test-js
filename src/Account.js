"use strict";

const INITIAL_BALANCE = 0;

class Account {
  constructor() {
    this._balance = INITIAL_BALANCE;
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance - amount < 0) {
      throw new Error("Insufficient Funds");
    } else {
      this._balance -= amount;
    }
  }
}
