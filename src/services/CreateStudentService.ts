import { getRepository } from 'typeorm'
import Students from '../models/Students'
import { hash } from 'bcryptjs'
import AppError from '../errors/AppError'

interface Request {
    name: string,
    surname: string,
    email: string,
    password: string,
    registration: number,
    avatar: string,
    class_id: String
}

class CreateStudentService {
    public async execute( {name, surname, email, password, registration, avatar, class_id}: Request ): Promise<Students>{
        const studentRepository = getRepository(Students)

        const checkEmailExists = await studentRepository.findOne({where: {email} })
        const checkRegistrationExists = await studentRepository.findOne({where: {registration} })

        if(checkEmailExists){
            throw new AppError('Email já existe.', 400)
        }
        if(checkRegistrationExists){
            throw new AppError('Número de matrícula já existe.', 400)
        }

        const hashedPassword = await hash(password, 10)

        const student = studentRepository.create({
            name,
            surname,
            email,
            password: hashedPassword,
            registration,
            avatar,
            class_id
        })

        await studentRepository.save(student)

        return student
    }
}

export default CreateStudentService