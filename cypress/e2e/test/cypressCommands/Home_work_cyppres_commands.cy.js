///<reference types="cypress"/>
/*
#домашка на 4.10.22
Написати параметризований тест. 
Кроки:
1. Відкрити https://sanitarskyi-ngx-admin.herokuapp.com/
2. Клікнути на пункт меню Modal & Overlays
3. Клікнути на підпункт Toastr
4. Вибрати позицію тосту
5. Заповнити title довільним текстом
6. заповнити content довільним текстом
7. Обрати тип тоста
8. Клікнути на кнопку "Show toast"
Очікуваний результат: тост містить текст, що був ведений в тайтл та контент поля, +
знаходиться у місці, відповідному до обраної позиції,
має колір+ та містить іконку відповідні до обраного типу тоста.

Тест має містити метод before() з відповідними і необхідними кроками в ньому.  
Приклад аргументів, що передаються в тест:

args: {
      position: 'top-right',
      title: 'test title',
      content: 'test content',
      time: '1000',
      type: 'primary'
    }

Приклад очікуваного результату, котрий передається теж в якості аргументу:

expected: {
      icon: 'email',
      title: 'test title',
      content: 'test content',
      color: ' ... ',
      position: ...
    }

color - містить значення rgb
position - може бути обʼєктом з усіма неохідними параметрами для визначення фактичної позиції тоста.

Перевірити 4 кейса, кожний кейс має містити унікальну позицію та унікальний тип тоста
*/

/* 

beforeEach(() => {
   
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.viewport(1920, 1080);
    })

    

        describe('TEST SUIT', () => {
        it('CASE 1', () => {
        cy.get('img[alt="Dark Theme"]').first().click();
        cy.get('.menu-title.ng-tns-c141-19').click({force: true});
        cy.get('.menu-title.ng-tns-c141-23').click();
        cy.get('.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click();

        cy.get('nb-select.mat-ripple.position-select.appearance-outline.size-medium.status-basic.shape-rectangle.nb-transition button.select-button')
        .click()
        cy.get('.mat-ripple.nb-transition.ng-star-inserted.selected')
        .click()
        cy.get('[ng-reflect-model="HI there!"]')
        .click()
        .clear()
        .type('some_value')
        cy.get('[ng-reflect-model="I\'m cool toaster!"]')
        .click()
        .clear()
        .type('anoher_value')
        cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]')
        .click()
        cy.get('[class="mat-ripple selected nb-transition ng-star-inserted"]')
        .click
        cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]')
        .click()
       
         })
        })


        */


        const params = [
          {position: ['top-right', ],
          title: ['value_title_case_1', 'value_title_case_2', 'value_title_case_3', 'value_title_case_4'],
          content: ['value_case_1', 'value_case_2', 'value_case_3', 'value_case_4' ], 
          time: ['10'],
          type: ['primary'],
          color: [51, 102, 255],
        }]


        beforeEach(() => {
   
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
          cy.viewport(1920, 1080);
      })
  
      
  
          describe('TEST SUIT', () => {
          params.forEach(({position, title, content, time, type, color }) => {
            it('CASE 1', () => {
          cy.get('img[alt="Dark Theme"]').first().click();
          cy.get('.menu-title.ng-tns-c141-19').click({force: true});
          cy.get('.menu-title.ng-tns-c141-23').click();
          cy.get('.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click();
  
          cy.get('nb-select.mat-ripple.position-select.appearance-outline.size-medium.status-basic.shape-rectangle.nb-transition button.select-button')
          .click()
          cy.get('.mat-ripple.nb-transition.ng-star-inserted.selected')
          .click()
          cy.get('[ng-reflect-model="HI there!"]')
          .click()
          .clear()
          .type(title[0]) 
          cy.get('[ng-reflect-model="I\'m cool toaster!"]')
          .click()
          .clear()
          .type(content[0])
          cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]')
          .click()
          cy.get('[class="mat-ripple selected nb-transition ng-star-inserted"]')
          .click
          cy.get('[class="size-medium status-basic shape-rectangle ng-untouched ng-pristine ng-valid nb-transition"]')
          .clear()
          .type(time[0])
          cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]')
          .click()

          cy.get('[class="ng-tns-c209-54 ng-trigger ng-trigger-fadeIn status-primary destroy-by-click has-icon custom-icon ng-star-inserted"]').then(field2 => {
            expect(field2).to.have.css('background-color','rgb(51, 102, 255)')
        
           })
          cy.get('nb-toast div [class="title subtitle"]').then(field1 => {
            expect(field1).to.contain(title[0]);
          })
          cy.get('nb-toast div [class="message"]').then(field2 => {
            expect(field2).to.contain(content[0]);
          })

           })
          })  
        })
        