
// let result;

// const arr = new Array(1,2,3,4).slice(2,5).slice(1,6)

// const pr = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(20);
// })
// .then((res) => {
//     console.log(res);
//     return res + 'bla';
// })
// .catch((err) => {
//     console.log('SOME ERROR OCCURED', err);

//     return 100;
// })
// .then((res) => {
//     console.log(res);
   
//     return res + 'smth';
// })
// .then((res) => {
//     console.log(res);
//     return res;
// })
// .catch((err) => {
//     console.log('SECOND CATCH');
//     return 499;
// })
// .finally(() => {
//     console.log('THIS IS FINALLY');
//     // throw 222;
//     return 999;
// })
// .catch((err) => {
//     console.log('AFTER FINALLY WAS REJECTED', err);
// })
// .then((data) => {
//     console.log('THEN AFTER FINALLY', data);
// })

// console.log(pr);

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('one');
//         resolve();
//     }, Math.random() * 1000);
// })
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('two');
//             resolve(200);
//         }, 2000);
//     })
//     .then((data) => {
//         throw 2;
//         return 300;
//     })
//     .catch(() => {
//         console.log('TEST CATCH');
//         throw 3;
//     })
// })
// .catch(() => {
//     console.log('SOME CATCH');
// })
// .then((data) => {
//     console.log(data);

//     setTimeout(() => {
//         console.log('three');
//     }, 1000);
// })


// const p1 = new Promise((res, rej) => 
//     setTimeout(() => rej(1), 500));
// const p2 = new Promise((rej, rej) => 
//     setTimeout(() => rej(2), 1000));
// const p3 = new Promise((res, rej) => 
//     setTimeout(() => rej(3), 700));

// Promise.all([p1,p2,p3])
// .then((res) => {
//     console.log('AFTER ALL PROMISES', res);
// })

// Promise.allSettled([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })

// Promise.race([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })

// Promise.any([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })



// async await

// const foo2 = async function () {};
// async function foo3 () {}

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(10);
//         // throw new Error();
//     }, 1000);
// })


// const foo = async () => {

//     let result = await p1;

    // try {
    //     result = await p1;
    // } catch (err) {
    //     console.log(err);
    // }
  
    // throw new Error(12);

//     console.log('HI!', result);

//     console.log('FINALLY');
    
//     return result;
// };

// foo()
// .catch((err) => {
//     console.log(err);
// });


// const bar = async () => {
//     const obj = await foo();
// };





