/* global describe it beforeEach */
/* eslint no-unused-vars: 0 */
/* eslint no-shadow: 0 */

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/proxy';

const should = chai.should();
chai.use(chaiHttp);

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Our parent block
describe('HttpProxy SPEC', () => {
  /*
   Test default Server 1: Default
  */
  describe('Teste Routes from Server 1', (done) => {
    it('it should show a Wellcome message from route: /', (done) => {
      chai.request(server)
     .get('/')
     .end((err, res) => {
       res.body.should.have.property('message');
       res.body.should.have.property('message').eq('Hello from default service');
       res.should.have.status(200);
       done();
     });
    });
  });
  /*
   Test default Server 2: helpdesk
  */
  describe('Test Routes from Server 2', (done) => {
    it('it should show a Wellcome message from route: /helpdesk', (done) => {
      chai.request(server)
     .get('/helpdesk')
     .end((err, res) => {
       res.body.should.have.property('message');
       res.body.should.have.property('message').eq('/helpdesk route is Ok');
       res.should.have.status(200);
       done();
     });
    });
    it('it should show a Wellcome message from route: /helpdesk/:id', (done) => {
      chai.request(server)
     .get('/helpdesk/1')
     .end((err, res) => {
       res.body.should.have.property('message');
       res.body.should.have.property('message').eq('/helpdesk/1 route is ok');
       res.should.have.status(200);
       done();
     });
    });
  });
  /*
   Test default Server 3: orders
  */
  describe('Test Routes from Server 3', (done) => {
    it('it should show a Wellcome message from route: /orders', (done) => {
      chai.request(server)
     .get('/orders')
     .end((err, res) => {
       res.body.should.have.property('message');
       res.body.should.have.property('message').eq('/orders route is Ok');
       res.should.have.status(200);
       done();
     });
    });
    it('it should show a Wellcome message from route: /orders/:id', (done) => {
      chai.request(server)
     .get('/orders/1')
     .end((err, res) => {
       res.body.should.have.property('message');
       res.body.should.have.property('message').eq('/orders/1 route is Ok');
       res.should.have.status(200);
       done();
     });
    });
  });
});
