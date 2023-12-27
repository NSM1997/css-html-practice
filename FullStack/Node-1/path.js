const path=  require('path')
const fs = require('fs')

// const sourcePath = 'C:\Users\SAINANDU\OneDrive - Capgemini\Documents\VsCode\FullStack\Node-1'
// const complicatedPath = 'C:/Users/SAINANDU/OneDrive-Capgemini/Documents/VsCode/FullStack/Node-1/../../hooks/public/./index.html'
// //join different paths
// const p = path.join('vscode','fullstack','node-1','path')
// console.log(p);

// const baseName = path.basename(sourcePath)
// console.log(baseName)

// const extName = path.extname(sourcePath)
// console.log(extName)

// const parsedPath = path.parse(sourcePath)
// console.log(parsedPath)

// const normalisedPath = path.normalize(complicatedPath)
// console.log(normalisedPath)

const from = 'C:/Users/SAINANDU/OneDrive-Capgemini/Documents/VsCode/FullStack/Node-1/dir1/file-1.txt'
const to = 'C:/Users/SAINANDU/OneDrive-Capgemini/Documents/VsCode/FullStack/Node-1/dir2/file-1.txt'

const readStream = fs.createReadStream(from)
const writeStream = fs.createWriteStream(to)

readStream.pipe(writeStream)