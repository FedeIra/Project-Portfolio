// External packages:
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import jwtService from 'jsonwebtoken';

// Internal packages:
import config from '../../config/config.js';
import { UserService } from '../user/user.service.js';

// Create an instance of the UserService class:
const service = new UserService();

// AuthService class:
class AuthService {
  // Log user service:
  async logUser(username, password) {
    const user = await service.getUser(username);
    if (!user) {
      throw boom.notFound('Invalid username or password.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized('Invalid username or password.');
    }
    return user;
  }
  // Sign token service:
  async signToken(user) {
    const payload = {
      sub: user.id,
    };

    const token = jwtService.sign(payload, config.jwt_secret);

    const tokenResponse = {
      token,
      user: user.username,
    };

    return tokenResponse;
  }
}

export default AuthService;
