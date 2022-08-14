const Statement = require('../lib/statement')
const Transaction = require('../lib/transaction')

describe ('Statement', () => {

  it('Has column headers', () => {
    const statement = new Statement;

    expect(statement.display()).toContain('date || credit || debit || balance')
  })

  it('Contains transaction date', () => {
    const statement = new Statement
    const transaction = new Transaction(100, 100, true);
    statement.transactions.push(transaction)
    
    expect(statement.display()).toContain(new Date().toLocaleDateString())
  })

  it('Contains credit amount', () => {
    const statement = new Statement
    const transaction = new Transaction(100, 100, true);
    statement.transactions.push(transaction)
    
    expect(statement.display()).toContain('100')
  })
  
  it('Contains debit amount', () => {
    const statement = new Statement
    const transaction1 = new Transaction(100, 100, true);
    const transaction2 = new Transaction(50, 50, false);
    statement.transactions.push(transaction1)
    statement.transactions.push(transaction2)
    
    expect(statement.display()).toContain('50')
  })
  
  it('Contains resulting balance after transaction', () => {
    const statement = new Statement
    const transaction1 = new Transaction(100, 100, true);
    const transaction2 = new Transaction(50, 50, false);
    const transaction3 = new Transaction(500, 550, true);
    statement.transactions.push(transaction1)
    statement.transactions.push(transaction2)
    statement.transactions.push(transaction3)
    
    expect(statement.display()).toContain('550')
  })

  })