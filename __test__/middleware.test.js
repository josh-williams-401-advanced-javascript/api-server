'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
// const logger = require('../middleware/logger');
// const fiveHundred = require('../middleware/500.js');

const spy = jest.spyOn(console, 'log');
// let next = jest.fn();

describe('middleware', () => {
  it('logs the time', async () => {
    try {
      await mockRequest.get('/api/v1/products');
      expect(spy).toHaveBeenCalledWith(`Method: GET`);
    } catch (e) {
      expect(true).toBe(false);
    }
  });
  it('calls 500 in the middleware', async () => {
    await mockRequest.get('/api/v1/products/123');
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  // it('calls 500 in the middleware', () => {
  //   fiveHundred('req', { status: () => { return { send: () => { } }; } }, next);
  //   expect(next).toHaveBeenCalled();
  // });

});
