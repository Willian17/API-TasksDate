import {getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import Students from '../models/Students'
import AppError from '../errors/AppError'

interface Request {
    email: string,
    password: string,
}

interface Response {
    token: string,
    user: Students
}

class AuthenticateStudentService {
    public async execute( { email, password}: Request ): Promise<Response>{
        const studentRepository = getRepository(Students)

        const student = await studentRepository.findOne({where: {email} })

        if(!student){
            throw new AppError('Email ou senha incorretos.', 401)
        }

        const passwordMatched = await compare(password, student.password as string)

        if(!passwordMatched){
            throw new AppError('Email ou senha incorretos.', 401)
        }

        const token = sign({}, process.env.AUTH_SECRET as string , {
            subject: student.id,
            expiresIn: process.env.EXPIRES_IN
        })

        delete student.password

        return {token , user: student}
    }
}

export default AuthenticateStudentService