import { getRepository } from 'typeorm'

import Task from '../models/Task'

interface Request{
    title: string,
    deliverydate: Date,
    subject: string
}

class CreateTaskService{
    public async execute ( {title, deliverydate, subject}: Request ): Promise<Task>{
        const tasksRepository = getRepository(Task)

       const task = tasksRepository.create({
           title,
           deliverydate,
           subject
       })

       await tasksRepository.save(task)

       return task
    }
}

export default CreateTaskService