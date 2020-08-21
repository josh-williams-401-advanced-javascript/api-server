'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

let spy;
beforeEach(() => {
  spy = jest.spyOn(console, 'log').mockImplementation();
});
afterEach(()=> {
  spy.mockRestore();
});

describe('Server - Products', () => {

  it('Responds 404 on an invalid route', async () => {
    const results = await mockRequest.get('/invalid');
    expect(results.status).toBe(404);
    return results;
  });

  it('should respond properly to POST /products', async () => {
    const results = await postProduct();
    expect(results.body.name).toBe('shirt');
    expect(results.status).toBe(201);
  });

  it('should respond properly to GET /products', async () => {
    await postProduct();
    const results = await mockRequest
      .get('/api/v1/products');
    expect(results.status).toBe(200);
    expect(results.body.results[0].name).toBe('shirt');
  });

  it('should respond to GET /products/:id', async () => {
    await postProduct();
    let secondProduct = await postSecondProduct();
    let id = secondProduct.body._id;
    const results = await mockRequest
      .get(`/api/v1/products/${id}`);
    expect(results.body.name).toBe('pants');
  });

  it('should respond to PUT /products/:id', async () => {
    await postProduct();
    let secondProduct = await postSecondProduct();
    let id = secondProduct.body._id;
    const results = await mockRequest
      .put(`/api/v1/products/${id}`)
      .send({
        category: 'clothes',
        name: 'tank top',
        display_name: 'tank top',
        description: 'No sleeves',
      });
    expect(results.body.name).toBe('tank top');
    expect(results.status).toBe(201);
  });

  it('should respond to PATCH /products/:id', async ()  => {
    // await postProduct();
    let secondProduct = await postSecondProduct();
    let id = secondProduct.body._id;
    const results = await mockRequest
      .patch(`/api/v1/products/${id}`)
      .send({
        description: 'Ten pockets',
      });
    expect(results.body.description).toBe('Ten pockets');
    expect(results.body.name).toBe('pants');
    expect(results.status).toBe(201);
  });

  it('should respond to DELETE /products/:id', async () => {
    await postProduct();
    let secondProduct = await postSecondProduct();
    let id = secondProduct.body._id;
    const results = await mockRequest.get('/api/v1/products');
    let lengthOne = results.body.count;
    expect(results.status).toBe(200);
    await mockRequest.delete(`/api/v1/products/${id}`);
    const newResults = await mockRequest.get('/api/v1/products');
    expect(newResults.body.count < lengthOne).toBe(true);
  });
});

const postProduct = async () => {
  return await mockRequest
    .post('/api/v1/products')
    .send({
      category: 'clothes',
      name: 'shirt',
      display_name: 'Shirt',
      description: 'two sleeves',
    });
};
const postSecondProduct = async () => {
  return await mockRequest
    .post('/api/v1/products')
    .send({
      category: 'clothes',
      name: 'pants',
      display_name: 'Pants',
      description: 'Five pockets',
    });
};

describe('Server - Categories', () => {
  it('should respond properly to POST /categories', async () => {
    const results = await postCat();
    expect(results.body.name).toBe('clothes');
    expect(results.status).toBe(201);
  });

  it('should respond properly to GET /categories', async () => {
    await postCat();
    const results = await mockRequest
      .get('/api/v1/categories');
    expect(results.status).toBe(200);
    expect(results.body.results[0].name).toBe('clothes');
  });

  it('should respond to GET /categories/:id', async () => {
    await postCat();
    let secondCat = await postSecondCat();
    let id = secondCat.body._id;
    const results = await mockRequest
      .get(`/api/v1/categories/${id}`);
    expect(results.body.name).toBe('instruments');
  });

  it('should respond to PUT /categories/:id', async () => {
    await postCat();
    let secondCat = await postSecondCat();
    let id = secondCat.body._id;
    const results = await mockRequest
      .put(`/api/v1/categories/${id}`)
      .send({
        name: 'cars',
        display_name: 'Cars',
        description: 'Go Go Mobiles',
      });
    expect(results.body.name).toBe('cars');
    expect(results.status).toBe(201);
  });

  it('should respond to DELETE /categories/:id', async () => {
    await postCat();
    let secondCat = await postSecondCat();
    let id = secondCat.body._id;
    const results = await mockRequest.get('/api/v1/categories');
    let lengthOne = results.body.count;
    expect(results.status).toBe(200);
    await mockRequest.delete(`/api/v1/categories/${id}`);
    const newResults = await mockRequest.get('/api/v1/categories');
    expect(newResults.body.count < lengthOne).toBe(true);
  });
});

const postCat = async () => {
  return await mockRequest
    .post('/api/v1/categories')
    .send({
      name: 'clothes',
      display_name: 'Clothes',
      description: 'Body Covering',
    });
};
const postSecondCat = async () => {
  return await mockRequest
    .post('/api/v1/categories')
    .send({
      name: 'instruments',
      display_name: 'Instruments',
      description: 'Sound Machines',
    });
};
