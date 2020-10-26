import { getRepository } from 'typeorm'

import Students from '../models/Students'
import Taskstudents from '../models/TaskStudents'

interface Request{
    task_id: String,
    class_id: String,
}

class CreateTaskStudentService{
    public async execute ( {class_id, task_id}: Request ): Promise<void>{
        const studentRepository = getRepository(Students)
        const taskStudentRepository = getRepository(Taskstudents)
        
        const studentsInSameClass = await studentRepository.find({where: {class_id}})
        studentsInSameClass.forEach(async (student) => {
            const taskStudent = taskStudentRepository.create({
                student_id: student.id,
                task_id
            })
            
            await taskStudentRepository.save(taskStudent)
        })
        
        
        
    }
}

export default CreateTaskStudentService