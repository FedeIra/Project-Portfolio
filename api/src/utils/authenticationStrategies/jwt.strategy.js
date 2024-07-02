// External packages:
import { Strategy, ExtractJwt } from 'passport-jwt';
import Boom from '@hapi/boom';

// Internal packages:
import config from '../../config/config.js';

// Options for the JWT strategy:
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt_secret,
};

// JWT strategy:
const JwtStrategy = new Strategy(options, (payload, done) => {
  try {
    if (!payload) {
      return done(Boom.unauthorized('Unauthorized.'), false);
    }
    return done(null, payload);
  } catch (error) {
    return done(
      Boom.internal('An error occurred during token validation.'),
      false
    );
  }
});

export default JwtStrategy;
