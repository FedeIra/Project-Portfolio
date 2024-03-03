// Import external utilities:
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// Import local utilities:
import { store } from "./store/index.js";
import App from "./App";

// Define and export theme for Chakra UI:
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#172139",
        color: "white",
      },
    }),
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});

// Set base URL for axios:
const PRODUCTION_URL = process.env.REACT_APP_PRODUCTION_URL;
const DEVELOPMENT_URL = process.env.REACT_APP_DEVELOPMENT_URL;

axios.defaults.baseURL = PRODUCTION_URL || DEVELOPMENT_URL;

// Render App component:
const root = createRoot(document.getElementById("root"));
let persistor = persistStore(store);

root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
