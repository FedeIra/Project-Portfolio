// Import external libraries:
import axios from "axios";

// Action types:
export const EMAIL_ACTIONS = {
  POST_REQUEST: "EMAIL_POST_REQUEST",
  POST_SUCCESS: "EMAIL_POST_SUCCESS",
  POST_FAILURE: "EMAIL_POST_FAILURE",
};

// Use route to send email:
export const sendEmail = (form) => {
  return async function (dispatch) {
    dispatch({
      type: EMAIL_ACTIONS.POST_REQUEST,
    });
    try {
      const response = await axios.post("/sendEmail", form);
      dispatch({
        type: EMAIL_ACTIONS.POST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: EMAIL_ACTIONS.POST_FAILURE,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };
};
