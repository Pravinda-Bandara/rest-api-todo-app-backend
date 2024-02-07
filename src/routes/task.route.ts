import express, {Router} from "express";
import {getAllTasks, saveTask, updateTask} from "../controllers/taskController.js";


export const taskRoute=express.Router()

taskRoute.get('/',getAllTasks)
taskRoute.post('/',saveTask)
taskRoute.patch('/:id',updateTask)
//taskRoute.delete('/:id',deleteTask)


