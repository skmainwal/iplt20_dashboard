const handleResponse = (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({
    success,
    message,
    data
  });
};

const handleSuccess = (res, data) => {
  res.json(data);
};

const handleError = (res, error, statusCode = 500) => {
  console.error('Error:', error.message);
  res.status(statusCode).json({
    error: error.message,
    details: error.details || error.message
  });
};

module.exports = {
  handleResponse,
  handleSuccess,
  handleError
}; 