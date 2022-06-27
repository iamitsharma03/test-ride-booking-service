const Admin = require('../model/admin.model');
const Slot = require('../model/slot.model');
const { Vehicle } = require('../model/vehicle.model');

exports.getAdminSlots = async (adminId) => {
  const adminData = await Admin.findById(adminId).populate({ path: 'cities', select: 'name' });
  const adminJson = adminData.toJSON();
  const cities = adminJson.cities.reduce((centers, city) => {
    const newcenters = centers.concat(city?.id);
    return newcenters;
  }, []);
  const slots = await Slot.find({
    city: {
      $in: [
        cities,
      ],
    },
  }).populate({ path: 'city', select: 'name testCenters' }).populate({ path: 'model', select: 'name' }).populate({ path: 'vehicle', select: 'registrationNo' });
  const updatedSlots = slots.map((slot) => {
    slot = slot.toJSON();
    const slotTestCenter = slot.city.testCenters.find((center) => center.id.toString() === slot.testCenter.toString());
    slot.testCenter = slotTestCenter;
    delete slot.city.testCenters;
    return slot;
  });
  return updatedSlots;
};

exports.getVehicles = async (adminId, slotId) => {
  const adminData = await Admin.findById(adminId).populate({ path: 'cities', select: 'name' });
  const slot = await Slot.findOne({ _id: slotId, city: adminData.cities[0].id }).populate({ path: 'model', select: 'name' });
  const vehicles = await Vehicle.find({ model: slot.model?.id });
  return vehicles;
};

exports.assignVehicle = async (adminId, slotId, vehicle) => {
  const adminData = await Admin.findById(adminId).populate({ path: 'cities', select: 'name' });
  const slot = await Slot.findOneAndUpdate({ _id: slotId, city: adminData.cities[0].id }, {
    vehicle,
  });
  return slot;
};
