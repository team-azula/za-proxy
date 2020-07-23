
// const express = require('express');
const app = require('../server/index.js');
// const axios = require('axios');
// // const app = express();
// const polyfill = require('babel-polyfill');
const request = require('supertest');
// const carouselRouter = require('./routers.js')


describe('server tests', () => {

  afterAll(function (done) {
    mongoose.connection.close(() =>
      app.close(done)
    );
  });
      test('server responds to get req', done => {
        request(app)
          .get('/')
          .then(res => {
            expect(res.statusCode).toBe(200)
            done();
          })

      });

      test('should get from database', done => {
        // return request(app)
         request(app)
          .get('/carousels/2')
          .then(res => {
            expect(res.body.length).toBeGreaterThanOrEqual(0);
            expect(res.statusCode).toBe(200)
            done();
          })
      });

      test('should respond with correct values', (done) => {
        request(app)
        .get('/carousels/2')
          .then(res => {
            const item = res.body[0];
            expect(item.id).toEqual(expect.any(Number));
            expect(item.app_description).toEqual(expect.any(String));
            expect(item.additional_text).toEqual(expect.any(String));
            expect(item.images).toEqual(expect.any(Array));
            done()
          });
      });

      test('should respond with a 404 for invalid id', (done) => {
        request(app)
        .get('/mctallica')
        .then(res => {
          expect(res.statusCode).toBe(404);
          done();
      });
    }); // desc for GET /api/photos
  }); // main desc
