///<reference types="cypress"/>

it('quering elements', () => {
    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#query-btn').should('contain', 'Button');

    cy.get('.query-list').contains('bananans').should('have.class', 'third');
    
    cy.contains('bannanas').should('have.class', 'third')

    cy.contains('li', 'bananas').should('have.class', 'third');

    cy.get('li:contains("bananas")').should('have.class', 'third');

    cy.get('.query-form').within(() => {
        cy.get('#inputEmail').should('exist');
        cy.get('#inputPassword').should('exist');

        cy.get('')
    })
    cy.root().should('contain', 'apples');

    })

    it('commands to find elements', () => {

        cy.visit('http://localhost:8080/commands/Traversal')
        cy.get('ol.traversal-breadcrumb breadcrumb').children('.active');

        cy.get('.travelsar-badge').closest('ul').should('have.class', 'list-group');

        cy.contains


    })