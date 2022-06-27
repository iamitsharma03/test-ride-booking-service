const mongoose = require('mongoose');

const { Schema } = mongoose;

const admin = new Schema({
  name: {
    type: String,
    required: [true, 'Business Partner Name is Required'],
  },
  email: {
    type: String,
    required: [true, 'Email Address is Required'],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
  },
  cities: [{ type: Schema.Types.ObjectId, ref: 'City' }],
},
{ timestamps: true });

module.exports = mongoose.model('Admin', admin, 'admins');
