class Parent{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.lastName = 'Starynets';
}

    tellName(){
        console.log(`My name is ${this.name} ${this.lastName}`)

    }

    tellAge(){
        console.log(`My age is ${this.age}`)
    }
    tellJobtitle(){
        if(this instanceof Child){
            console.log('I do not work')
        }else{
            this.job = "QA";
        
        console.log(`My job is ${this.job} `)
        }
    }
}

class Child extends Parent {
    goToSchool(){
        console.log('I like go to school!')
    }
}

const parent = new Parent('Vlad', 28);
const child = new Child('Daniil', 4)



parent.tellName()
parent.tellAge()
parent.tellJobtitle()


child.tellName()
child.tellAge()
child.tellJobtitle()
child.goToSchool()