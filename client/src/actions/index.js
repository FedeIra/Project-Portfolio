// Import all actions:
import { sendEmail } from "./emailActions.js";
import { getComments, postNewComment } from "./commentsActions.js";
import { signUp } from "./signupActions.js";
import { logIn, logOut } from "./loginActions.js";

// Import all types:
import { EMAIL_ACTIONS } from "./emailActions.js";
import { ERROR_ACTION, COMMENTS_ACTIONS } from "./commentsActions.js";
import { SIGNUP_ACTIONS } from "./signupActions.js";
import { LOGIN_ACTIONS, LOGOUT_ACTIONS } from "./loginActions.js";

// export actions and types:
export { sendEmail, getComments, postNewComment, signUp, logIn, logOut };
export {
  EMAIL_ACTIONS,
  ERROR_ACTION,
  COMMENTS_ACTIONS,
  SIGNUP_ACTIONS,
  LOGIN_ACTIONS,
  LOGOUT_ACTIONS,
};
