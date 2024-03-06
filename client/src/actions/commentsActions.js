// Import external libraries:
import axios from "axios";

// Action types:
export const COMMENTS_ACTIONS = {
  READ_REQUEST: "COMMENTS_READ_REQUEST",
  READ_SUCCESS: "COMMENTS_READ_SUCCESS",
  READ_FAILURE: "COMMENTS_READ_FAILURE",
  POST_REQUEST: "COMMENT_POST_REQUEST",
  POST_SUCCESS: "COMMENT_POST_SUCCESS",
  POST_FAILURE: "COMMENT_POST_FAILURE",
};

// Use route to get comments:
export const getComments = () => async (dispatch) => {
  dispatch({ type: COMMENTS_ACTIONS.READ_REQUEST });
  try {
    const response = await axios.get(`/comments`);
    dispatch({
      type: COMMENTS_ACTIONS.READ_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_ACTIONS.READ_FAILURE,
      payload: error.message,
    });
  }
};

// Use route to post new comment:
export const postNewComment =
  ({ token, ...commentData }) =>
  async (dispatch) => {
    dispatch({ type: COMMENTS_ACTIONS.POST_REQUEST });
    try {
      const configHeader = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`/comments`, commentData, configHeader);
      dispatch({
        type: COMMENTS_ACTIONS.POST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: COMMENTS_ACTIONS.POST_FAILURE,
        payload: error.message,
      });
    }
  };
