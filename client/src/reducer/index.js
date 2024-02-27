// Import action types variables:
import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  GET_COMMENTS_DATA,
  SEND_COMMENT_REQUEST,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAILURE,
  ERROR_FOUND,
  SIGN_UP,
  SIGN_UP_FAILURE,
  LOG_IN,
  LOG_OUT,
} from '../actions/index.js';

// Set initial global state:
const initialState = {
  error: false,
  comments: [],
  user: {
    token: '',
    user: {
      userName: '',
      password: '',
    },
  },
};

// Create reducer functions:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        email: action.payload,
        loading: false,
      };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_COMMENT_REQUEST:
      return {
        ...state,
        loadingComment: true,
        errorComment: null,
      };
    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        loadingComment: false,
        postedComment: action.payload,
      };
    case SEND_COMMENT_FAILURE:
      return {
        ...state,
        loadingComment: false,
        errorComment: action.payload,
      };
    case GET_COMMENTS_DATA:
      return {
        ...state,
        comments: action.payload,
      };
    case ERROR_FOUND:
      return {
        ...state,
        error: true,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {
          token: '',
          user: {
            userName: '',
            password: '',
          },
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
