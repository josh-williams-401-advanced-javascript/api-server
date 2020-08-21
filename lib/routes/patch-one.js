'use strict';

module.exports = async (req, res, next) => {
  try {
    let updated = await req.model.patch(req.params.id, req.body);
    res.status(201).json(updated);
  } catch (e) {
    next('Could not change that item. Check id');
  }
};