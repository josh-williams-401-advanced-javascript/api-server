# API Server

### 8/20/2020

The code is now more modularized and better equipped to handle errors. It responds to the same routes. It now includes a count of items in the database when you get all. I also realized that my PUT request was actually a PATCH mongoose request, so I turned the PUT into a PATCH, and added a PATCH. Now PUT and PATCH are both viable.

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


