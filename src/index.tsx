/**
 * Dependencies
 */
import * as React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

/**
 * Components
 */
import { App } from "./components/App";
import { AppProvider } from "context/app.context";
import { ToastProvider } from "react-toast-notifications";

/**
 * Styles
 */
import "./assets/styles/index.css";
import Snackbar from "components/layout/Notifications/Snackbar";

if (window.localStorage.getItem("dark-theme") === "true")
  document.body.setAttribute("dark", "");

render(
  <AppProvider>
    <ToastProvider components={{ Toast: Snackbar }} placement="bottom-center">
      <App />
    </ToastProvider>
  </AppProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
