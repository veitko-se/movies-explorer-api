const BadRequestError = require('../errors/bad-request-err');
const { badRequestErrorMessage, unexpectedErrorMessage } = require('../utils/constants');

module.exports.badRequestErrorHandler = (err, req, res, next) => {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    next(new BadRequestError(badRequestErrorMessage(err.message)));
  } else {
    next(err);
  }
};

module.exports.unexpectedErrorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? unexpectedErrorMessage(message)
      : message,
  });
  next();
};
