import React from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "@/app/App";

const root = createRoot(document.getElementById("root")!);

const Root = <App />;

root.render(Root);
