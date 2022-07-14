// while () {}
// do {} while ()
// for () {}


// while (condition) { // со временем должен становиться ложным
//     loop body
// }
//  let i = 0;
//  while (i < 3) {
//     i++;
//     console.log ('hello');
//  } // будет выполняться пока i не станет 3


// let i = 5;
// while ( i >= 0){
//     console.log (i--);
// }


// let i = 0;
// do {
//     console.log ("hi");
// } while (i > 0) // сперва выполнит, а потом проверит условие, таким образом "hi" выполнится 1 раз
// let i;
// do {
//     i = +prompt ('введи 5')
// } while (i !== 5);


// for (let i = 0; i < 5; i++) {
//     console.log (i);
// }
// for (let i = 0; i <= 10; i++) {
//     if (i !== 4) {
//         console.log (i);
//     }
// }
// for (let i = 0; i <= 10; i++) {
//     if (i === 4) {
//         continue
//     }
//     console.log (i);
// } // выводит числа от 0 до 10 кроме 4 (два способа)
// break вырубает полностью цикл
// for (let i = 1; i<= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     for (let j = 1; j <= 4; j++) {
//         if (j === 3) {
//            continue;
//         }
//         console.log (`${i}.${j}`);
//     }
// }
// for (let i = 10; i <100; i++) {
//     if (i % 4 === 0 && i % 6 !== 0){
//         console.log (i);
//     }
// }
let i = +prompt ('Введи число');
for ( ; i === 0; i--) {
        console.log (`${i}.${-i}`);
    }