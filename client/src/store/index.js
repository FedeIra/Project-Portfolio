// Import utilities to create store:
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index.js";

// Create store:
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
