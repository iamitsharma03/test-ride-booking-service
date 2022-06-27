/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const mongoose = require('mongoose');

const { MONGO_DB_URL } = process.env;
exports.connect = () => {
  mongoose.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.once('open', async () => {
  console.log('Connected to database');
  // Remove _id and __v from response
  mongoose.set('toJSON', {
    // include .id (it's a virtual field)
    virtuals: true,
    // exclude .__v
    versionKey: false,
    // exclude ._id
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  });
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to database  ', err);
});

exports.disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once('close', async () => {
    console.log('Diconnected  to database');
  });
};
