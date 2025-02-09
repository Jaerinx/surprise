import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { AnimatePresence } from "motion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="Home" element={<Portfolio />} />
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
