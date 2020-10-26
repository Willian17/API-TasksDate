import { Router } from 'express';

import studentsRouter from './students.routes';
import tasksRouter from './tasks.routes';

const routes = Router();

routes.use('/tasks', tasksRouter);
routes.use('/students', studentsRouter)

export default routes;
