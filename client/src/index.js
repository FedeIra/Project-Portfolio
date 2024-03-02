// Import external utilities:
import React from "react";
import { createRoot } from "react-dom";
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
axios.defaults.baseURL =
  // `https://project-portfolio-production-a234.up.railway.app/` ||
  "http://localhost:3000";

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
