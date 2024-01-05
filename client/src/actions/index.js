import axios from "axios";

export const SEND_EMAIL_REQUEST = "SEND_EMAIL_REQUEST";
export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_FAILURE = "SEND_EMAIL_FAILURE";
export const GET_COMMENTS_DATA = "GET_COMMENTS_DATA";
export const POST_COMMENT = "POST_COMMENT";
export const ERROR_FOUND = "ERROR_FOUND";

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

// Use route to get comments:
export const getComments = (id) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/comments`);
      if (json.status === 204) {
        return dispatch({
          type: ERROR_FOUND,
        });
      }
      return dispatch({
        type: GET_COMMENTS_DATA,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_FOUND,
      });
    }
  };
};

// Use route to post new comment:
export const postNewComment = (commentId, userName, content, date) => {
  return async function (dispatch) {
    try {
      var json = await axios.post(`/comments`, {
        commentId,
        userName,
        content,
        date,
      });
      return dispatch({
        type: POST_COMMENT,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_FOUND,
      });
    }
  };
};
