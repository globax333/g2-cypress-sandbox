 // <reference types="cypress"/>
it("Locators CSS", () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');
    // Локатор по назві тегу
    cy.get('nav');

    // Локатор СSS по назві атрибуту
    cy.get('[placeholder]');

    // Локатор по назві атрибуту зі значенням
    cy.get('[placeholder="Email"]');

    // Пошук елемента по id
    cy.get('#query-btn');
    cy.get('[id="query-btn"]');

    // Пошук елементу за значенням класу
    cy.get('.btn-default');
    cy.get('[class="btn btn-default"]');
    cy.get('.btn-default.btn');

    cy.get('.nav.navbar-nav.pull-right');

    // Пошук елементу по назві тегу та назві атрибуту
    cy.get('input[placeholder]');

    // Пошук елементу по назві тегу та атрибуту зі значенням
    cy.get('input[placeholder="Email"]');

})

it.skip("Вивчення локаторів CSS на Rozetka", () => {
    cy.visit('https://rozetka.com.ua/');

    // пошук елементу за назвою тегу та двома атрибутами
    cy.get('div[class="tile__inner"][data-goods-id="347871891"]');

    // пошук елементу за його дочірніми елементами
    cy.get('rz-sidebar-fat-menu > div > ul > li');
})

it("Вивчення локаторів CSS на Rozetka", () => {
    cy.visit('https://automationteststore.com/');

    // пошук елементу за його дочірніми елементами
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12');

    // пошук по першій частині значення атрибуту
    cy.get('a[title^="BeneFit"]');

    // пошук по всьому значенню атрибута
    cy.get('a[title*="Girl"]');

    // пошук по останній частині значення атрибуту
    cy.get('a > img[src$=".jpg"]');
    
    // пошук першого елементу серед інших такого ж типу
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:first-of-type')

    // пошук першого елементу серед інших такого ж типу
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:last-of-type')

    // пошук елементу за номеро серед інших такого ж типу
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:nth-child(4)')

    // пошук елементу за текстом що міститься в середині тегу
    cy.get('a:contains("Skinsheen")')
})