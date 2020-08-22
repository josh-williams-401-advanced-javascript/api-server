'use strict';

module.exports = async (req, res, next) => {
  try {
    let body = await req.model.read();
    body = body ? body : [];
    if (Object.keys(req.query)) {
      let filterer = Object.keys(req.query);
      body = body.filter(entry => {
        return filterer.reduce((acc, filter) => {
          if (entry[filter] !== req.query[filter]) { acc = false; }
          return acc;
        }, true);
      });
    }
    let count = body.length;
    res.status(200).json({count: count,results: body});
  } catch (e) {
    next('Something went wrong');
  }
};