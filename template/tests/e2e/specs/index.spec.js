describe('Testing Index', () => {
  it('Opening Homepage', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Hello.World')
  })
})
