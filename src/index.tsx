/**
 * Dependencies
 */
import * as React from "react";
import { createRoot } from "react-dom";
import * as serviceWorker from "./serviceWorker";

/**
 * Components
 */
import { App } from "./containers/App";
import { AppProvider } from "context/app.context";
import { ToastProvider } from "react-toast-notifications";

/**
 * Styles
 */
import "./assets/styles/index.css";

/**
 * Set dark mode
 */
if (window.localStorage.getItem("dark-theme") === "true") {
  document.documentElement.classList.add("mode-dark");
}

const TARGET_NODE = "root";

const ROOT = document.getElementById(TARGET_NODE) as HTMLElement;

createRoot(ROOT).render(
  <ToastProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ToastProvider>
);

serviceWorker.unregister();
