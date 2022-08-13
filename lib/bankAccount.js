class BankAccount {
  constructor() {
    this.balance = 0
  }


deposit(amount) {
  this.balance += amount
}

withdraw(amount) {
  if(this.balance === 0) {
    throw('Error! Insufficient funds!')
  } else {
    this.balance -= amount
  }
}

}


module.exports = BankAccount