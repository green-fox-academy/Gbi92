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
          expect(err).to.be.null;
          expect(response.body.answers.length).to.equal(4);
          done();
        })
    })
  })

  describe('POST /api/questions', () => {
    it('should save the new question and possible answers and return a message', (done) => {
      let newQuestion = {
        question: 'Test question',
        answers: [
          {
            answer_1: 'test01',
            is_correct: 0
          },
          {
            answer_2: 'test02',
            is_correct: 0
          },
          {
            answer_3: 'test03',
            is_correct: 1
          },
          {
            answer_4: 'test04',
            is_correct: 0
          }
        ]
      };

      request(app)
        .post('/api/questions')
        .send(newQuestion)
        .expect(201)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.message).to.be.equal('Question has been added to quiz');

          done();
        })
    })
  })
})