console.log('Hello!');
const promiseForArray = new Promise((resolve, reject) => {
    let array = [];
    let total = 0;
    for (let i=0; i < 10000000; i +=1) {
        total += i;
        array.push(total);
    }
    resolve(array);
});
promiseForArray.then((result) => console.log(result))
console.log('How are you?');