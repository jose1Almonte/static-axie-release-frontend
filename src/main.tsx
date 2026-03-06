import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Añadimos el basename con el nombre exacto de tu repo */}
    <BrowserRouter basename="/static-axie-release-frontend">
      <App />
    </BrowserRouter>
  </StrictMode>
);