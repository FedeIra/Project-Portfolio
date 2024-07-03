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
    try {
      const user = await service.getUser(username);
      if (!user) {
        console.log('Invalid username or password.');
        throw boom.notFound('Invalid username or password.');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw boom.unauthorized('Invalid username or password.');
      }
      return user;
    } catch (error) {
      if (error.isBoom) {
        throw error; // TODO: usar throw error en los demas!!!!
      } else {
        throw boom.internal('Error during authentication process');
      }
    }
  }

  // Sign token service:
  async signToken(user) {
    const payload = {
      sub: user.id,
    };

    const token = jwtService.sign(payload, config.jwt_secret, {
      expiresIn: '1h',
    });

    const tokenResponse = {
      token,
      user: user.username,
    };

    return tokenResponse;
  }
}

export default AuthService;
