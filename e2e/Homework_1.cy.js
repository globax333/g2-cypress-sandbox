 /// <reference types="cypress"/>
it("Homework_1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.viewport(1920, 1080);
    cy.get('img[alt="Dark Theme"]').first().click();
    cy.get('.ng-tns-c141-9.ng-star-inserted').first().click();
    cy.get('.menu-title.ng-tns-c141-11').first().click();
    cy.get('a[ng-reflect-centered="true"]').first().click();

// Inline Form
    cy.get('input[placeholder="Jane Doe"]').type('testUserName');
    cy.get('nb-card-body > form > input[placeholder="Email"]').type('test@mail.com');
    cy.get('form > nb-checkbox > label > span[class="custom-checkbox"]').first().click();
    cy.get('nb-card-body > form > button[type="Submit"][ng-reflect-status="primary"]');


// Using the Grid
    cy.get('#inputEmail1').type('New_test_email'); 
    cy.get('#inputPassword2').type('new_password'); 
    cy.get('nb-radio > label > span:contains("Option 1")').first().click();
    cy.get('nb-radio > label > span:contains("Option 2")').first().click();
    cy.get('nb-radio > label > span:contains("Disabled Option")').first().click();
    cy.get('div > button:contains("Sign in")[status="primary"]')

// Basic form
    cy.get('input[id="exampleInputEmail1"]').type('test@mail.com');
    cy.get('#exampleInputPassword1').type('testpassword');
    cy.get('span:contains("Check me out")').first().click();
    cy.get('button:contains("Submit")[status="danger"]')

// Form without labels
    cy.get('input[placeholder="Recipients"]').type('test_name');
    cy.get('input[placeholder="Subject"]').type('test_test');
    cy.get('textarea[placeholder="Message"]').type('test_text');
    cy.get('button[ng-reflect-status="success"][type="submit"]');

// Block form
    cy.get('#inputFirstName').type('test_First_name');
    cy.get('#inputLastName').type('test_Last_name');
    cy.get('input[id="inputEmail"]').type('test_email@test.com');
    cy.get('#inputWebsite').type('www.test.com');
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition');

// Horizontal form
    cy.get('#inputEmail3').type('test_email');
    cy.get('#inputPassword3').type('test_password');
    cy.get('nb-card div span[class="custom-checkbox"]').first().click();
    cy.get('button[ng-reflect-status="warning"][status="warning"]');

})