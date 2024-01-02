const mongoose = require('mongoose')
const PASSWORD = require('./credentials').PASSWORD

const db= `mongodb+srv://NSMANOHAR:${PASSWORD}@manu.amvmctt.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB server connected')
}).catch( err=>{
    console.log('error connecting to db: ', err)
})