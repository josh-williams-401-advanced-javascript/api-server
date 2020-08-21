'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

const spy = jest.spyOn(console, 'log');

describe('middleware', () => {
  it('logs the time', async () => {
    try {
      await mockRequest.get('/api/v1/products');
      expect(spy).toHaveBeenCalledWith(`Method: GET`);
    } catch (e) {
      expect(true).toBe(false);
    }
  });
  it('calls an error on a put route with a bad id', async () => {
    const results = await mockRequest.put('/api/v1/products/123');
    expect(results.status).toBe(500);
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  it('calls an error on a patch route with a bad id', async () => {
    const results = await mockRequest.patch('/api/v1/products/123');
    expect(results.status).toBe(500);
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  it('calls the error on the delete route', async () => {
    const results = await mockRequest.delete('/api/v1/products/123');
    expect(results.status).toBe(500);
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  it('calls the error on the post route', async () => {
    const results = await mockRequest.post('/api/v1/categories/')
      .send({name:'good', display_name:'Good'});
    expect(results.status).toBe(500);
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  it('calls 500 in the middleware', async () => {
    const results = await mockRequest.get('/api/v1/products/123');
    expect(results.status).toBe(500);
    expect(spy).toHaveBeenCalledWith('500 Error');
  });
  it('will not respond to a bad model', async () => {
    await mockRequest.get('/api/v1/produce');
    expect(spy).toHaveBeenCalledWith('500 Error');
  });

});
