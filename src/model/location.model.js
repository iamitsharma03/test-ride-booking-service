const mongoose = require('mongoose');

const { Schema } = mongoose;

const testCenterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: { type: Number, ref: 'City' },
});

const countrySchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: { type: String },
  states: [{ type: Number, ref: 'State' }],
});

const stateSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: { type: String },
  cities: [{ type: Number, ref: 'City' }],
  country: { type: Number, ref: 'Country' },
});

const citySchema = new mongoose.Schema({
  name: { type: String },
  state: { type: Number, ref: 'State' },
  testCenters: [testCenterSchema],
  coordinates: {
    type: [Number],
  },
});

exports.Country = mongoose.model('Country', countrySchema);
exports.State = mongoose.model('State', stateSchema);
exports.City = mongoose.model('City', citySchema);
