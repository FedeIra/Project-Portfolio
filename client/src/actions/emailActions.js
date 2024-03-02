// Import external libraries:
import axios from "axios";

// Action types:
export const EMAIL_ACTIONS = {
  REQUEST: "EMAIL_REQUEST",
  SUCCESS: "EMAIL_SUCCESS",
  FAILURE: "EMAIL_FAILURE",
};

// Use route to send email:
export const sendEmail = (form) => {
  return async function (dispatch) {
    dispatch({
      type: EMAIL_ACTIONS.REQUEST,
    });
    try {
      await axios.post("/sendEmail", form);
      dispatch({
        type: EMAIL_ACTIONS.SUCCESS,
        payload: form,
      });
    } catch (error) {
      dispatch({
        type: EMAIL_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};
