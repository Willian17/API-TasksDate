import {response, Router} from 'express'

import CreateClassesService from '../services/CreateClassesService'
import CreateStudentService from '../services/CreateStudentService'
import AuthenticateStudentService from '../services/AuthenticateStudentService'
import CreateStudentTaskService from '../services/CreateStudentTaskService'

const studentsRouter = Router()

studentsRouter.post('/signup', async(request, response) => {
    const {
        name, surname, email, password, registration, avatar, course, year
    } = request.body

    try {
        const createClass = new CreateClassesService()
        const createStudent = new CreateStudentService()
        const createStudentTask = new CreateStudentTaskService()


        const class_id = await createClass.execute({course, year})
        const {id} = await createStudent.execute({name, surname, email, password, registration, avatar, class_id})

       await createStudentTask.execute({class_id, student_id: id })
        
        return response.status(201).send()
    } catch (error) {
        return response.status(400).send(error.message);
    }
})

studentsRouter.post('/signin', async (request, response)=> {
    const {email, password} = request.body
    try {
        const authenticate = new AuthenticateStudentService();

        const {token, user} = await authenticate.execute({email, password})

       return response.json({token, user})
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
})


export default studentsRouter