// Import external libraries:
import axios from "axios";

// Action type:
export const FILE_ACTIONS = {
  GET_REQUEST: "FILE_GET_REQUEST",
  GET_SUCCESS: "FILE_GET_SUCCESS",
  GET_FAILURE: "FILE_GET_FAILURE",
};

// Use route to get file:
export const getFile = (token, fileName) => async (dispatch) => {
  dispatch({ type: FILE_ACTIONS.GET_REQUEST });
  try {
    const response = await axios.get(
      `/downloadFile/${encodeURIComponent(fileName)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );

    window.open(url, "_blank");

    dispatch({
      type: FILE_ACTIONS.GET_SUCCESS,
      payload: response.data.url,
    });
  } catch (error) {
    dispatch({
      type: FILE_ACTIONS.GET_FAILURE,
      payload: error.message,
    });
  }
};
