const BankAccount = require('../lib/bankAccount')
const Transaction = require('../lib/transaction')

describe('Bank Account', () => {

  it('Increases balance depositing money', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    
    expect(bankAccount.balance).toEqual(100)
  })

  it('Decreases balance withdrawing money ', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    bankAccount.withdraw(50)
    
    expect(bankAccount.balance).toEqual(50)
  })

  it('Throws an error withdrawing below 0', () => {
    const bankAccount = new BankAccount()
   
    expect(() => { bankAccount.withdraw(1) }).toThrow('Error! Insufficient funds!');
  })

  it('Creates a new transaction when depositing money', () => {
    const bankAccount = new BankAccount(transaction = Transaction)
    bankAccount.deposit(100)

    expect(bankAccount.transactions[0]).toEqual(
      {
        amount: 100,
        balance: 100,
        credit: true,
        date: new Date()
      })
    })
  
  it('Creates a new transaction when withdrawing money', () => {
    const bankAccount = new BankAccount(transaction = Transaction)
    bankAccount.deposit(100)
    bankAccount.withdraw(50)

    expect(bankAccount.transactions[1]).toEqual(
      {
        amount: 50,
        balance: 50,
        credit: false,
        date: new Date()
      })
    })
})