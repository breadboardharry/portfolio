import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import ContactPage from "./components/pages/contact.page.tsx";
import HomePage from "./components/pages/home.page.tsx";
import ProjectPage from "./components/pages/project.page.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </App>
  </StrictMode>
);
