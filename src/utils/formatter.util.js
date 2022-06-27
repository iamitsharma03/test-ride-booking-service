exports.getResponseObject = (message = null, response = null) => {
  const res = {
    status: true,
    message,
    response,
  };
  return res;
};

exports.parseBodyData = (req, res, next) => {
  req.body = JSON.parse(req.body.data);
  next();
};
