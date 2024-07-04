// Import external libraries:
import axios from "axios";

// Action types:
export const LOGIN_ACTIONS = {
  REQUEST: "LOGIN_REQUEST",
  FAILURE: "LOGIN_FAILURE",
  SUCCESS: "LOGIN_SUCCESS",
};

export const LOGOUT_ACTIONS = {
  REQUEST: "LOGOUT_REQUEST",
  FAILURE: "LOGOUT_FAILURE",
  SUCCESS: "LOGOUT_SUCCESS",
};

// Use route to log in:
export const logIn = (logForm) => {
  return async function (dispatch) {
    dispatch({
      type: LOGIN_ACTIONS.REQUEST,
    });
    try {
      const response = await axios.post(`/login`, logForm);
      return dispatch({
        type: LOGIN_ACTIONS.SUCCESS,
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
    dispatch({
      type: LOGOUT_ACTIONS.REQUEST,
    });
    try {
      return dispatch({
        type: LOGOUT_ACTIONS.SUCCESS,
      });
    } catch (error) {
      return dispatch({
        type: LOGOUT_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};
