import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/shopcontext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ShopContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ShopContextProvider>
  </BrowserRouter>
);
