const mongoose = require('mongoose');

const { Schema } = mongoose;

const vehicleModel = new mongoose.Schema({
  name: {
    type: String,
  },
  picture: {
    type: String,
  },
  variants: [{
    type: String,
  }],
  price: {
    type: String,
  },
},
{ timestamps: true });

const vehicle = new mongoose.Schema({
  registrationNo: {
    type: String,
  },
  model: { type: Schema.Types.ObjectId, ref: 'VehicleModel' },
},
{ timestamps: true });

exports.VehicleModel = mongoose.model('VehicleModel', vehicleModel, 'vehicleModel');
exports.Vehicle = mongoose.model('Vehicle', vehicle, 'vehicle');
