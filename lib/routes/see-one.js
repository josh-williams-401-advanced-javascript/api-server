'use strict';
module.exports = async (req, res, next) => {
  try {
    let body = await req.model.read(req.params.id);
    res.status(200).json(body);
  } catch (e) {
    next('Could not find database item');
  }
};