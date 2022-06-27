const locationService = require('../services/location.service');
const { getResponseObject } = require('../utils/formatter.util');

exports.getCities = async (req, res, next) => {
  try {
    const states = await locationService.getCities();
    const response = getResponseObject(null, states);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
