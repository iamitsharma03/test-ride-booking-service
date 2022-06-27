const adminService = require('../services/admin.service');
const { getResponseObject } = require('../utils/formatter.util');

exports.getSlots = async (req, res, next) => {
  try {
    const { adminId } = req.params;
    const data = await adminService.getSlots(adminId);
    const response = getResponseObject(null, data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.getVehicles = async (req, res, next) => {
  try {
    const { adminId, slotId } = req.params;
    const data = await adminService.getVehicles(adminId, slotId);
    const response = getResponseObject(null, data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

exports.assignVehicle = async (req, res, next) => {
  try {
    const { adminId, slotId } = req.params;
    const { vehicleId } = req.body;
    const data = await adminService.assignVehicle(adminId, slotId, vehicleId);
    const response = getResponseObject(null, data);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
