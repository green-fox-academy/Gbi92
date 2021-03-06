'use strict';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../routes');

describe('Groot app', () => {
  describe('GET /groot endpoint', () => {
    it('should return the translated text if there is query parameter', (done) => {

      let myMessage = 'valami';

      request(app)
        .get('/groot')
        .query({message: myMessage})
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.be.eql({
            received: myMessage,
            translated: "I am Groot!"
          });

          done();
        })
    });

    it('should return an error message when there is no parameter', (done) => {
      request(app)
        .get('/groot')
        .expect(400)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.error).to.equal('I am Groot!');

          done();
        })
    });
  })
})