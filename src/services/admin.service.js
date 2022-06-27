const adminRepo = require('../repo/admin.repo');

exports.getSlots = async (adminId) => adminRepo.getAdminSlots(adminId);

exports.getVehicles = async (adminId, slotId) => adminRepo.getVehicles(adminId, slotId);

exports.assignVehicle = async (adminId, slotId, vehicleId) => adminRepo.assignVehicle(adminId, slotId, vehicleId);
