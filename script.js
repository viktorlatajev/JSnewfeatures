"use strict";

//rest оператор, обратное преобразование spread
const log = function (a, b, ...other){
    console.log(a);
    console.log(b);
    console.log(other);

};

log('test1', 'test2', 'test3', 'test4');

//парарметры по умолчанию
function calcOrDouble (first, second = 2){
    //second = second || 2; //раньше использовали такой способ
    return first*second;
}

console.log(calcOrDouble(5));