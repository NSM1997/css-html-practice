const fs = require('fs');


//read a file
const data = fs.readFileSync('f1.txt', 'utf-8')
console.log(data);

//write in a file
const content = 'data which i want to update in my file-2'
fs.writeFileSync('f2.txt',content,'utf-8') //overrides existing text in the file.
fs.writeFileSync('f3.txt',content,'utf-8') //creates new file with that name.

//append in a file.
const moreContent = ' i want to append these text in that file'
fs.appendFileSync('f2.txt',moreContent,'utf-8')

//rename a file
fs.renameSync('f3.txt', 'f4.txt')

//check if file exists
const context = fs.existsSync('f4.txt')
console.log(context)

//working with directories

//create a directory
// fs.mkdirSync('dir1')

//remove directory
// fs.rmdirSync('dir1')