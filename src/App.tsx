import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import { isMobile } from "react-device-detect";
import RetroMenu from "./components/RetroMenu";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import MobilePage from "./pages/MobilePage";

const App: React.FC = () => {
  return (
    <Router>
      <Box
        padding="25px"
        display="flex"
        width="calc(100vw - 180px)"
        marginLeft="20px"
      >
        {!isMobile && <RetroMenu />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={isMobile ? <MobilePage /> : <HomePage />}
          />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
