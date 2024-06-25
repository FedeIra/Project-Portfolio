import { Strategy, ExtractJwt } from 'passport-jwt';
import config from '../../../../config.js';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt_secret,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  if (!payload) {
    return done(new Error('Unauthorized'));
  }
  return done(null, payload);
});

export default JwtStrategy;
