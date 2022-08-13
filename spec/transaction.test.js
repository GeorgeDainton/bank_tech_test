const Transaction = require('../lib/transaction')

describe ('Transaction', () => {

  it('Creates a record of a transaction', () => {
    const transaction = new Transaction(100);

    expect(transaction.amount).toEqual(100)
  })
})