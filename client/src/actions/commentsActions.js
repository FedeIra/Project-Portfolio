// Import external libraries:
import axios from "axios";

// Action types:
export const COMMENTS_ACTIONS = {
  READ: "COMMENTS_READ",
  REQUEST: "COMMENT_REQUEST",
  SUCCESS: "COMMENT_SUCCESS",
  FAILURE: "COMMENT_FAILURE",
};

export const ERROR_ACTION = {
  FOUND: "ERROR_FOUND",
};

// Use route to get comments:
export const getComments = (id) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/comments`);
      if (json.status === 204) {
        return dispatch({
          type: ERROR_ACTION.FOUND,
        });
      }
      return dispatch({
        type: COMMENTS_ACTIONS.READ,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_ACTION.FOUND,
      });
    }
  };
};

// Use route to post new comment:
export const postNewComment = (commentId, userName, content, date, token) => {
  return async function (dispatch) {
    dispatch({
      type: COMMENTS_ACTIONS.REQUEST,
    });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      var json = await axios.post(
        `/comments`,
        {
          commentId,
          userName,
          content,
          date,
        },
        config
      );
      return dispatch({
        type: COMMENTS_ACTIONS.SUCCESS,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: COMMENTS_ACTIONS.FAILURE,
        payload: error.message,
      });
    }
  };
};
