'use strict';

module.exports = async (req, res, next) => {
  try {
    let body = await req.model.read();
    let count = body.length;
    res.status(200).json({count: count,results: body});
  } catch (e) {
    next('Something went wrong');
  }
};