'use strict';

module.exports = async (req, res, next) => {
  try {
    let body = await req.model.read();
    res.status(200).json(body);
  } catch (e) {
    next('Something went wrong');
  }
};