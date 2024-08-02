import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  TrainerContextProvider,
  TRAINERS,
  HIGHLIGHT,
  PRICING
} from "./context/Trainer_Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TrainerContextProvider value={{ TRAINERS, HIGHLIGHT, PRICING }}>
    <App />
  </TrainerContextProvider>
);
