import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/architecture" element={<App />} />
        <Route path="/web" element={<App />} />
        <Route path="/interactive" element={<App />} />
        <Route path="/graphic" element={<App />} />
        <Route path="/others" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
