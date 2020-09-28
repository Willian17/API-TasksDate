import request from 'supertest';
import path from 'path';
import { Connection, getRepository, getConnection } from 'typeorm';
import createConnection from '../database';

import Task from '../models/Task';

import app from '../app';

let connection: Connection;

describe('Tasks', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');
    
    // await connection.query('DROP TABLE IF EXISTS tasks');
    
    await connection.runMigrations();
  });
  
  // beforeEach(async () => {
  //   await connection.query('DELETE FROM tasks');
  // });
  
  afterAll(async () => {
    const mainConnection = getConnection();
    
    await connection.close();
    await mainConnection.close();
  });
  
  it('should be able to create a task', async () => {
    const response = await request(app).post('/tasks').send({
      title: 'Atividade avaliativa',
      deliverydate: new Date(2020, 9, 2, 22, 30),
      subject: 'Física'
    });

    expect(response.status).toBe(200)

  });
});

