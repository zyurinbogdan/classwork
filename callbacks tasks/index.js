// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function switcher () {
//     let a = true;
//     return function () {
//         return a = !a;
//     }
// }

// let toggleMe = switcher();
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());

let switcher = () => {
    let a = true;
    return () => a = !a;
}
let toggleMe = switcher();
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0

// function count (num) {
//     let count = 0;
//     return function () {
//         if (num > 10) {
//             return ++count;
//         } else {
//             --count;
//             if (num <= 0) {
//                 return 0;
//             } else {
//                 return count;
//             }
//         }
//     }
// }

// let funcCounter = count(10);

// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());

// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function sumTo (num1, num2, cb) {
//     let sum = num1 + num2;
//     return cb(sum);
// }

// function toBool (sum) {
//     if (sum) {
//         return [sum, true];
//     } else {
//         return [sum, false];
//     }
// }
// console.log(sumTo(0, 0, toBool));

// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// function checkLogin (userLog, correctLog, correct, wrong) {
//     if (userLog === correctLog) {
//         return correct();
//     } else {
//         return wrong();
//     }
// }

// function correct () {
//     return 'Добро пожаловать';
// }
// function wrong () {
//     return 'Пошел вон';
// }
// console.log(checkLogin('Петя', 'Петя', correct, wrong));


// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// function foo (arr, cb) {
//     return arr.map(cb);
// }

// function cb (item) {
//     item = item * 2;
//     return item;
// }
// console.log(foo([1, 2, 3], cb));
// сделать через фор