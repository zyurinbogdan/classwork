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