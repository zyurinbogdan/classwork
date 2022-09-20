//event loop
//promise
//async await

console.log(1)

setTimeout(() => {
    console.log(2);
}, 1000)

console.log(3)


//https://www.youtube.com/watch?v=6XyifyzmSMM
//https://www.youtube.com/watch?v=M7WpAbG0rAA
//https://www.youtube.com/watch?v=u1kqx6AenYw

//АРЧИБАЛЬД
//https://www.youtube.com/watch?v=cCOL7MC4Pl0

// PROMISE - ЭТО ВОЗМОЖНОСТЬ ПИСАТЬ АСИНХРОННЫЙ КОД СИНХРОННО

const pr = new Promise((resolve, reject) => {
    resolve('result')
}).then((res) => {       //один аргумент,  если здесь случится ошибка, то он будет reject
    console.log(res)
    return res
}).then((res) => {
    console.log(res)
})            //сам инстанс не понадобится, эта функция выполняется !синхронно!

//resolve - все закончилось хорошо
//reject - все плохо


// 'pending' - процеес ожидания
// 'fulfilled' - завершен успешно  
// 'reject'  - неуспешно

//методы promise
//promise возвращает promise
//then врзвращает promise
//это два Разных promise