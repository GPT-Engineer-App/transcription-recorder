import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e8f0fe",
      100: "#c4d9fd",
      200: "#a0c2fc",
      300: "#7cabfb",
      400: "#5794fa",
      500: "#357df9",
      600: "#2869e6",
      700: "#1b54d4",
      800: "#0e40c1",
      900: "#072ca9",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
