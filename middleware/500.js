'use strict';

const fiveHundred = (req,res) => {
  console.log('500 Error');
  res.status(500).send('500 Error. Server error');
};

module.exports = fiveHundred;
