const mongoose = require('mongoose')

dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://lm0458:*******@cluster0.hun4b.mongodb.net/MERN_JOB');
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}


module.exports = mongoose
