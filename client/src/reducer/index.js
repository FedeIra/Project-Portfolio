// Import action types variables:
import {
  EMAIL_ACTIONS,
  COMMENTS_ACTIONS,
  SIGNUP_ACTIONS,
  LOGIN_ACTIONS,
  LOGOUT_ACTIONS,
  FILE_ACTIONS,
  REFRESH_TOKEN_ACTIONS,
} from "../actions/index.js";

// Initial global state:
const initialState = {
  error: {},
  loading: {},
  comments: [],
  user: {
    expiration: null,
    token: null,
    username: null,
  },
};

// Reducer function to update global state according to actions:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_ACTIONS.POST_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [EMAIL_ACTIONS.POST_REQUEST]: true },
        error: { ...state.error, [EMAIL_ACTIONS.POST_FAILURE]: null },
      };
    case EMAIL_ACTIONS.POST_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [EMAIL_ACTIONS.POST_REQUEST]: false },
      };
    case EMAIL_ACTIONS.POST_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [EMAIL_ACTIONS.POST_REQUEST]: false },
        error: {
          ...state.error,
          [EMAIL_ACTIONS.POST_FAILURE]: action.payload,
        },
      };
    case COMMENTS_ACTIONS.POST_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.POST_REQUEST]: true },
        error: { ...state.error, [COMMENTS_ACTIONS.POST_FAILURE]: null },
      };
    case COMMENTS_ACTIONS.POST_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.POST_REQUEST]: false },
        comments: [action.payload, ...state.comments],
      };
    case COMMENTS_ACTIONS.POST_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.POST_REQUEST]: false },
        error: {
          ...state.error,
          [COMMENTS_ACTIONS.POST_FAILURE]: action.payload,
        },
      };
    case COMMENTS_ACTIONS.READ_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.READ_REQUEST]: true },
      };
    case COMMENTS_ACTIONS.READ_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.READ_REQUEST]: false },
        comments: action.payload,
      };
    case COMMENTS_ACTIONS.READ_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [COMMENTS_ACTIONS.READ_REQUEST]: false },
        error: {
          ...state.error,
          [COMMENTS_ACTIONS.READ_REQUEST]: action.payload,
        },
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
    case LOGIN_ACTIONS.SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_ACTIONS.REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_ACTIONS.SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_ACTIONS.FAILURE:
      return {
        ...state,
        error: { ...state.error, [SIGNUP_ACTIONS.FAILURE]: action.payload },
      };
    case LOGIN_ACTIONS.FAILURE:
      return {
        ...state,
        error: { ...state.error, [LOGIN_ACTIONS.FAILURE]: action.payload },
      };
    case LOGOUT_ACTIONS.FAILURE:
      return {
        ...state,
        error: { ...state.error, [LOGOUT_ACTIONS.FAILURE]: action.payload },
      };
    case FILE_ACTIONS.GET_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [FILE_ACTIONS.GET_REQUEST]: true },
        error: { ...state.error, [FILE_ACTIONS.GET_FAILURE]: null },
      };
    case FILE_ACTIONS.GET_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [FILE_ACTIONS.GET_REQUEST]: false },
        file: action.payload,
      };
    case FILE_ACTIONS.GET_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [FILE_ACTIONS.GET_REQUEST]: false },
        error: { ...state.error, [FILE_ACTIONS.GET_FAILURE]: action.payload },
      };
    case REFRESH_TOKEN_ACTIONS.REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [REFRESH_TOKEN_ACTIONS.REQUEST]: true },
        error: { ...state.error, [REFRESH_TOKEN_ACTIONS.FAILURE]: null },
      };
    case REFRESH_TOKEN_ACTIONS.SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [REFRESH_TOKEN_ACTIONS.REQUEST]: false },
        token: action.payload.token,
      };
    case REFRESH_TOKEN_ACTIONS.FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [REFRESH_TOKEN_ACTIONS.REQUEST]: false },
        error: {
          ...state.error,
          [REFRESH_TOKEN_ACTIONS.FAILURE]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
