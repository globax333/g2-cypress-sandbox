// <reference types="cypress"/>
/*
const testParam = ({arg, expected}) => 
function() {
    cy.visit('https://google.com');
    cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]); 
    cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]); 
    cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]); 
}

it('first', testParam({arg: ['1', '2', '3'], expected: ['1', '2', '3']}));
//it('second', testParam({arg: '2', expected: '2'}));
//it('third', testParam({arg: '3', expected: '3'}));
 */

const params = [
    {arg: ['1','2','3'], expected: ['1', '2', '3']},
    {arg: ['dfgd','dfg','dfsg'], expected: ['dfgd', 'dfg', 'dfsg']},
    {arg: ['1dsfsdf','2dsfds','3dsfsd'], expected: ['1dsfsdf', '2dsfds', '3dsfsd']}

]
params.forEach(({arg, expected}) => {
    it (`Type ${arg} in search field`, () => {
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]); 
        cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]); 
        cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]);
    })

}) 