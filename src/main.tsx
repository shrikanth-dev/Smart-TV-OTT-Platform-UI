import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; 
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
  debug: true, // Show debug logs in the console
  visualDebug: false, // Highlight focused items for testing
  distanceCalculationMethod: 'center',
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
