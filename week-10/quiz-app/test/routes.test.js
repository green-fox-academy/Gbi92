'use strict';

const { expect } = require('chai');
const request = require('supertest');

const { app } = require('../routes');

describe('Quiz game webapp', () => {
  describe('GET /api/game endpoint', () => {
    it('should return a random question', (done) => {
      request(app)
        .get('/api/game')
        .expect(200)
        .end((err, response) => {
          if (err) {
            throw err;
          }
          expect(response.body.answers.length).to.equal(4);
          done();
        })
    })
  })
})