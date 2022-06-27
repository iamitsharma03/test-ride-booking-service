const { errorCodes, errorMessages } = require('../constants/error');



exports.formatErrorObject = (params) => {
  const {
    type, message, description, status,
  } = params;
  const error = new Error();
  error.type = type;
  error.message = message;
  error.description = description;
  error.status = status;
  return error;
};

exports.errorLogger = (error, req, res, next) => { // for logging errors
  console.error(error.message);
  next(error); // forward to next middleware
};

// eslint-disable-next-line no-unused-vars
exports.failSafeHandler = (error, req, res, next) => { // generic handler
  const { type, status } = error;
  if (!type) {
    // eslint-disable-next-line no-param-reassign
    error = this.formatErrorObject({
      type: errorCodes.UNKNOWN_ERROR,
      message: errorMessages.DEFAULT_MESSAGE,
      description: error.message,
      status: 500,
    });
  }
  res.status(status || 500).send(error);
};
