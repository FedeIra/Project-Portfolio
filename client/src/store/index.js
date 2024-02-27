// Import utilities to create store:
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  timeout: 3600000,
  storage,
  whitelist: ['user', 'comments'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store:
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
