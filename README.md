# API Server

### 8/19/2020
Requests now should be made on `/api/v1/products` and `/api/v1/categories`  
POST, GET, PUT, and DELETE  

Fill in a MongoDB port and Port in the .env  

To test, run `npm test`  

Note: This will not work if you try to go to a route with an invalid id  

### 8/18/2020
To use, run `node .`  

Try making POST, GET, PUT, and DELETE requests on `/products` and `/categories`  

See results sent or console-logged. 

### 8/17/2020
To use, run the json server from the base:
```
json-server data/db.json
```
See all the categories in the database with: 
```
http GET :3000/categories
```
See all the products with: 
```
http GET :3000/products
```

Swagger: https://app.swaggerhub.com/apis/jswill88/api-server/0.1#/Model6_Array


