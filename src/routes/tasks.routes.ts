import { Router } from 'express';
import CreateTaskService from '../services/CreateTaskService';
import { Any, getRepository } from 'typeorm'
import Task from '../models/Task';


const tasksRouter = Router();

tasksRouter.post('/', async (request, response) => {
  try {
    const { title, deliverydate, subject } = request.body

    const createTask = new CreateTaskService();
  
    const task = await createTask.execute({
      title,
      deliverydate,
      subject
    })
  
    return response.json(task)
  } catch (error) {
    return response.status(400).json({ Error: error.message });
  }
});

tasksRouter.get('/', async (request, response) =>{
  const taskRepository = getRepository(Task)
  
  const tasks = await taskRepository.find()

  tasks.forEach(task => {
    task.deliverydate = task.deliverydate.toLocaleString();
  })

  return response.json(tasks)
})

export default tasksRouter;
