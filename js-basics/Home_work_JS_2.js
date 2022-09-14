// # 1

/* Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних) */ 

    
/*
    
    const hamburger = 4,
    fries = 1;

if(hamburger >= 4 && fries >= 1) {
console.log('Ми поїли');}
else   { (hamburger < 4 && fries < 1)
console.log(' Ми йдемо в інше кафе') } 

*/

const foodFunc = () => {
    const hamburger = 4,
    fries = 1;

    if(hamburger >= 4 && fries >= 1){
        console.log('Ми поїли');}
        else   { (hamburger < 4 && fries < 1)
            console.log(' Ми йдемо в інше кафе') }
}
foodFunc();


// # 2

/* Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
Результат виводити в консоль. */

/*

const price = 1850;
if(price >= 1000 && price <= 1900) {
console.log('значення ціни товару між 1000 та 1900 включно');}

*/
 
const PriceFunc = () => {
    const price = 1850;
    if(price >= 1000 && price <= 1900)
    console.log('значення ціни товару між 1000 та 1900 включно');
}
PriceFunc();


// # 3

/* Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
Результат виводити в консоль. */

/*

const price1 = 500;
if(price1 < 1000 || price1 > 1900) {
   console.log('ціна товару не знаходиться між 1000 та 1900 включно');}

const price2 = 2000;
if(price2 != 1000 || price2 <= 999 || price2 != 1900 || price2 >= 1901 ) {
    console.log('ціна товару не знаходиться між 1000 та 1900 включно');} 
    
*/

const Price1Func = () => {
        const price1 = 500;
    if(price1 < 1000 || price1 > 1900)
    console.log('ціна товару не знаходиться між 1000 та 1900 включно');
}
Price1Func();

const Price1Func2 = () => {
    const price2 = 500;
if(price2 != 1000 || price2 <= 999 || price2 != 1900 || price2 >= 1901 )
console.log('ціна товару не знаходиться між 1000 та 1900 включно');
}
Price1Func2();


// # 4

/* За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
Результат виводити в консоль. */

/* 

let season = 4;

if( season === 1) {
console.log('winter');
} else if ( season === 2) {
console.log('spring');
}
else if ( season === 3) {
console.log('summer');
}
else if ( season === 4) {
console.log('autumn'); } 

*/


const SeasonFunc = () => {
    let season =4;
    if( season === 1) {
        console.log('winter');
        } else if ( season === 2) {
        console.log('spring');
        }
        else if ( season === 3) {
        console.log('summer');
        }
        else if ( season === 4) {
        console.log('autumn');
        }
}
SeasonFunc();

// # 5

/*  Задано 3 числа (a, b, c), які не рівні між собою.
Визначити середнє мід цими трьома числами
(не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
Використати вкладені оператори if
Результат виводити в консоль. */

/*
let a = 2,
b = 1,
c = 3;

    if ((a - b) * (c - a) >= 0) {              // a >= b and a <= c OR a <= b and a >= c
        console.log(a);
    } else if ((b - a) * (c - b) >= 0) {       // b >= a and b <= c OR b <= a and b >= c
        console.log(b);
    } else {
        console.log(c);
    }
*/

const MiddleNumFUnc = () => {
    let a = 2,
    b = 1,
    c = 3;
    if ((a - b) * (c - a) >= 0) {              
        console.log(a);
    } else if ((b - a) * (c - b) >= 0) {       
        console.log(b);
    } else {
        console.log(c);
    }
}
MiddleNumFUnc();



// # 6
/* Задано номер дня тижня.
За заданим номером вивести назву дня тижня використовуючи switch.
Результат виводити в консоль. */

/*
let week_number = 4;

switch(week_number) {
case 1:
    console.log('Monday')
    break;
case 2:
    console.log('Tuesday')
    break;
case 3:
    console.log('Wednesday')
     break;
case 4:
     console.log('Thursday')
    break;
case 5:
    console.log('Friday')
    break;
case 6:
    console.log('Saturday')
    break;
case 7:
    console.log('Sunday')
    break;
}
*/


const WeekFunc = () => {
    let week_number = 4;
    switch(week_number) {
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
             break;
        case 4:
             console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;
        }
}
WeekFunc();

// # 7 

/* За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
Математичні операції для обчислення: "+", "-", "*", "/".
Результат виводити в консоль. */ 

/* 

let math = 4,
    a1 = 2,
    b1 = 4;
    c = 0;
switch(math) {
case 1: c = a1 + b1;
break;
case 2: c = a1 - b1;
break;
case 3: c = a1 / b1;
break;
case 4: c = a1 * b1;
break;
}
console.log(c);

*/

const MathFunc = () => {
    let math = 4,
    a1 = 2,
    b1 = 4;
    c = 0;
switch(math) {
case 1: c = a1 + b1;
break;
case 2: c = a1 - b1;
break;
case 3: c = a1 / b1;
break;
case 4: c = a1 * b1;
break;
}
console.log(c);
}
MathFunc();


// # 8

// Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

/*
let sometext = "Hello";
let result = sometext.replace("Hello", 'hll');
console.log(result);

*/
const TextFunc = () => {
    let sometext = "Hello";
    let result = sometext.replace("Hello", 'hll');
    console.log(result);
}
TextFunc();


// # 9

/*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
так щоб в консоль виводився результат обчислень з правильним закнченням.
Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.
Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

/*-----------------------немає------рішення---задачі---------------------------------*/