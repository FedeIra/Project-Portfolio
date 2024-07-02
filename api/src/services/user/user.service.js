// External packages:
import bcrypt from 'bcrypt';
import Boom from '@hapi/boom';

// Internal packages:
import { UserModel } from '../../db/schemas/user.js';

// UserService class:
class UserService {
  constructor() {}

  // Service to create user:
  async createUser(data) {
    // Check if username exists:

    const existingUser = await this.getUser(data.username);

    if (existingUser) {
      throw Boom.badRequest('Username already exists');
    }

    // hash password:
    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await UserModel.create({
      ...data,
      password: hash,
    });

    // return username without password:
    return {
      username: newUser.username,
      createdAt: newUser.createdAt,
    };
  }

  // Service to get user:
  async getUser(username) {
    const existingUser = await UserModel.findOne({ username });
    return existingUser;
  }

  // Service to get user by id:
  async getUserById(id) {
    const user = await UserModel.findById(id);
    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
    };
  }
}

export { UserService };
