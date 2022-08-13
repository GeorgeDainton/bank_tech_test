const BankAccount = require('../lib/bankAccount')

describe('Bank Account', () => {

  it('Depositing money increases balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    expect(bankAccount.balance).toEqual(100)
  })
})