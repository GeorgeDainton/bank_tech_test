const Transaction = require('./transaction')

class BankAccount {
  constructor(injectedTransaction = Transaction) {
    this.balance = 0
    this.transaction = injectedTransaction
    this.transactions = []
  }


deposit(amount) {
  this.balance += amount
  const transaction = new this.transaction(amount, this.balance, true, new Date())
  this.transactions.push(transaction)
}

withdraw(amount) {
  if(this.balance === 0) {
    throw('Error! Insufficient funds!')
  } else {
    this.balance -= amount
    const transaction = new this.transaction(amount, this.balance, false, new Date())
    this.transactions.push(transaction)
  }
}

}


module.exports = BankAccount