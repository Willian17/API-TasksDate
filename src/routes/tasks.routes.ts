import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateTaskService from '../services/CreateTaskService';
import CreateTaskStudentService from '../services/CreateTaskStudentsService';
import DoneTaskService from '../services/DoneTaskService';
import ListTasksService from '../services/ListTasksService';


const tasksRouter = Router();

tasksRouter.use(ensureAuthenticated)

tasksRouter.patch('/:task_id', async (request, response) =>{
  const student_id = request.student.id
  const task_id = request.params.task_id

  try {
    const DoneTask = new DoneTaskService()

    await DoneTask.execute({student_id, task_id})

    response.status(204).send()
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }

})

tasksRouter.post('/', async (request, response) => {
  try {
    const { title, deliverydate, subject } = request.body
    const { id } = request.student
    
    const createTask = new CreateTaskService();
    const createTaskStudent = new CreateTaskStudentService();
    
    const {class_id, task_id} = await createTask.execute({
      title,
      deliverydate,
      subject,
      student_id: id
    })
    
    await createTaskStudent.execute({class_id, task_id})
    
    return response.status(201).send()
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }
});

tasksRouter.get('/', async (request, response) =>{
  const student_id = request.student.id

  console.log(`student_id router ${student_id}`)
  
  try {
    const listTasks = new ListTasksService()
    
    const tasks = await listTasks.execute({student_id})

    console.log(`tasks router  ${tasks}`)
    
    return response.json(tasks)
  } catch (error) {
    console.log(`error ${error}`)
    console.log(`error.message ${error.message}`)
    return response.status(400).json({ Error: error.message });
  }
  
})


export default tasksRouter;
