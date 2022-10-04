// const h1 = document.body.children[2];

// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);                     переход к след или пред элементу, чтобы ходить вглубь можно использовать children
// console.log(h1.parentElement)                               переход к родительскому элементу


// const ul = document.getElementById('list');
// console.log(ul);                                получаем элемент

// const lis = document.getElementsByTagName('li');
// console.log(lis)                               получаем коллекцию

// console.log(...lis)                                делаем массив из коллекции

// const lis = document.getElementsByClassName('item');
// console.log(lis)                        получаем коллекцию li с классом item

// const ol = document.getElementById('test');
// console.log(ol.getElementsByClassName('item'));

// const lis = document.querySelector('#list > li');   позволяет собрть элементы по css селектору, берет первый попавшийся, а querySelectorAll возвращает все

// const lis = document.querySelectorAll('#list > li:not(.item');
// console.log(lis);                   получим все li, кроме тех, что имеют класс item


// const lisDead = document.querySelectorAll('.item');
// const lisAlive = document.getElementsByClassName('item');
// console.log(lisDead);
// console.log(lisAlive);

// const btn = document.getElementById('btn');


// btn.addEventListener('click', function () {
//     console.log('hi there');
// })  

// const onBtnClick = function () {
//     console.log('hi there again')
// btn.addEventListener('click', onBtnClick);                            
// // первый аргумент строка с событием, второй аргумент - функция 

// btn.removeEventListener('click', onBtnClick);                            // удаляет слушателя события, превый аргумент какое событие, второй - функция которую надо удалить



// const btn = document.getElementById('btn');

// function onBtnClick () {
//     console.log('chtoto');
//     this.removeEventListener('click', onBtnClick);
// };

// btn.addEventListener('click', onBtnClick);

// const input = document.getElementById('input');

// input.addEventListener('keydown', function () {
//     console.log(this.value);
// });              выводит в консоль все что набирается в input

// const btn = document.getElementById('btn');
// btn.addEventListener('click', (event) => {
//     console.log(event);
// })

// const input = document.getElementById('input');

// input.addEventListener('keydown', function (event) {
//     console.log(event);
// });

// const link = document.getElementById('a');

// link.addEventListener('click', function (event) {
//     event.preventDefault();         // отключает поведение по умолчанию
//     console.log('link clicked');
// })

// window.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// })


// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];

// function onLiClick ({target}) {
//     console.log(target);
//     console.log(this);
// }

// lis.forEach((li) => li.addEventListener('click', onLiClick))

// list.addEventListener('click', onLiClick);


// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const firstItem = document.getElementById('fitem');
// const pItem = document.getElementById('pitem');

// wrapper.addEventListener('click', () => {
//     console.log('WRAPPER')
// });

// list.addEventListener('click', () => {
//     console.log('LIST')
// });

// firstItem.addEventListener('click', () => {
//     console.log('LI')
// });

// pItem.addEventListener('click', () => {
//     console.log('P')
// });

// для перехвата добавляем true после функции, stopPropagation() останавливает всплытие и перехват


// list.addEventListener('click', () => {
    // const newLi = document.createElement('li');
    // newLi.innerText = 'some text here';

    // const item3 = list.getElementsByTagName('li')[2];

    // list.append(item3.cloneNode(true));

    // list.insertBefore(newLi, bratik );

    // list.append(newLi);
    // list.prepend(newLi);
    // list.insertAdjacentElement('afterbegin', newLi);
    // list.insertAdjacentElement('afterend', newLi);
    // list.insertAdjacentElement('beforebegin', newLi);
    // list.insertAdjacentElement('beforeend', newLi);

    // list.insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
    // list.insertAdjacentText('afterbegin', '<h1>Hello</h1>');

    // list.parentElement.append();

    // list.after(newLi);
// });


// document.getElementById('pitem').remove();

// pItem.textContent = '<h1>Hello</h1>';

// pItem.addEventListener('click', () => {
    // pItem.setAttribute('wasClicked', 'true');
    // console.log(pItem.getAttribute('wasClicked'));
    // const pItemCopy = pItem.cloneNode(true);
    // console.log(pItemCopy);
    // console.dir(pItem);
    // pItem.dataset.test = 'ppppppp';
    // Object.keys(pItem.dataset).forEach()

    // console.dir();

    // pItem.remove();
    // console.log(pItem);
// });


const pItem = document.getElementById('pitem');
const list = document.getElementById('list');

pItem.addEventListener('click', () => {
    pItem.style.backgroundColor = 'red';
});