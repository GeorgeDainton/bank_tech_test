const BankAccount = require('../lib/bankAccount')

describe('Bank Account', () => {

  it('Depositing money increases balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    
    expect(bankAccount.balance).toEqual(100)
  })

  it('Withdrawing money decreases balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    bankAccount.withdraw(50)
    
    expect(bankAccount.balance).toEqual(50)
  })

  it('Withdrawing below 0 throws an error', () => {
    const bankAccount = new BankAccount()
   
    expect(() => { bankAccount.withdraw(1) }).toThrow('Error! Insufficient funds!');
  })
})