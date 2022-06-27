const slotRepo = require('../repo/slot.repo');

exports.getSlots = async (cityId, testCenterId) => slotRepo.getSlots(cityId, testCenterId);

exports.bookSlot = async (slotId, model, isHomeVisit, user) => {
  await slotRepo.bookSlot(slotId, model, isHomeVisit, user);
};
