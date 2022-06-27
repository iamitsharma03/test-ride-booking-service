const getDataValidationMsg = (fields) => `Missing or invalid params: ${fields}`;

const getDuplicateDataMsg = (component, fields) => `${component} already exist with provided field(s) : ${fields}`;

exports.errorMessages = {
  METHOD_NOT_FOUND: 'Method not found',
  DEFAULT_MESSAGE: 'Something went wrong in Account Management.',
  USER_NOT_FOUND: 'Requested user not found',
  DATA_VALIDATION: getDataValidationMsg,
  DATA_DUPILCATION: getDuplicateDataMsg,
  RESOURCE_NOT_FOUND: 'Resource not found',
  QUEUE_PUBISH_FAILED: 'Failed to publish message in the queue',
  COMPANY_PROFILE_CREATION_FAILED: 'Something went wrong during Company profile creation',
  UNAUTHORIZED_ORG_RESOURCE_ACCESS: 'User is unauthorized to access the resource',
  FAILED_DELETE: 'Something went wrong while deleting the resource',
};

exports.errorCodes = {
  METHOD_NOT_FOUND: 'METHOD_NOT_FOUND',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  RESOURCE_NOT_AVAILABLE: 'RESOURCE_NOT_AVAILABLE',
  NOT_ALLOWED_REDO: 'NOT_ALLOWED_REDO',
  NOT_ALLOWED_ACTION: 'NOT_ALLOWED_ACTION',
  NOT_ALLOWED_EMPTY_DATA: 'NOT_ALLOWED_EMPTY_DATA',
  FAILED_UPDATE: 'FAILED_UPDATE',
  DATA_VALIDATION_ERR: 'DATA_VALIDATION_ERR',
  MISSING_DATA: 'MISSING_DATA',
  INVALID_JWT: 'INVALID_JWT',
  DATA_DUPILCATION: 'DATA_DUPILCATION',
  DB_VALIDATION_ERR: 'DB_VALIDATION_ERR',
  RESOURCE_EXISTS: 'RESOURCE_EXISTS',
  COGNITO_ERROR: 'COGNITO_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  QUEUE_PUBISH_FAILED: 'QUEUE_PUBISH_FAILED',
  COMPANY_PROFILE_CREATION_FAILED: 'COMPANY_PROFILE_CREATION_FAILED',
  UNAUTHORIZED_ORG_RESOURCE_ACCESS: 'UNAUTHORIZED_ORG_RESOURCE_ACCESS',
  FAILED_DELETE: 'FAILED_DELETE',
};
