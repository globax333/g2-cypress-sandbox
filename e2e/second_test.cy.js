it("Homework_1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.viewport(1920, 1080);
    cy.get('img[alt="Dark Theme"]').first().click();
    cy.get('.ng-tns-c141-9.ng-star-inserted').first().click();
    cy.get('.menu-title.ng-tns-c141-11').first().click();
    cy.get('a[ng-reflect-centered="true"]').first().click();

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');


    //let usingTheGridForm = cy.contains('nb-card', 'Using the Grid');

    //usingTheGridForm.find('[for="inputEmail1"]').should('contain', 'Email');
    //usingTheGridForm.find('[for="inputPassword2"]').should('contain', 'Password');


    cy.contains('nb-card', 'Using the Grid').then((form) => {
        form.find('[for="inputEmail1"]');
        form.find('[for="inputPassword2"]');
    })

})