// External packages:
import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import jwtService from 'jsonwebtoken';

// Internal packages:
import config from '../../config/config.js';
import { UserService } from '../user/userService.js';

// Create an instance of the UserService class:
const service = new UserService();

// AuthService class:
class AuthService {
  // Log user service:
  async logUser(username, password) {
    try {
      const user = await service.getUser(username);
      if (!user) {
        throw boom.notFound('Invalid username or password.');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw boom.unauthorized('Invalid username or password.');
      }
      return user;
    } catch (error) {
      if (error.isBoom) {
        throw error;
      }
      throw boom.internal(
        `Error during authentication process: ${error.message}.`
      );
    }
  }

  // Sign token service:
  async signToken(user) {
    try {
      const payload = {
        sub: user.id,
      };

      const token = jwtService.sign(payload, config.jwt_secret, {
        expiresIn: '1h',
      });

      // add date and hour to token for expiration:
      const tokenResponse = {
        token,
        expiration: new Date(Date.now() + 3600000),
        username: user.username,
      };

      return tokenResponse;
    } catch (error) {
      throw boom.internal(`Error signing token: ${error.message}.`);
    }
  }

  // Token refresh service:
  async refreshToken(token) {
    try {
      const decoded = jwtService.verify(token, config.jwt_secret);
      const user = await service.getUserById(decoded.sub);
      if (!user) {
        throw boom.unauthorized('Invalid token.');
      }
      const payload = {
        sub: user.id,
      };
      const newToken = jwtService.sign(payload, config.jwt_secret, {
        expiresIn: '1h',
      });
      return { token: newToken };
    } catch (error) {
      if (error.isBoom) {
        throw error;
      }
      throw boom.internal(`Error refreshing token: ${error.message}.`);
    }
  }
}

export default AuthService;
