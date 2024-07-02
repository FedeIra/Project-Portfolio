// External packages:
import { Strategy, ExtractJwt } from 'passport-jwt';

// Internal packages:
import config from '../../config/config.js';

// Options for the JWT strategy:
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: String(config.jwt_secret),
};

// JWT strategy:
const JwtStrategy = new Strategy(options, (payload, done) => {
  if (!payload) {
    return done(new Error('Unauthorized'));
  }
  return done(null, payload);
});

export default JwtStrategy;
