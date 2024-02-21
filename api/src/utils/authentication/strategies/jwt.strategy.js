import { Strategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();
const { JWT_SECRET } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  if (!payload) {
    return done(new Error('Unauthorized'));
  }
  return done(null, payload);
});

export default JwtStrategy;
