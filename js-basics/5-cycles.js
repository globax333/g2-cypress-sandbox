
let num = 80;
while ( num < 90) {
    console.log(num)
    num++;
}

let num2 = 80;
do {console.log(num)
    num++;
} while(num2 < 90);

for(let i = 1; i < 8 ; i++){
    console.log(i)
}

let num3 = 1
for(let i = 1; i < 8 ; i++){
    console.log(num3);
    num3++;
}

let number4 = 10;
for(let i = 1; i < 8 ; i++){
    if(number4 === 19){
        break;
    }

    console.log(number4);
    number4++;
}

let number5 = 10;
for(let i = 1; i < 8 ; i++){
    if(i === 4){
        continue;
    }
    console.log(i);
}


for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`)
    }
}