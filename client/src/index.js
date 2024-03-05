// Import external utilities:
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Import local utilities:
import { store } from "./store/index.js";
import App from "./App";
import { themeChakra } from "./utils/index.js";

// Set base URL for axios:
const baseURL =
  process.env.REACT_APP_BACKEND_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;

axios.defaults.baseURL = baseURL;

// Create persistor:
const persistor = persistStore(store);

// Render App component:
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider theme={themeChakra}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
