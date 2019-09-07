describe('Input form', () => {
  it('focuses input on load', () => {
    cy.visit('http://localhost:3030')

    cy.focused()
      .should('have.class', 'new-todo')
  })

  it.only('accepts input', () => {
    const typedText = 'Drink beer'
    cy.visit('http://localhost:3030')

    cy.get('.new-todo')
      .type('Drink beer')
      .should('have.value', typedText)
  })
})