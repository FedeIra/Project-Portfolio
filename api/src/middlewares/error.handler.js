// middleware for errors with Boom library:
const boomErrorHandler = (err, req, res, next) => {
  console.log(`BOOM ERROR: ${err}`);
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
};

const genericErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
};

export { boomErrorHandler, genericErrorHandler };
