import * as React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

/**
 * Components
 */
import { App } from "./components/App";
import { AppProvider } from "context/app.context";

/**
 * Styles
 */
import "./assets/styles/index.css";

if (localStorage.getItem("theme") === "dark")
  document.documentElement.classList.add("mode-dark");

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
