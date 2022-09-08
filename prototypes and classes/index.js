//es5

const person = {
    userName: 'Bob',
    age: 25,
    brain: true,
};
const programmer = {
    userName: 'Valerchik',
    age: 25,
    brain: true,
    stack: ['HTML', 'CSS']
}

function Person (userName, age) {
    // console.log(this)
    //return this   ----- автоматчески будет возвращать пустой обьект
    this.userName = userName;
    this.age = age;
    this.brain = true;
}

console.log(new Person ('Valera', 5)) //здесь this это пустой обьект класса person, пользуемся функцией как конструктором и классом


//класс это обычная функция

Person.prototype.constitution = 'bla bla';

const person1 = new Person('Oleg', 34);
console.log(person1);