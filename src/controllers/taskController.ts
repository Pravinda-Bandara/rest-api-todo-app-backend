
import {Request,Response} from "express";
import Task from "../models/task.model.js";

async function getAllTasks(req: Request, res: Response) {
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
export default getAllTasks;

