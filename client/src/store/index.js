// Import external libraries to create store:
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import root reducer:
import rootReducer from "../reducer/index.js";

// Create persistent configuration:
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "comments"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store:
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
