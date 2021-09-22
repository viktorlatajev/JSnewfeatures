"use strict";

const person = {
    name: 'Alex',
    age: 28
}

// Такой формат мы уже можем отправлять на сервер
let toServer = JSON.stringify(person);

console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

// Глубокое клонирование объекта
const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);

// Задание
const obj = {
    scale: {
        width: 200,
        height: 250
    },
    color: 'red',
    shape: 'circle',
    name: 'name1',
    number: 1,
    property: 'property1'
}

let toServer = JSON.stringify(obj);
console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

/* XML
<?xml version="1.0" encoding="UTF-8"?>
<obj>
   <color>red</color>
   <name>name1</name>
   <number>1</number>
   <property>property1</property>
   <scale>
      <height>250</height>
      <width>200</width>
   </scale>
   <shape>circle</shape>
</obj>
*/

let objClone = JSON.parse(JSON.stringify(obj));
objClone.color = 'blue';

console.log(obj);
console.log(objClone); 
// promise похожи на call-back функции

//пример разрастания дерева call-back-ов (call-back hell)
console.log('Запрос данных...');

setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'phone',
        price: 300
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);

}, 2000);

// тоже самое, но с использованием Promise
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);    
});

req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

    req2.then((data) => {
        console.log(data);
    });
});

// Рабочий вариант
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

}).then((data) => {
    console.log(data);
});

// Рабочий вариант 2
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
});

// Рабочий вариант 3 (error)
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            //resolve(product);
            reject();
        }, 2000);
    });

}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('error!')
}); 

// Рабочий вариант 4 (finally)
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            reject();
        }, 2000);
    });

}).then((data) => {
    data.modify = 'true';
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('error!')
}).finally(() => {
    console.log('Все действия выполнены!');
});

//------------------------------------------------------
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

Promise.all([test(4000), test(1000)]).then(() => {
    console.log('All');
}); 