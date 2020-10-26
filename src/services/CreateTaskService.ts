import { getRepository } from 'typeorm'
import AppError from '../errors/AppError'
import Students from '../models/Students'

import Task from '../models/Tasks'

interface Request{
    title: string,
    deliverydate: Date,
    subject: string,
    student_id: string
}

interface Response {
    class_id: String,
    task_id: String
}

class CreateTaskService{
    public async execute ( {title, deliverydate, subject, student_id}: Request ): Promise<Response>{
        const tasksRepository = getRepository(Task)
        const studentRepository = getRepository(Students)

        const student = await studentRepository.findOne({where: {id: student_id}})
        if(!student){
           throw new AppError('Id do usuário logado inválido', 500)
        }
        const {class_id} = student

       const task = tasksRepository.create({
           title,
           deliverydate,
           subject,
           class_id
       })

       await tasksRepository.save(task)

       return {
           class_id,
           task_id: task.id
       }
    }
}

export default CreateTaskService