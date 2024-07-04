// Import all actions:
import { sendEmail } from "./emailActions.js";
import { getComments, postNewComment } from "./commentsActions.js";
import { signUp } from "./signupActions.js";
import { logIn, logOut } from "./loginActions.js";
import { getFile } from "./getFileAction.js";
import { refreshToken } from "./refreshTokenAction.js";

// Import all types:
import { EMAIL_ACTIONS } from "./emailActions.js";
import { COMMENTS_ACTIONS } from "./commentsActions.js";
import { SIGNUP_ACTIONS } from "./signupActions.js";
import { LOGIN_ACTIONS, LOGOUT_ACTIONS } from "./loginActions.js";
import { FILE_ACTIONS } from "./getFileAction.js";
import { REFRESH_TOKEN_ACTIONS } from "./refreshTokenAction.js";

// export actions and types:
export {
  sendEmail,
  getComments,
  postNewComment,
  signUp,
  logIn,
  logOut,
  getFile,
  refreshToken,
};
export {
  EMAIL_ACTIONS,
  COMMENTS_ACTIONS,
  SIGNUP_ACTIONS,
  LOGIN_ACTIONS,
  LOGOUT_ACTIONS,
  FILE_ACTIONS,
  REFRESH_TOKEN_ACTIONS,
};
