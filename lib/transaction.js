class Transaction {
  constructor(amount, balance, credit) {
    this.amount = amount
    this.balance = balance
    this.credit = credit
    this.date = new Date().toLocaleDateString()
  }
}

module.exports = Transaction