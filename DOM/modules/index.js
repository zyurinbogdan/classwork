import {person as human} from './person.js'  // as human значит, что импортированный person будет преименован в human. Называться human он будет только в файле index.js, в том файле где он был создан он останется person. Таким способом импортируются объекты поштучно.

const person = {
    name: 'Valerchik',
    age: 32
}

console.log(person);