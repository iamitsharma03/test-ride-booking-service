const locationRepo = require('../repo/location.repo');

exports.getCities = async () => {
  const data = await locationRepo.getCities();
  return data;
};
