const mongoose = require('mongoose');

const { Schema } = mongoose;

const slot = new mongoose.Schema({
  city: { type: Schema.Types.ObjectId, ref: 'City' },
  testCenter: {
    type: Schema.Types.ObjectId,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  isBooked: {
    type: Boolean,
  },
  name: {
    type: String,
    required: [true, 'Name is Required'],
  },
  email: {
    type: String,
    required: [true, 'Email Address is Required'],
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  model: {
    type: Schema.Types.ObjectId, ref: 'VehicleModel',
  },
  vehicle: {
    type: Schema.Types.ObjectId, ref: 'Vehicle',
  },
  isHomeVisit: {
    type: Boolean,
  },
},
{ timestamps: true });

module.exports = mongoose.model('Slot', slot, 'slots');
