// const team = [
//     'john',
//     'Valerchik',
//     'Vovanchik',
//     'Glebushka'
// ];

// const player = team[1]; //ссылаемся на первый элемент массива

// alert (player);

// team[0] = 'Evlampij';
// console.log(team);

// const numbers = new Array(3); //создает массив из 3 пустых элементов


//length никогда не меняем

// for (let i = 0; i < team.length; i++) {
//     console.log(`Mr. ${team[i]}`);
// }

// 1. дан массив 10 чисел, вывести в консоль сумму всех элементов массива

// const arr = [
//     1,
//     43,
//     35,
//     16,
//     5,
//     18,
//     89,
//     19,
//     43,
//     10
// ];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)

// const arr = [13, 43, 56, 77, 84, 43, 22, 27, 99, 100];

// let sum = 0;

// let counter = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i];
//         counter++; 
//     }
// }

// console.log(sum / counter);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного

// const arr = [2,-65,7,-1,26,48,-93,58,9];
// const arrOpp = [];
// for (let i = 0; i < arr.length; i++) {
//     arrOpp[i] = -arr[i];
// }

// console.log(arrOpp);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы

// const arr = new Array(10);

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr[i] = 1;
//     } else if (i % 2 !== 0){
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// 5. заполнить массив последовательными нечетными числами (длина 10)

// const arr = new Array(10);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i * 2 + 1; 
// }

// console.log(arr);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// const arr = new Array(10);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(i,2);
// }

// console.log(arr);

// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива

// const arr = [1, 32, 54, 0, 19, 89, 75, 45, 99, 111];

// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         counter++;
//     }
// }
// console.log(counter);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// const arr = [1, 32, 54, 0, 19, 89, 75, 45, 99, 111];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%

const arr = [1, 32, 54, 100, 19, 89, 75, 45, 99, 111];

let max = arr[0];

let counter = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= 0.9 * max) {
        counter++;
    }
}
console.log(counter);

// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

const arr = [1, 32, 54, 100, 19, 89, 75, 45, 99, 78];

let max = arr[0];

for (let i = 0; i < arr.length; i+2) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);

// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

const arr = [1, 32, 54, 100, 19, 89, 75, 45, 99, 78];

let userInput = +prompt('enter number');

let diff = arr[i] / userInput;

const near;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] / userInput < diff) {
        diff = arr[i] / userInput;
        near = arr[i];
    }
}
console.log (near);