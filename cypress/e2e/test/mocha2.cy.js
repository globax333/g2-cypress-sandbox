// <reference types="cypress"/>

//before

beforeEach(() => {
    cy.visit('https://google.com');
})

/*after(() => {
    cy.log('Text after');
})
afterEach(() => {
    cy.log('Text for afterEach')
})
*/

describe('Test suit google', () => {

describe('Positive tests', () => {
    it("Google search 1",  () => {
    cy.get('input.gLFyf.gsfi').clear().type('cypress');
  
})

    it("Google search 2", () => {

    cy.get('input.gLFyf.gsfi').clear().type('cypress');

})

    it("Google search 3", {retries: 2 }, () => {
 
    cy.get('input.gLFyf.gsfi1').clear().type('cypress');
  
})

    it("Google search 4", () => {
        this.re(3)
 
    cy.get('input.gLFyf.gsf1i').clear().type('cypress');

})
})

describe('Negative tests', () => {
    it("Google search 1", () => {

    cy.get('input.gLFyf.gsfi').clear().type('cypress');
  
})

    it("Google search 2", () => {

    cy.get('input.gLFyf.gsfi').clear().type('cypress');

})

    it("Google search 3", () => {

    cy.get('input.gLFyf.gsfi').clear().type('cypress');
  
})

    it("Google search 4", () => {
 
    cy.get('input.gLFyf.gsfi').clear().type('cypress');

})
})
})

