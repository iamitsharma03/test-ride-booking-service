const express = require('express');
const { errorLogger, failSafeHandler, formatErrorObject } = require('./src/utils/error.util');
const { errorMessages, errorCodes } = require('./src/constants/error');
const adminRoute = require('./src/routes/admin.route');
const locationRoute = require('./src/routes/location.route');
const slotRoute = require('./src/routes/slot.route');
const db = require('./src/config/db.config');

db.connect();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

// Add routes to the application
adminRoute(app);
slotRoute(app);
locationRoute(app);

app.get('/testBooking/v1/health', (req, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.use((req, res, next) => {
  const error = formatErrorObject({
    type: errorCodes.METHOD_NOT_FOUND,
    message: errorMessages.METHOD_NOT_FOUND,
    description: errorMessages.METHOD_NOT_FOUND,
    status: 404,
  });
  next(error);
});

// centralized error handler middleware for the app
app.use(errorLogger);
app.use(failSafeHandler);
module.exports = app;
