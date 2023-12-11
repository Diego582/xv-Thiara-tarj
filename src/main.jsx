import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#253c53",
    },
    secondary: {
      main: "#f93c3c",
    },
    tertiary: {
      main: "#A37F43",
    },
    fourth: {
      main: "#232323",
    },
    textFielfWhite: {
      main: "#ffffff",
    },
    colorsCards: {
      main: "#CFE324",
    },
    primarySignup: {
      main: "#72733B",
    },
    secondarySignup: {
      main: "#D9B218",
    },
    error: {
      main: "#F04835",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
