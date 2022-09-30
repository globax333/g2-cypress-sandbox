it("Locators CSS", () => {
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1')
    .type('dsfsdf')
    .should('have.value', 'dsfsdf' );
    
    cy.get('.action-form')
    .type('dfs')
    .submit()
    .siblings()
    .should('contain', 'Your form has been submitted!');
    
})