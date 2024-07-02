// External packages:
import passport from 'passport';

// Internal packages:
import LocalStrategy from '../utils/authenticationStrategies/local.strategy.js';
import JwtStrategy from '../utils/authenticationStrategies/jwt.strategy.js';

// Use local and JWT strategies:
passport.use(LocalStrategy);
passport.use(JwtStrategy);

export default passport;
