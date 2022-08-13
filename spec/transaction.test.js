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
})