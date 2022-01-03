

//Async

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'));
    });
}

const doSomething = async() => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before 0');
doSomething();
console.log('After 0');

const anotherFunction = async() => {
    try{
        const something = await doSomethingAsync();
        console.log(something + '1');
    } catch (error){
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');