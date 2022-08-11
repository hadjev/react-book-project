import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { SidebarProvider } from "./context/sidebarContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
