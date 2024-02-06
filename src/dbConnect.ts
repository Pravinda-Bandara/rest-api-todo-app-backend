import mongoose from 'mongoose';

export const dbConnect=()=>{
    console.log(process.env.DB_URL)
    mongoose.set('strictQuery',true)
    mongoose.connect('mongodb://localhost:27017/rest_todo_app').then(()=>{
        console.log('connected to mongodb')
    }).catch(()=>{
        console.log('error mongodb')
    })
}



