import { extendTheme } from "@chakra-ui/react";

export const themeChakra = extendTheme({
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
