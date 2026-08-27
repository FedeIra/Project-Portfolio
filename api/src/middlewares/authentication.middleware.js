import Boom from '@hapi/boom';
import passport from 'passport';

// Passport middleware to authenticate requests using JWT:
const authenticateJwt = passport.authenticate('jwt', { session: false });

// Passport middleware to authenticate requests using local strategy:
const authenticateLocal = passport.authenticate('local', { session: false });

// Middleware to authenticate admin-only requests using a fixed key:
const authenticateAdminKey = (req, res, next) => {
  const key = req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_UPLOAD_KEY) {
    return next(Boom.unauthorized('Invalid or missing admin key'));
  }
  next();
};

export { authenticateJwt, authenticateLocal, authenticateAdminKey };
