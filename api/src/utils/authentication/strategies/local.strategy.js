import { Strategy } from 'passport-local';
import LoginService from '../../../userServices/login.service.js';

const loginService = new LoginService();

const localStrategy = new Strategy(
  {
    usernameField: 'userName',
    passwordField: 'password',
  },
  async (userName, password, done) => {
    try {
      const user = await loginService.logUser(userName, password);
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
);

export default localStrategy;
