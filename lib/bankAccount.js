const Transaction = require('./transaction')
const Statement = require('./statement')

class BankAccount {
  constructor(injectedTransaction = Transaction, statement = new Statement) {
    this.balance = 0
    this.transaction = injectedTransaction
    this.statement = statement
  }


deposit(amount) {
  this.balance += amount
  const transaction = new this.transaction(amount, this.balance, true, new Date())
  this.statement.transactions.push(transaction)
}

withdraw(amount) {
  if(this.balance === 0) {
    throw('Error! Insufficient funds!')
  } else {
    this.balance -= amount
    const transaction = new this.transaction(amount, this.balance, false, new Date())
    this.statement.transactions.push(transaction)
  }
}

printStatement() {
  return this.statement.display()
}

}


module.exports = BankAccount