import { Router } from 'express';

import helloRouter from './hello';

const routes = Router();

routes.use('/', helloRouter);

export default routes;
