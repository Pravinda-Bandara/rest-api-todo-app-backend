import express,{Request,Response} from "express";
import Task from "../models/task.model.js";
import {sampleTasks} from "../data.js";
export const seedRouter=express.Router()
seedRouter.get('/seed',async (req:Request,res:Response)=>{
    try{
        await Task.deleteMany({})
        const createTasks = await Task.insertMany(sampleTasks)
        res.json(createTasks)
    }catch(err){
        console.log(err)
        res.status(500).json({error:true,message:"Internal Server Error"})
    }
}
)

