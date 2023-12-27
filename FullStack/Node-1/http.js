const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('server is running')
    res.setHeader('Content-Type','text/html')
    res.end('<h1>response from server</h1>')
})

const port = 8080

server.listen(port , ()=>{
    console.log('server is now running')
})