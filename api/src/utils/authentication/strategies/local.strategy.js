import { Strategy } from 'passport-local';
import LoginService from '../../../userServices/login.service.js';

const loginService = new LoginService();

const localStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      const user = await loginService.logUser(username, password);
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

export default localStrategy;
