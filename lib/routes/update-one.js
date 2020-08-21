'use strict';

module.exports = async (req, res, next) => {
  try {
    let updated = await req.model.update(req.params.id, req.body);
    res.status(201).json(updated);
  } catch (e) {
    next('Could not update that item. Check id');
  }
};