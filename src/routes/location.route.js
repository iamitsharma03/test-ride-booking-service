const { Router } = require('express');
const locationController = require('../controllers/location.controller');

const router = Router();

/*
  @desc router configuartion for location endpoints
*/

module.exports = (app) => {
  router.get('/cities',
    locationController.getCities);

  app.use('/accountmanagement/v1', router);
};
