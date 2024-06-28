// Import external libraries:
import axios from "axios";

// Action types:
export const LOGIN_ACTIONS = {
  REQUEST: "LOGIN_REQUEST",
  FAILURE: "LOGIN_FAILURE",
};

export const LOGOUT_ACTIONS = {
  REQUEST: "LOGOUT_REQUEST",
  FAILURE: "LOGOUT_FAILURE",
};

// Use route to log in:
export const logIn = (logForm) => {
  return async function (dispatch) {
    try {
      console.log(`INTENTADO LOGEAR ${JSON.stringify(logForm)}`);
      const response = await axios.post(`/login`, logForm);
      console.log("🚀 ~ response:", response);
      return dispatch({
        type: LOGIN_ACTIONS.REQUEST,
        payload: response.data,
      });
    } catch (error) {
      if (error.response.data === "Invalid username or password.") {
        return error.response.data;
      }
      return dispatch({
        type: LOGIN_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};

// Use route to log out:
export const logOut = () => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: LOGOUT_ACTIONS.REQUEST,
      });
    } catch (error) {
      return dispatch({
        type: LOGOUT_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};
