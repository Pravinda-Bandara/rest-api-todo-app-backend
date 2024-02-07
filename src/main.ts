import express,{json,urlencoded} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnect} from "./dbConnect.js";
import {seedRouter} from "./routes/seed.route.js";
import {taskRoute} from "./routes/task.route.js";


const app=express();
dotenv.config()
app.use(urlencoded())
app.use(json())
app.use(cors())

dbConnect()
app.use('/api/v1',seedRouter)
app.use('/api/v1/tasks',taskRoute)

app.listen(process.env.PORT,()=>console.log(`Server is listening to ${process.env.PORT}`))