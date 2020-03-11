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
import { ModalProvider } from "context/modal/modal.context";

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
  <AppProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AppProvider>
);

serviceWorker.unregister();
