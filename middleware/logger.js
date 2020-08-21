'use strict';
 
module.exports = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  console.log(`Method: ${req.method}`);
  console.log(`Timestamp: ${req.requestTime}`);
  next();
};
