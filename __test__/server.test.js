'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
// const supertest = require('supertest');
const mockRequest = supergoose(server);


describe('Server - Products', () => {
  // afterEach(async () => {
  //   await mockRequest.delete('/api/v1/products/1');
  // });

  // it('Responds 404 on an invalid route', () => {

  //   // const results = await mockRequest.get('/invalid');
  //   // console.log(results.status);
  //   // expect(results.status).toBe(404);
  //   // return results;
  //   return mockRequest
  //     .get('/foo')
  //     .then(results => {
  //       expect(results.status).toBe(404);
  //     });

  // });

  //   it('should respond properly to POST /products', async () => {
  //     const results = await postProduct();
  //     expect(results.body.name).toBe('shirt');
  //     expect(results.status).toBe(201);
  //   });

  //   it('should respond properly to GET /products', async () => {
  //     await postProduct();
  //     const results = await mockRequest
  //       .get('/products');
  //     expect(results.status).toBe(200);
  //     expect(results.body[0].name).toBe('shirt');
  //   });

  //   it('should respond to GET /products/:id', async () => {
  //     await postProduct();
  //     await postSecondProduct();
  //     const results = await mockRequest
  //       .get('/products/2');
  //     expect(results.body.name).toBe('pants');
  //     await mockRequest.delete('/products/2');
  //   });

  //   it('should respond to PUT /products/:id', async () => {
  //     await postProduct();
  //     await postSecondProduct();
  //     const results = await mockRequest
  //       .put('/products/2')
  //       .send({
  //         id: '2',
  //         category: 'clothes',
  //         name: 'tank top',
  //         display_name: 'tank top',
  //         description: 'No sleeves',
  //       });
  //     expect(results.body.name).toBe('tank top');
  //     expect(results.status).toBe(201);
  //     await mockRequest.delete('/products/2');
  //   });

  //   it('should respond to DELETE /products/:id', async() => {
  //     await postProduct();
  //     await postSecondProduct();
  //     const results = await mockRequest.get('/products');
  //     expect(results.status).toBe(200);
  //     await mockRequest.delete('/products/2');
  //     const newResults = await mockRequest.get('/products');
  //     expect(newResults.body.length).toBe(1);
  //   });
});

// const postProduct = async () => {
//   return await mockRequest
//     .post('/products')
//     .send({
//       id: '1',
//       category: 'clothes',
//       name: 'shirt',
//       display_name: 'Shirt',
//       description: 'two sleeves',
//     });
// };
// const postSecondProduct = async () => {
//   await mockRequest
//     .post('/api/v1/products')
//     .send({
//       category: 'clothes',
//       name: 'pants',
//       display_name: 'Pants',
//       description: 'Five pockets',
// });
// };

// describe('Server - Categories', () => {
//   afterEach(async () => {
//     await mockRequest.delete('/categories/1');
//   });

//   it('should respond properly to POST /categories', async () => {
//     const results = await postCat();
//     expect(results.body.name).toBe('clothes');
//     // expect(results.status).toBe(201);
//   });
// });
// const postCat = async () => {
//   return await mockRequest
//     .post('/api/v1/categories')
//     .send({
//       name: 'clothes',
//       display_name: 'Clothes',
//       description: 'Body Covering',
//     });
// };