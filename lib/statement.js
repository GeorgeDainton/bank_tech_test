class Statement {
  constructor() {
    this.transactions = []
  }

  display() {
    const header = 'date || credit || debit || balance'
    return header
  }
}

module.exports = Statement