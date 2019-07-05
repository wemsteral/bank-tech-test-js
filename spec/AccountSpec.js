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
    it("responds to .deposit()", function() {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
  });
});
