// file system
const fs= require('fs');

console.log('starting');
// nested call backs = will be called as callback hell
fs.readFile('C:/VsCode/JavaScript/class-24/file1.txt',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('result1 : ', result)
        fs.readFile('C:/VsCode/JavaScript/class-24/file2.txt',(err,result)=>{
            if(err){
                console.log(err);
            }else{
                console.log('result2 : ', result)
            }
        });
    }
});

// const file2 = fs.readFileSync('C:/VsCode/JavaScript/class-24/file2.txt');
// console.log('data in file2: ', file2)

console.log('finished');