import passport from 'passport';

const authenticateJwt = passport.authenticate('jwt', { session: false });
const authenticateLocal = passport.authenticate('local', { session: false });

export { authenticateJwt, authenticateLocal };
