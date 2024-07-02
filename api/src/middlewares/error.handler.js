// Middlewares for handling errors:

// Handler for Boom errors:
const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

// Handler for generic errors:
const genericErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
};

export { boomErrorHandler, genericErrorHandler };
