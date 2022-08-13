const Transaction = require('./transaction')

class BankAccount {
  constructor(transaction = Transaction) {
    this.balance = 0
    this.transactionClass = transaction
    this.transactions = []
  }


deposit(amount) {
  this.balance += amount
  const transaction = new this.transactionClass(amount, this.balance, true, new Date())
  this.transactions.push(transaction)
}

withdraw(amount) {
  if(this.balance === 0) {
    throw('Error! Insufficient funds!')
  } else {
    this.balance -= amount
    const transaction = new this.transactionClass(amount, this.balance, false, new Date())
    this.transactions.push(transaction)
  }
}

}


module.exports = BankAccount