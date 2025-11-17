import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; 
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
  debug: true, 
  visualDebug: false, 
  distanceCalculationMethod: 'center',
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
