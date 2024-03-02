// Import action types variables:
import {
  EMAIL_ACTIONS,
  COMMENTS_ACTIONS,
  ERROR_ACTION,
  SIGNUP_ACTIONS,
  LOGIN_ACTIONS,
  LOGOUT_ACTIONS,
} from "../actions/index.js";

// Initial global state:
const initialState = {
  error: false,
  comments: [],
  user: {
    token: "",
    user: {
      userName: "",
      password: "",
    },
  },
};

// Reducer function to update global state according to actions:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ACTIONS.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMAIL_ACTIONS.SUCCESS:
      return {
        ...state,
        email: action.payload,
        loading: false,
      };
    case EMAIL_ACTIONS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COMMENTS_ACTIONS.REQUEST:
      return {
        ...state,
        loadingComment: true,
        errorComment: null,
      };
    case COMMENTS_ACTIONS.SUCCESS:
      return {
        ...state,
        loadingComment: false,
        postedComment: action.payload,
      };
    case COMMENTS_ACTIONS.FAILURE:
      return {
        ...state,
        loadingComment: false,
        errorComment: action.payload,
      };
    case COMMENTS_ACTIONS.READ:
      return {
        ...state,
        comments: action.payload,
      };
    case ERROR_ACTION.FOUND:
      return {
        ...state,
        error: true,
      };
    case SIGNUP_ACTIONS.REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_ACTIONS.REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_ACTIONS.REQUEST:
      return {
        ...state,
        user: {
          token: "",
          user: {
            userName: "",
            password: "",
          },
        },
      };
    case SIGNUP_ACTIONS.FAILURE:
    case LOGIN_ACTIONS.FAILURE:
    case LOGOUT_ACTIONS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
