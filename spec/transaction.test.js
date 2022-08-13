const Transaction = require('../lib/transaction')

describe ('Transaction', () => {

  it('Initializes with an amount', () => {
    const transaction = new Transaction(100, 100);

    expect(transaction.amount).toEqual(100)
  })

  it('Initializes with an amount', () => {
    const transaction = new Transaction(100, 100);

    expect(transaction.balance).toEqual(100)
  })
  
  it('Initializes with a credit or debit status', () => {
    const transaction = new Transaction(100, 100, true);

    expect(transaction.credit).toEqual(true)
  })
  
  it('Initializes with a date', () => {
    const transaction = new Transaction(100, 100, true);

    expect(transaction.date).toEqual(new Date().toLocaleDateString())
  })
})