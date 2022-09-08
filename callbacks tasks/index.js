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

// let switcher = () => {
//     let a = true;
//     return () => a = !a;
// }
// let toggleMe = switcher();
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0

// function count () {
//     let count = 0;
//     let userNum;
//     return function (num) {
//         if (num !== undefined) {
//             userNum = num;
//         } else if (num === undefined){
//             if (userNum === 0) {
//                 return count;
//             } else if (userNum <= 10) {
//                 return ++count;
//             } else if (userNum > 10) {
//                 return --count;
//             }
//         }
        
//     }

// }

// let funcCounter = count();
// console.log(funcCounter(100));
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
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(cb(arr[i]));
//     }

//     return arr1;
// }

// function cb (item) {
//     item = item * 2;
//     return item;
// }
// console.log(foo([1, 2, 4], cb));
// сделать через фор

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// classNameEditor('active', true) // добавляем класс ====>>>>> 'active'
// classNameEditor('test', true) // =====>>>>> 'active test'
// classNameEditor('btn', true) // =====>>>>> 'active test btn'
// classNameEditor('test', false) // =====>>>>> 'active btn'
// classNameEditor('blabla', false) // =====>>>>> 'active btn'

// .split()
// .join()


// function addOrDelClass () {
//     let classArr = [];
//     return function (className, shouldAdd) {
//         if (shouldAdd) {
//             if (!classArr.includes(className)){
//                 classArr.push(className);
//             }
//         } else {
//             if(classArr.includes(className)) {
//                 classArr.splice(classArr.indexOf(className), 1);
//             }
//         }
//         let classStr = classArr.join(' ');
//         return classStr;
//     }
// }
// let classNameEditor = addOrDelClass();
// console.log(classNameEditor('btn', true));
// console.log(classNameEditor('active', true));
// console.log(classNameEditor('btn', true));
// console.log(classNameEditor('test', true));
// console.log(classNameEditor('btn', false));


// 7. Создать объект 
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false, 
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения



const kurochka = {
    name: 'Ryaba',
    isAlive: true,
    _isZazharena: false
};


Object.defineProperty(kurochka, 'isAlive', {
    writable: false
});

Object.defineProperty(kurochka, '_isZazharena', {
    writable: true,
    enumerable: false,
    configurable: false
});

Object.defineProperty(kurochka, 'isZazharena', {
    set (val) {
        if (val && !this._isZazharena) {
            this._isZazharena = val;

            Object.defineProperty(this, 'isAlive', {
                writable: true
            });

            this.isAlive = false;

            Object.defineProperty(this, 'isAlive', {
                writable: false,
                configurable: false
            })
        }
    },
    get () {
        return this._isZazharena;
    }
});


kurochka.isZazharena = true;
kurochka.isAlive = true;

console.log(kurochka);