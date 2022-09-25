// <reference types="cypress"/>
it("Google search", () => {
    cy.visit('https://google.com');
    cy.get('input.gLFyf.gsfi').type('cypress');
    cy.get('div.wM6W7d').first().click();
})