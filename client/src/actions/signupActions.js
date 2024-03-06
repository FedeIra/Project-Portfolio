// Import external libraries:
import axios from "axios";

// Action types:
export const SIGNUP_ACTIONS = {
  REQUEST: "SIGNUP_REQUEST",
  FAILURE: "SIGNUP_FAILURE",
};

// Use route to sign up:
export const signUp = (signForm) => {
  return async function (dispatch) {
    try {
      var json = await axios.post(`/sign-up`, signForm);
      return dispatch({
        type: SIGNUP_ACTIONS.REQUEST,
        payload: json.data,
      });
    } catch (error) {
      if (error.response.data === "Username already exists.") {
        return error.response.data;
      }
      dispatch({
        type: SIGNUP_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};
