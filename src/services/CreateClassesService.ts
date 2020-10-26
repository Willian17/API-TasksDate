import { getRepository } from 'typeorm'
import Classes from '../models/Classes'

interface Request {
    course: string,
    year: number
}

class CreateClassesService {
    public async execute( {course, year}: Request ): Promise<String>{
        const classRepository = getRepository(Classes)

        const checkClassExists = await classRepository.findOne({where: {course, year} })

        if(checkClassExists){
            return checkClassExists.id
        }

        const classCreated = classRepository.create({
            course,
            year
        })

        await classRepository.save(classCreated)

        return classCreated.id
    }
}

export default CreateClassesService