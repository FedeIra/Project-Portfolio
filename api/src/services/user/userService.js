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
    try {
      const existingUser = await this.getUser(data.username);

      if (existingUser) {
        throw Boom.badRequest('Username already exists.');
      }

      // hash password:
      const hash = await this.hashPassword(data.password);

      const newUser = await UserModel.create({
        ...data,
        password: hash,
      });

      // return username without password:
      return {
        username: newUser.username,
        createdAt: newUser.createdAt,
      };
    } catch (error) {
      if (error.isBoom) {
        throw error;
      }
      throw Boom.internal(`Error creating user: ${error.message}.`);
    }
  }

  // Service to hash password:
  async hashPassword(password) {
    try {
      const saltRounds = 10;
      return await bcrypt.hash(password, saltRounds);
    } catch (error) {
      throw Boom.internal(`Error hashing password: ${error.message}.`);
    }
  }

  // Service to get user:
  async getUser(username) {
    try {
      const existingUser = await UserModel.findOne({ username });
      return existingUser;
    } catch (error) {
      throw Boom.internal(`Error getting user: ${error.message}.`);
    }
  }

  // Service to get user by id:
  async getUserById(id) {
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        throw Boom.notFound('User not found.');
      }
      return {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
      };
    } catch (error) {
      if (error.isBoom) {
        throw error;
      }
      throw Boom.internal(`Error getting user by id: ${error.message}`);
    }
  }
}

export { UserService };
