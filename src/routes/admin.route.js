const { Router } = require('express');
const adminController = require('../controllers/admin.controller');

const router = Router();

/*
  @desc router configuartion for slot endpoints
*/

module.exports = (app) => {
  router.get(
    '/admin/:adminId/slots',
    adminController.getSlots,
  );

  router.get(
    '/admin/:adminId/slots/:slotId/vehicles',
    adminController.getVehicles,
  );

  router.patch(
    '/admin/:adminId/slots/:slotId',
    adminController.assignVehicle,
  );
  app.use('/testBooking/v1', router);
};
