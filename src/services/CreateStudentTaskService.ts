import { getRepository } from 'typeorm'

import Tasks from '../models/Tasks'
import Taskstudents from '../models/TaskStudents'

interface Request{
    student_id: String,
    class_id: String,
}

class CreateStudentTaskService{
    public async execute ( {class_id, student_id}: Request ): Promise<void>{
        
        const tasksRepository = getRepository(Tasks)
        const taskStudentRepository = getRepository(Taskstudents)

        const tasksInSameClass = await tasksRepository.find({where: {class_id}})
        console.log(tasksInSameClass)
        tasksInSameClass.forEach(async (currentTask)=> {
            const taskStudent = taskStudentRepository.create({
                student_id,
                task_id: currentTask.id as String
            })

           await  taskStudentRepository.save(taskStudent)
        })
    }
}

export default CreateStudentTaskService