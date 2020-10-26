import chai,{expect} from 'chai'
import chaihttp from 'chai-http'

import app from '../app'

chai.use(chaihttp)

describe('test', ()=> {
    it('deve ser capaz de criar uma task', (done)=> {
        chai.request(app).post('tasks')
        .send({
            title: "Questionário",
            subject: "Filosofia",
            deliverydate: new Date(2020, 10, 10, 0, 0)
        })
        .end((err, response)=> {
            expect(response).to.have.status(201);
            done();
        })
    })
})
