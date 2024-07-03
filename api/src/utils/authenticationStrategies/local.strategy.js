// External packages:
import { Strategy } from 'passport-local';

// Internal packages:
import LoginService from '../../services/authentication/login.service.js';

// Create an instance of the LoginService class:
const loginService = new LoginService();

// Local strategy:
const localStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      const user = await loginService.logUser(username, password);
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export default localStrategy;
