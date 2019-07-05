function Account() {
  this.balance = INITIAL_BALANCE;
}

const INITIAL_BALANCE = 0;

Account.prototype.viewBalance = function() {
  return this.balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};
