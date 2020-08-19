'use strict';

const timeStamp = (req, res, next) => {
  req.requestTime = 
    `${(new Date).toLocaleDateString()} ${(new Date).toLocaleTimeString()}`;
  next();
};

module.exports = timeStamp;