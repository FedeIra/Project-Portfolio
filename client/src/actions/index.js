import axios from "axios";

export const SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST";
export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILURE = "SEND_EMAIL_FAILURE";

// Use route to send email:
export const sendEmail = (form) => {
  return async function (dispatch) {
    dispatch({
      type: SEND_EMAIL_REQUEST,
    });
    try {
      await axios.post("/sendEmail", form);
      dispatch({
        type: SEND_EMAIL_SUCCESS,
        payload: form,
      });
    } catch (error) {
      dispatch({
        type: SEND_EMAIL_FAILURE,
        payload: error.message,
      });
    }
  };
};
