import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

import Students from "../models/Students";
import Tasks from "../models/Tasks";
import Taskstudents from "../models/TaskStudents";

interface Request{
    student_id: String,
    task_id: String    
}

class DoneTaskService{
    public async execute({student_id, task_id}: Request) : Promise<void>{
        const taskStudentRepository = getRepository(Taskstudents)

        const taskStudent = await taskStudentRepository.findOne({where: {task_id, student_id} })

        if(!taskStudent){
            throw new AppError('Tarefa não encontrada', 404)
        }

        const valueDone = taskStudent.done ? false : true

        taskStudent.done = valueDone

        await taskStudentRepository.save(taskStudent)
    }
}

export default DoneTaskService