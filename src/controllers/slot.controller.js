const slotService = require('../services/slot.service');
const { getResponseObject } = require('../utils/formatter.util');

exports.getSlots = async (req, res, next) => {
  try {
    const { city, testCenter } = req.query;
    const data = await slotService.getSlots(city, testCenter);
    const response = getResponseObject(null, data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.bookSlot = async (req, res, next) => {
  try {
    const { slotId } = req.params;
    const { user, model, isHomeVisit } = req.body;
    const data = await slotService.bookSlot(slotId, model, isHomeVisit, user);
    const response = getResponseObject('Successfully Booked Test drive Slot', data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
