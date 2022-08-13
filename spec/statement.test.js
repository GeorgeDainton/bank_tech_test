const Statement = require('../lib/statement')

describe ('Statement', () => {
  
  it('Has column headers', () => {
    const statement = new Statement;

    expect(statement.display()).toContain('date || credit || debit || balance')
  })
})