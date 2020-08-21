'use strict';

module.exports = async (req, res, next) => {
  try {
    let body = await req.model.create(req.body);
    res.status(201).json(body);
  } catch (e) {
    next('Could not add to database');
  }
};