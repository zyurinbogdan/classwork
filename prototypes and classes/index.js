// //es5

// const person = {
//     userName: 'Bob',
//     age: 25,
//     brain: true,
// };
// const programmer = {
//     userName: 'Valerchik',
//     age: 25,
//     brain: true,
//     stack: ['HTML', 'CSS']
// }

// function Person (userName, age) {
//     // console.log(this)
//     //return this   ----- автоматчески будет возвращать пустой обьект
//     this.userName = userName;
//     this.age = age;
//     this.brain = true;
// }

// console.log(new Person ('Valera', 5)) //здесь this это пустой обьект класса person, пользуемся функцией как конструктором и классом


//класс это обычная функция

// Person.prototype.constitution = 'bla bla';

// const person1 = new Person('Oleg', 34);
// console.log(person1);

// function Person (userName, age) {
//     this.userName = userName;
//     this.age = age;
//     this.hasBrain = true;
// }

// Programmer.prototype = Object.create(Person.prototype);

// Person.prototype.run = function () {
//     console.log(`${this.userName} runs`);
// };

// function Programmer (stack, ...args) {
//     Person.call(this, ...args);
//     this.stack = stack;
// }

// Programmer.prototype.code = function () {
//     console.log(`${this.userName} code`);
// }

// const p1 = new Programmer(['HTML', 'CSS'], 'John', 43);
// console.log(p1);


//es6

class Person {
    hasBrain = true;
    #age = 0;   //приватное поле, недоступно снаружи, доступ можно получить только внутри класса
    #creditPayments = [2,3,5,7,8];

    constructor (userName) {
        this.userName = userName;
        
    }
    #calculateAverage () {
        return this.#creditPayments.reduce((sum, item) => sum + item) / this.#creditPayments.length;
    }
    showAveragePayment () {
        console.log(this.#calculateAverage())
    }
    set age(val) {
        if(val > 0 && val < 100){
            this.#age = val
        }
    }
    get age () {
        return this.#age;
    }

    eat = () => {
        console.log('EAT!')  //так оно идет в инстанс
    }

    run () {
        console.log(`${this.userName} runs`);  //а так в прототип
    }
}

const p1 = new Person('Valerchik', 12)
p1.age = 25;
p1.showAveragePayment()

//приватное поле
//приватные методы

//наследование

class Programmer extends Person {   //расширяем класс персонб программер такой же как и персон только + еще что-то, все что есть в персоне будет и здесь
    constructor(stack, ...args){ //args это все аргументы персона
        super(...args); //аналог Person.call(this), с его помощью запускаем конструтор персона, чтобы здесь хранились все его данные
        this.stack = stack;
    }

    code () {
        console.log(`${this.userName} codes`);
    }
}

const p1 = new Programmer(['HTML', 'JS'], 'Yuri')

class jsProgrammer extends Programmer {
    smoozie = true

    //по умолчанию сделает
    // constructor(){  //только значения аргументов будут Undefind
    //     super()
    // }

    run () {     //method override - сохранили старое и добавили что-то свое
        console.log('In a fahsion way');
        super.run();  //заимствование метода
    }
}
const jsp = new jsProgrammer(['CSS', 'JS'], 'OLEG')