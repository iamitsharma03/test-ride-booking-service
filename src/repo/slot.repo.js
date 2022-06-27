const Slot = require('../model/slot.model');

exports.getSlots = async (city, testCenter) => {
  const slots = await Slot.find({
    city,
    testCenter,
  });
  return slots;
};

exports.bookSlot = async (slotId, model, isHomeVisit, user) => {
  const {
    name, email, phoneNumber, address,
  } = user;
  const slot = await Slot.findOneAndUpdate({
    _id: slotId,
    isBooked: false,
  },
  {
    $set: {
      name,
      email,
      phoneNumber,
      address,
      isBooked: true,
      model,
      isHomeVisit,
    },
  });
  return slot;
};
