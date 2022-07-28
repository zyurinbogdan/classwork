// const person = {};                    //объекты в фигурных скобках, содержит ключи и значения


const person = {
    name: 'John',
    age: 23,
    city: 'Gomel',
    isProgrammer: true,
}; 


// console.log( person.age );               //Выводит возраст, можно так: console.log( person['age'] ); 

person.name = 'Valerchik';              //перезапись поля
person.lastName = 'Ivanov';             //создание нового поля 

// console.log( 'isProgrammer' in person );            //проверяет есть ли поле isProgrammer в объекте person

// console.log( person.hasOwnProperty('isProgrammer'));    //проверяет есть ли поле isProgrammer в объекте person

// delete person.age;                  //удаляет поле из объекта

const person2 = {};
for (let key in person) {
    person2[key] = person[key];
}
console.log(person2);                   //копия объекта

//rest spread distructuring


const { age} = person;            //диструктуризация объекта, в скобках нужно писать название полей. === const age = person.age;



