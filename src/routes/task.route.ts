import express, {Router} from "express";
import getAllTasks from "../controllers/taskController.js";

export const taskRoute=express.Router()

taskRoute.get('/',getAllTasks)
//taskRoute.post('/',saveTasks)
//taskRoute.patch('/:id',updateTask)
//taskRoute.delete('/:id',deleteTask)


