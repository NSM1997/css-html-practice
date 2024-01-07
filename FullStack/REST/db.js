const mongoose = require('mongoose')
const PASSWORD = require('./credentials').PASSWORD

const db= `mongodb+srv://NSMANOHAR:${PASSWORD}@manu.amvmctt.mongodb.net/LLD?retryWrites=true&w=majority`
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB server connected')
}).catch( err=>{
    console.log('error connecting to db: ', err)
})

//schema (class == blueprint)
const mySchema = new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate:{type:Date,default:Date.now},
    isPublished: Boolean,
    rating: Number
})
//model (constructor which is used to create objects)
const myModel = mongoose.model('myModel',mySchema)

//create a document ()
async function createCourse(){
    //object
       const course = new myModel({
        name :'MERN FullStack',
        creator:'Manu',
        isPublished : true,
        rating: 4.8
    })
    const courseCreated =await course.save();
    console.log(courseCreated)
}
// createCourse()