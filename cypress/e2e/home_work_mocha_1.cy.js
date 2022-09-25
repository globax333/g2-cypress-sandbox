
 it("Homework_1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.viewport(1920, 1080);
    cy.get('img[alt="Dark Theme"]').first().click();
    cy.get('span:contains("Forms")').click()
    cy.get('.menu-title.ng-tns-c141-11').first().click();
    cy.get('a[ng-reflect-centered="true"]').click();

 })



const params2 = [
    {email: ['emailtest@mail.com', 'em32434@mail.com'],
    expected_email: ['emailtest@mail.com','em32434@mail.com' ],
    password: ['test123 ', 'mokka123' ], 
    expected_password: ['test123 ', 'mokka123']}
]

params2.forEach(({email, expected_email, password, expected_password }) => {
    it('Check email and password fields on "Using the Grid" form ', () => {
        cy.get('#inputEmail1').type(email[0]); 
        cy.get('#inputEmail1').should('contain.value', expected_email[0]);
        cy.get('#inputPassword2').type(password[0]); 
        cy.get('#inputPassword2').should('contain.value', expected_password[0]);
        cy.get('#inputEmail1').clear().type(email[1]); 
        cy.get('#inputEmail1').should('contain.value', expected_email[1]);
        cy.get('#inputPassword2').clear().type(password[1]); 
        cy.get('#inputPassword2').should('contain.value', expected_password[1]);

    })
})














/*
const testfomr1 = (email, expected_email) =>
function() {


    cy.get('#inputEmail1').type(email); 
    cy.get('#inputEmail1').should('contain.value', expected_email);
}

it ('Email check ', testfomr1(email: "test@mailinator.com", expected_email: "test@mailinator.com" ));
*/





