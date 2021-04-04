'use strict';

const { app } = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(app);
const base64 = require('base-64');

describe('POST /signup create new user', () => {
  test('Should create new user and return record', async () => {
    let response = await request
      .post('/api/v1/signup')
      .send({ username: 'jack', password: '12345' });
    expect(response.body.username).toEqual('jack');
    expect(response.status).toEqual(201);
  });
  test('', async () => {
    let user = base64.encode(`jack:12345`);
    let response = await request
      .post('/api/v1/signin')
      .set(`Authorization`, `Basic ${user}`);
    expect(response.body.user.username).toEqual('jack');
    expect(response.status).toEqual(200);
  });
});

describe('Not found errors', () => {
  it('should return a 404 error on bad route', async () => {
    let response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('should return a 404 error on bad method', async () => {
    let response = await request.post('/foo');
    expect(response.status).toEqual(404);
  });
});
