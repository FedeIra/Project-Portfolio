// Middlewares for handling errors:

// Handler for Boom errors:
const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json({
      statusCode: output.payload.statusCode || 500,
      error: output.payload.error || 'Internal Server Error',
      message: err.message || 'Error',
    });
  }
  next(err);
};

// Handler for generic errors:
const genericErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ statusCode: status, error: 'Error', message });
};

export { boomErrorHandler, genericErrorHandler };
