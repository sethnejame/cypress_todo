describe("Input form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3030");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    const typedText = "Drink beer";

    cy.get(".new-todo")
      .type("Drink beer")
      .should("have.value", typedText);
  });

  describe('Form submission', () => {
    it.only('Adds a new todo on submit', () => {
      cy.get('.new-todo')
      .type('Buy eggs')
      .type('{enter}')
    })
  })
});
