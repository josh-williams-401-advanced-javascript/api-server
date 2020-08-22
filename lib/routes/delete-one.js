'use strict';

module.exports = async (req, res, next) => {
  try {
    await req.model.delete(req.params.id);
    res.status(200).json({});
  } catch (e) {
    next('Could not delete item. Check id');
  }
};
