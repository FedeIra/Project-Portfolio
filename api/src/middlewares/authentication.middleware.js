import passport from 'passport';

// Passport middleware to authenticate requests using JWT:
const authenticateJwt = passport.authenticate('jwt', { session: false });

// Passport middleware to authenticate requests using local strategy:
const authenticateLocal = passport.authenticate('local', { session: false });

export { authenticateJwt, authenticateLocal };
