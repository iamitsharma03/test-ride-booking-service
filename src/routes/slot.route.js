const { Router } = require('express');
const slotController = require('../controllers/slot.controller');

const router = Router();

/*
  @desc router configuartion for slot endpoints
*/

module.exports = (app) => {
  router.get(
    '/slots',
    slotController.getSlots,
  );

  router.patch(
    '/slot/:slotId',
    slotController.bookSlot,
  );

  app.use('/testBooking/v1', router);
};
