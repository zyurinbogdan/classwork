// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];




// for (let i = 0; i < people2.length; i++) {
//     if (people1.includes(people2[i])) {
//         people2.splice(i,1);
//     }
// }
// let people3 = people1.concat(people2);

// console.log(people3);

// let sortedPeople = people3.sort();
// console.log(sortedPeople);

// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let people2 = people1.slice(2, 5);
// console.log(people2);



// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let people2 = people1.splice(people1.indexOf('Janett'), 2);
// people1 = people2.concat(people1);
// console.log(people1);


// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// people1.splice(people1.indexOf('Eddie'), 2, 'Oleg', 'Valerchik');
// console.log(people1);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// people1.reverse().fill('Mitrofan', 0, 4); 
// console.log(people1);


// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)


let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
let people2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

let people3 = people1.concat(people2.slice(2));
console.log(people3);