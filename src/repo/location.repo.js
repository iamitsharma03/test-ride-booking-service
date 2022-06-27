const { City } = require('../model/location.model');

exports.getCities = async () => {
  const data = await City.find().select('name testCenters');
  return data;
};
