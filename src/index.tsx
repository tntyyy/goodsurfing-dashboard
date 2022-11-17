import React from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "@/app/App";
import { setupStore } from "@/store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root")!);

const store = setupStore();

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(Root);
