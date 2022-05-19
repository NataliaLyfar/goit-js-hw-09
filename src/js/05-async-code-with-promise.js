
// const promissed = new Promise((resolve,reject) => {
//     let total = 0;
//     for(let i=0; i < 95; i +=1){
//         total += i;
//     }
//     if(total % 10 === 0){
//     resolve(total);} else {reject('Promis error')}
// });
// promissed.then((result) => {
//     console.log(result);
//     return result;
// })
//     .then((result) => console.log('This is second result', result - result / 1.1))
//     .catch(err => console.log(err))
// Async function: function with return new Promise which include some code of loop foe example.
//  it can have two varients of executing: resolve and reject. result we get via then and catch
function asyncLoop(count) {
    return new Promise((resolve,reject) => {
            let total = 0;
            for(let i=0; i < count; i +=1){
                total += i;
            }
            if(total % 10 === 0){
            resolve(total);} else {reject('Promis error')}
        }); 
}
// asyncLoop(98)
// .then(data => console.log(data))
// .catch(err => console.log(err))
// console.log(2);
// Methods of promises:
// 1.Promice.race();
// 2.Promise.all();
// 3. Promise.allSettled();
// 4. Promise.allSettled()
// Promise.all([asyncLoop(100), asyncLoop(1000), asyncLoop(20)])
// .then((data) => console.log(data))
// .catch(err => console.log(err));
// If all promisses are resolve this method returns array of results, in other way - error
// It uses for gathering different information from different sources and then getting the sum results
// Promise.race([asyncLoop(100), asyncLoop(1000), asyncLoop(20)])
// .then((data) => console.log(data))
// .catch(err => console.log(err)); 
// it gives the result of executing the firstest  executed  of promisses
Promise.allSettled([asyncLoop(100), asyncLoop(1000), asyncLoop(10)])
.then((data) => console.log(data))
.catch(err => console.log(err)); 
// it is wider varient of Promise.all(). it gives the array with the information of executing every promise