// function add () {}                  //создание функции
// add()                               //запуск функции
// написать функцию которая возвращает среднее арифметическое 
// 4х чисел

// function arifm (a, b, c, d) {
//     return (a + b + c + d)/4
// }
// console.log(arifm(1, 1, 1, 5));




// let arr = [24,1,4,4,23,43,23,4,23];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }
// }



// function declaration
// function add (a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a + b);
//     } else {
//         console.log('NOT VALID DATA');
//     }   
// }

// add(); // запуск функции


// function expression
// let result = function add (a, b, c = 0) {
//     console.log(a + b + c);
// };


// function add (a, b) {
    
//     if (typeof a !== 'number' || typeof b !== 'number' ) {
//         return;
//     }

//     const res = a + b;
//     console.log('HEEYY!');

//     return res;  
// }

// const calc = 10 / add(2,3);
// console.log(calc);

// console.log( add(5,1) );

// const arr = [add(5,90), add(1,2)];



// function expression
// const foo = function () {
//     console.log('IM FOOO!');
// };

// function add (a, b) {
//     return [a + b];    
// }


// console.log( add(2,3).slice() )

// написать функцию которая возвращает среднее арифметическое 
// n чисел

function average (...blablaArr) {
    console.log(c);
    console.log(blablaArr.slice())
    // const blablaArr = [2,324,23,42,342,34,2,3,42,34];
//    const argumentsArr = [...arguments];

    // return (a+b+c+d)/4;
}


average(2,324,23,42,342,34,2,3,42,34);


// recursive obj copy
// hoisting func expression



// let arr = [24,1,4,4,23,43,23,4,23];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }
// }



// function declaration
// function add (a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a + b);
//     } else {
//         console.log('NOT VALID DATA');
//     }   
// }

// add(); // запуск функции


// function expression
// let result = function add (a, b, c = 0) {
//     console.log(a + b + c);
// };


// function add (a, b) {
    
//     if (typeof a !== 'number' || typeof b !== 'number' ) {
//         return;
//     }

//     const res = a + b;
//     console.log('HEEYY!');

//     return res;  
// }

// const calc = 10 / add(2,3);
// console.log(calc);

// console.log( add(5,1) );

// const arr = [add(5,90), add(1,2)];



// function expression
// const foo = function () {
//     console.log('IM FOOO!');
// };

// function add (a, b) {
//     return [a + b];    
// }


// console.log( add(2,3).slice() )

// написать функцию которая возвращает среднее арифметическое 
// n чисел

// function average (...blablaArr) {
//     console.log(c);
//     console.log(blablaArr.slice())
    // const blablaArr = [2,324,23,42,342,34,2,3,42,34];
//    const argumentsArr = [...arguments];

    // return (a+b+c+d)/4;
// }


// average(2,324,23,42,342,34,2,3,42,34);



// hoisting func expression

// hoisting
// temporary dead zone
// anonymous self invoking function (IIFE)

// function foo
// var bar = undefined

// function foo () {
//     console.log('FOO');
// }

// var bar = function () {
//     console.log('IM BAR');
// };

// console.log(a);
// let a = 2;

// console.log(a);
// var a = 2;

// function SCOPE, block SCOPE

// let a = 10;

// function foo () {
//     function bar () {
//         a = 3;
//         console.log(a);
//     }
//     bar();
//     a = 2;
//     console.log(a);
// }

// foo();
// console.log(a);

// console.log(a);

// let a = 2;
// foo();

// console.log(a);


// recursive obj copy
// setTimeout + let + scope

function validate () {}

function getUserValue () {
    validate()
}
