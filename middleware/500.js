'use strict';

module.exports = (error, req, res, next) => {
  console.log('500 Error');
  res.status(500).send(`500 Error. ${error}`);
  res.end();
};
