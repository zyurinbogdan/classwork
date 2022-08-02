// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscibers которе должно хранить всех subcribers
//если число allSubcribers > 700 вывести you are famous, иначе tryharder.

// const subscribers = {};

// subscribers.oldSubscribers = 400;

// subscribers.newSubscribers = 300;

// subscribers.allSubscribers =  subscribers.oldSubscribers + subscribers.newSubscribers;

// if (subscribers.allSubscribers > 700) {
//     alert('you are famous');
// } else {
//     alert('tryharder');
// }






// 2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//  ]
//  используя методы массивов и циклы 
//  вывести в консоль 'its valid', если во всех объектах поле a > b

// const arr = [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
// ]
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].a > arr[i].b) {
//         count += 1;
//     }
// }
// if (count === arr.length ) {
//     alert('its valid');
// }


//  3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]

// const arr = [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
// ]
// const newArr = [];
// for (let j = 0; j < arr.length; j++) {
//     newArr.push({...arr[j]});
// }
// for (let i = 0; i < newArr.length; i++) {
//         newArr[i].b = Math.pow(newArr[i].b, 2);
// }
// console.log(newArr);




//  4. создать массив на основе предыдущего, в котором
//  поля a и b будут последовательно помещены в массив
//  пример: [ 2, 1, 5, 144, 95, 49]
const arr = [
    {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
]
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].a, arr[i].b);
}
console.log(newArr);