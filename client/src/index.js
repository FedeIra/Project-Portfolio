// Import external utilities:
import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import local utilities:
import "./index.css";
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

// Render App component:
const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
