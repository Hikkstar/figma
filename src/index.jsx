import React from "react";
import ReactDOMClient from "react-dom/client";
import { Container } from "./screens/Container";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Container />);
