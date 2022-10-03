

it('Search', () => {
    cy.visit('http://localhost:8080/commands/actions');
    
    cy.get('#email1', {timeout: 300})
    .type('dfsd')   // введення
    .should('have.value', 'dfsd')
 
    cy.get('#email1')
    .clear()
    .type('S{leftarrow}E{leftarrow}T{rightarrow}T{rightarrow}', {delay: 100}) /// можна імітувати введеня клавіш + встановлювати затримку
    .type('{selectAll} {backspace}')  //// + становлювати затримку

    cy.get('textarea[disabled="disabled"]')
    .type('dsfsdf', {force: true});

    cy.get('#password1')
    .focus()                //// Фокус на полі світиться оранжевим
    .prev()
    .should('have.attr', 'style')
    .and('eq', 'color: orange;')

    /*cy.get('#couponCode1')
    .type('some text')
    .closest('form')  /// найближчий елемент
    .submit();    ///відправка форми
*/
    cy.get('div.well')
    .eq(4)
    .should('not.contain', 'Your form has been submitted!')
    .find('#couponCode1')
    .type('some text')
    .closest('form')
    .submit()
    .siblings()
    .should('contain', 'Your form has been submitted!');

    cy.get('#action-canvas').click(125, 125)
    cy.get('#action-canvas').click(15, 15)

    cy.get('.label.label-primary').click( {multiple: true})

    cy.get('.btn.btn-lg.btn-primary')
    .click({force: true})

    cy.get('.action-checkboxes [value="checkbox1"]')
    .should('be.not.checked')
    .check()
    .should('be.checked')

    cy.get('.action-checkboxes [value="checkbox2"]')
    .should('be.disabled')
    .check({force: true})
    .should('be.checked', 'disabled')

    })
    