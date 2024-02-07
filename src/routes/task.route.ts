import express, {Router} from "express";
import {deleteTask, getAllTasksByEmail, saveTask, updateTask} from "../controllers/taskController.js";



export const taskRoute=express.Router()

taskRoute.get('/',getAllTasksByEmail)
taskRoute.post('/',saveTask)
taskRoute.patch('/:id',updateTask)
taskRoute.delete('/:id',deleteTask)


