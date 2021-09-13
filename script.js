"use strict";

//свойства-аксессоры get set

const person = {
    name: 'John',
    age: 28,

    get userAge(){
        return this.age;
    },
    set userAge(num){
        this.age = num;
    }
};

//свойства! Поэтому обращаемся без скобок, именно как к свойству, а не к методу
console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);

//инкапсуляция

function User (name, age){
    this.name = name;
    this.age = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
    };
}

const john = new User('John', 22);
john.age = 30;  //возможно прямое обращение к свойству
console.log(john.name);
console.log(john.age);
john.say();

//с инкапсуляцией

function User2 (name, age){
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };
}

const ann = new User('Ann', 22);

//john2.age = 30;  //возможно прямое обращение к свойству
console.log(ann.name);
console.log(ann.userAge); //уже не можем обратится к свойству
ann.say();

///////////////////////////////////////////

function User2 (name, age){
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };

    this.getAge = function(){
        return userAge;
    }
    this.setAge = function(age){
        if(typeof age === 'number' && age > 0 && age <100){
            userAge = age;
        }else{
            console.log('Недопустимое значение!')
        }
    }
}

const kirill = new User3('Kirill', 25);

//kirill.age = 30; //возможно прямое обращение к свойству
console.log(kirill.name);
console.log(kirill.userAge); //уже не можем обратится к свойству
console.log(kirill.getAge());
kirill.setAge(33);
kirill.setAge(333);
kirill.setAge('fwefwe');
kirill.say();

//////////////////////
//инкапсуляция . класс

class Author {
    constructor (name, age){
        this.name = name;
        this._age = age; //инкапсуляция поля в классе (договоренность)
    }

    #surname = 'Maal'; //приватное поле

    say = () => {
        console.log(`Имя пользователя: ${this.name}, ${this.#surname} возраст: ${this._age}`);
    }

    get age(){
        return this._age;
    }
    set age(age){
        if(typeof age === 'number' && age > 0 && age <100){
            this._age = age;
        }else{
            console.log('Недопустимое значение!')
        }
    }
}

const ivan = new Author('Ivan', 25);

console.log(ivan.name);
ivan.age = 99;
console.log(ivan.age);

ivan.say();