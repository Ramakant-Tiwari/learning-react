import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ContextProvider from "./components/AppContext.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
