import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import jwtService from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserService } from './user.service.js';

const service = new UserService();

dotenv.config();
const { JWT_SECRET } = process.env;

class AuthService {
  // logUSer service
  async logUser(userName, password) {
    const user = await service.getUser(userName);
    if (!user) {
      throw boom.notFound('Invalid username or password.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.notFound('Invalid username or password.');
    }
    return user;
  }
  // authentication and signature of token service:
  async signToken(user) {
    const payload = {
      sub: user.id,
    };

    const token = jwtService.sign(payload, JWT_SECRET);

    return {
      token,
      user: {
        userName: user.userName,
      },
    };
  }
}

export default AuthService;
