'use strict';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../routes');

describe("Yondu's arrow app", () => {
  describe('GET /yondu endpoint', () => {
    it('should return object with the calculated time based on parameters', (done) => {

      let myDistance = 200;
      let myTime = 30;
      let mySpeed = myDistance / myTime;

      request(app)
        .get('/yondu')
        .query({distance: myDistance, time: myTime})
        .expect(200)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.speed).to.be.equal(mySpeed);

          done();
        });
    })

    it('should return an error message when there is no parameter', (done) => {
      request(app)
        .get('/yondu')
        .expect(400)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.body.error).to.equal('Please provide valid distance and time');

          done();
        })
    });
  })
});