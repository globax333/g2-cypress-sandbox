let a = 5;
let b = 3;
let c;
c = a + b;
console.log(c);

////// some code


a = 8;
b = 12;

console.log(c);

// Обявили функцію
function sum(a, b){
    let c = a + b;
    console.log(c);

}
// Викликаємо функцію

let d = 1;
    f = 3;
sum(3,10);
sum(d, f);

// Іменована функція

function sum2(a, b){
    let c = a + b;
    return c;
}

console.log(sum2(3, 10));

let num1 = 1;
let num2 = sum2(3, 10);

console.log(num1 + sum2(3, 10));

function one(a, b){
    let c = a + b;
    return c;
}
/// Анонімна функція
const anonimFunc = function (a, b){
    let c = a + b;
    return c;
}
console.log(anonimFunc(1, 2));

// Cтрілочна функція
const arrowFunc = (a, b) => {
    let c = a + b;
    return c;
    let r = 0 /// Код після return не виконуватиметься
}
console.log(arrowFunc(1, 2))

const funcWithDefaulsValue = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaulsValue(2, 5))
console.log(funcWithDefaulsValue(2))

const playWithReturnFunc = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i === 6) {
            return /// Код після return не виконуватиметься
        }
    }
}
playWithReturnFunc();


console.log(Date());

const myRequestWithDate = (field1, addedAt = Date()) => {

    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = addedAt;
    
    return requestBody;
}

console.log(myRequestWithDate(filed1 = 'qfsd', addedAt = 1231132));
console.log(myRequestWithDate('qfsd', 'sdfsdfsd'));

console.log(1)

function someFunc(){
    console.log('2');
}

setTimeout(someFunc, 5000) /// Затримка для виконання функції в 5 сек
console.log(3)

function first(){
     setTimeout(function(){
        console.log('first');
    }, 3000)
}

function second(){
    console.log('Second');
}
first();
second();

function someFunctionWithCallback(parametr1, callbackFunc){
    console.log(`Here is my param1 ${parametr1}`);
    callbackFunc();
}

someFunctionWithCallback('dfsdfsd', function(){
    console.log('Here is log from callback func')
})

function it(testDescription, testActions) {
    console.log(`test desct: ${testDescription}`)
    testActions();
}

it('Google search', () => {
})



sum22(1, 2); 
sum333(1, 2); 

function sum22(a, b){ // Можна визивати одразу обявлення потім 
    let c = a + b;
    console.log(c);
}


const sum33 = (a, b) => { // Треба спочатку обявити потім використовувати
    let c = a + b;
    console.log(c);
} 
sum333(1, 2)