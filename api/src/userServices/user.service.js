import bcrypt from 'bcrypt';
import { UserModel } from '../Db/Schema/user.js';

class UserService {
  constructor() {}

  // service to create user:
  async createUser(data) {
    // Check if username exists:
    const existingUser = await this.getUser(data.userName);

    if (existingUser) {
      throw new Error('Username already exists.');
    }
    // hash password:
    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await UserModel.create({
      ...data,
      password: hash,
    });

    // return username without password:
    return {
      username: newUser.userName,
      createdAt: newUser.createdAt,
    };
  }

  // service to get user:
  async getUser(userName) {
    const existingUser = await UserModel.findOne({ userName });
    return existingUser;
  }

  // service to get user by id:
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
