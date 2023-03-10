import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Icon from "./icon/Icon";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Icon />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();
