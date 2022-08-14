const Transaction = require('./transaction')

class Statement {
  constructor() {
    this.transactions = []
  }

  display() {
    let header = 'date || credit || debit || balance\n'
    for(let i = 0 ; i < this.transactions.length ; i++)
      if(this.transactions[i].credit) {
        header += this.transactions[i].date + '||' + this.transactions[i].amount + '||        ' + this.transactions[i].balance
      } else {
        header += this.transactions[i].date + '||' +  '||        ' + this.transactions[i].amount + '||' + this.transactions[i].balance
      }
    return header
  }
}

module.exports = Statement