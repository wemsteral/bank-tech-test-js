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

    // How to test for errors - take note below!

    it("doesnt allow balance to go below 0", function() {
      expect(function() {
        account.withdraw(50);
      }).toThrow();
    });
  });
});
