"use strict";

describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("has an initial balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

  describe("deposit", function() {
    it("adds to chosen amount to balance", function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
  });

  describe("withdraw", function() {
    it("subtracts chosen amount from balance", function() {
      account.deposit(100);
      account.withdraw(50);
      expect(account.balance).toEqual(50);
    });
  });
});
