import React from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";

const root = createRoot(document.getElementById('root')!);

const Root = (
    <h1>Start</h1>
);

root.render(Root);