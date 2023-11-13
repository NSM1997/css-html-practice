let fs = require('fs');

let promise_file1 = fs.promises.readFile('./file1.txt','utf8');
console.log(promise_file1)

promise_file1.then(data =>{
    console.log('promise is resolved, and the data is: ',data)
})

promise_file1.catch(error=>{
    console.log('promise was rejected with this reason: ',error)
})
promise_file1.finally(()=>{
    console.log('promise is executed.')
})