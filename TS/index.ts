import { addSyntheticLeadingComment, isAsteriskToken } from "typescript";

// let arr: string[] = [];             //объявляем массив строк, т.е. в массив добавлять можно только строки. Так же можно указать так - Array<string> = [], но лучше первый вариант

// const person = {
//     name: 'John',
//     age: 23
// }                                   // тип person объект с полями name и age



// const person: {
//     name: string;
//     age: number;
//     city?: string;
// } = {
//     name: 'John',
//     age: 23,
// }                                   // city? - опциональное поле которое в последствии можем добавить

// let arr: [string, boolean?, number?];   // кортеж(массив с разными типами данных)

// enum Features {                         //enum тип данных перечисление
//     banner,
//     adminka,
//     premium,
// }

// let a = Features.adminka;
// let b: Features = Features.premium;
// console.log(a);



// type Person = {
//     name: string;
//     age: number;
// }

// const person: Person = {
//     name: 'John',
//     age: 23
// }

// const person2: Person = {
//     name: 'Valerchik',
//     age: 16,
// }



let id: number | string = 'aasadsf';                    // описали какие типы можем использовать
id = 3232321 



