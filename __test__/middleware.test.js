'use strict';

const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
const logger = require('../middleware/logger');
const fiveHundred = require('../middleware/500.js');

const spy = jest.spyOn(console, 'log');
let next = jest.fn();

describe('middleware', () => {
  it('logs the time', async () => {
    await mockRequest.get('/products');
    expect(spy).toHaveBeenCalledWith(`Method: GET`);
  });
  it('calls next() in the middleware', () => {
    logger(1,2, next);
    expect(next).toHaveBeenCalled();
  });
  it('calls 500 in the middleware', async () => {
    fiveHundred('req',{status:()=>{return{send:()=>{}};}},next);
    expect(next).toHaveBeenCalled();
  });

});
