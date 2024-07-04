// Import external libraries:
import axios from "axios";

// Action types:
export const REFRESH_TOKEN_ACTIONS = {
  REQUEST: "REFRESH_TOKEN_REQUEST",
  SUCCESS: "REFRESH_TOKEN_SUCCESS",
  FAILURE: "REFRESH_TOKEN_FAILURE",
};

export const refreshToken = (token) => async (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN_ACTIONS.REQUEST,
  });
  try {
    const response = await axios.post("/refresh-token", { token });
    dispatch({
      type: REFRESH_TOKEN_ACTIONS.SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: REFRESH_TOKEN_ACTIONS.FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
