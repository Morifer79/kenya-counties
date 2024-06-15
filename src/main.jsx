import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from "./stylesheet/GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./stylesheet/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);