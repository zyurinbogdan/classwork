// array methods


// const arr = [23, 4, 56, 43, 0, 54, -23, 34, 23];
// const arr2 = ['one', 'two', 'three'];
// const arr3 = [false, true, true, false, true];

// const resultArr = arr.concat([]); // копия массива
// console.log(arr2.concat('hello world', false));

// const resultArr = arr.concat(arr2); 
// const resultResultArr = resultArr.concat(arr3);


// const arr = [ 4, 56, 34, 43, 0, 54, -23, 34, 23];

// const arr3 = [false, true, true, false, true];
// const arr4 = [ 1,51,2,56, 89, 45, 1,3,4,5 ];


// const result = arr2.push(100);
// const result = arr2.pop();
// const result = arr2.shift();
// const result = arr2.unshift('smth', 'smth else');
// .indexOf()
// .lastIndexOf()

// arr2.reverse();
// arr.sort();
// const result  = arr2.slice(2);

// const arr2 = ['one', 'two', 'three', 'two', 'zzzzz', 'xxxxx', 'ccccc', 'vvvvvv'];

// const result = arr2.splice( 2 , 2,  "VALERCHIK", "VALERCHIK");

// console.log(result);
// console.log(arr2);

// arr.join()              // превращает массив в строку

// const result = arr2.join('@');
// console.log(result);

// STRING METHOD

// const str = 'I love ITSTEP very much';

// console.log( str.split(' ') )    //превращает массив в строку, в скобках указывается разделитель


// rest, spread, destructuring

// const arr = [ 4, 56, 34, 43, 0, 54, -23, 34, 23];

// console.log( Math.max (...arr));        //оператор spread обозначается '...' и передает наполнение массива, а не сам массив


// const arr4 = [1, 334, 546, 677, 32, 3];

// const arr5 = [...arr4, 21];                 //копия массива. Так же можно добавлять элементы. Например const arr5 = [21, ...arr4, 21]; добавит 21 в начало и конец массива  

// console.log( arr5);


// const arr2 = ['one', 'two', 'three', 'two', 'zzzzz', 'xxxxx', 'ccccc', 'vvvvvv'];

// const one = arr2[0];
// const two = arr2[1];

// console.log( one );

// const [ a, b, c] = arr2;     //создается 3 константы с названиями a, b, c и значениями 3-х первых элементов arr2 соответственно
// const [ a, b, c] = arr2; то же самое  const a = arr2[0]; const b = arr2[1]; const c = arr2[2];


// const [a, b, c, ...blabla] = arr;           //rest пишется как spread, но это его антоним, создает из значений массив


