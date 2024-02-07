
import {Request,Response} from "express";
import Task from "../models/task.model.js";
import {TaskTO} from "../to/taskTO.js";

export async function getAllTasksByEmail(req: Request, res: Response) {
    try {
        if (!req.query.email) {
            return res.sendStatus(400);
        }

        const { email } = req.query;
        const taskList = await Task.find({ email: email });

        res.json(taskList);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function saveTask(req:Request,res:Response){

    try{
        const task=new Task(req.body);
        await task.save()
        res.status(201).json(task);
        /*const result =await Task.insertMany(req.body)
        res.status(201).json(result)*/
    }catch (error){
        console.error('Error create task:', error);
        res.status(500).send('Internal Server Error');
    }
}

export async function updateTask(req:Request,res:Response){
    const taskId=req.params.id;
    try {
        const task=await Task.findByIdAndUpdate(taskId,req.body)

        if (!task)res.sendStatus(404)
        else res.sendStatus(204)
    }catch (error){
        console.log("Error updating task",error)
        res.status(500).send('Internal Server Error');
    }
}

export async function deleteTask(req:Request,res:Response){
    const taskId=req.params.id
    try{
        const task=await Task.findByIdAndDelete(taskId)
        if (!task)res.sendStatus(404)
        else res.sendStatus(204)
    }catch(error){
        console.log("Error deleting task",error)
        res.status(500).send('Internal Server Error');
    }
}
