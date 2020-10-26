import { getRepository } from "typeorm";
import AppError from "../errors/AppError";

import Students from "../models/Students";
import Tasks from "../models/Tasks";
import Taskstudents from "../models/TaskStudents";

interface Request{
    student_id: String    
}

interface Response {
    id: String,
    title: string,
    deliverydate: string | Date,
    subject: string,
    class_id: String,
    done?: boolean
}

class ListTasksService{
    public async execute({student_id}: Request) : Promise<Response[]>{
        const taskRepository = getRepository(Tasks)
        const studentRepository = getRepository(Students)
        const taskStudentRepository = getRepository(Taskstudents)
        
        const student =  await studentRepository.findOne({where: {id: student_id}})

        if(!student){
            throw new AppError('Id do usuário logado inválido', 500)
        }
        
        const tasksInSameClass: Response[] = await taskRepository.find({
            where: {
                class_id: student.class_id
            }
        })

        
       for(let index = 0; index < tasksInSameClass.length; index ++){
        const taskDone = await taskStudentRepository.findOne({
                        where: {
                            student_id, task_id: tasksInSameClass[index].id
                    }})
                    
        tasksInSameClass[index].done = taskDone?.done

        tasksInSameClass[index].deliverydate = tasksInSameClass[index].deliverydate.toLocaleString()
       }

        
        
        return tasksInSameClass
    }
}

export default ListTasksService