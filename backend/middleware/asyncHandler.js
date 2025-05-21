const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next); // Pass error to Express error handler
};

export default asyncHandler;
