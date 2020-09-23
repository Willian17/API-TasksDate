import { Router } from 'express';

const hello = Router();

hello.get('/', async (request, response) => {
  return response.send('Hello world')
});

export default hello;
