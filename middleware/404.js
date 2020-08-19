'use strict';

const fourOhFour = (req,res) => {
  console.log('404 Error');
  res.status(404).send('404 Error. Route not found');
  res.end();
};

module.exports = fourOhFour;