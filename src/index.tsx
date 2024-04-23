import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Update the mount function to accept an optional props parameter
const mount = (el: HTMLElement, props?: Record<string, unknown>): void => {
  ReactDOM.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
    el
  );
};

// In development, call mount directly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("root");
  if (devRoot) {
    // Pass any initial props as needed for development
    mount(devRoot, {
      /* initial props, e.g., initialTodos */
    });
  }
}

// Export the mount function for use in a host application
export { mount };
