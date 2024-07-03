import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Box padding="25px" marginLeft="20px">
      {!isMobile && <RetroMenu setCurrentPage={setCurrentPage} />}
      {currentPage === "home" && !isMobile && <HomePage />}
      {currentPage === "home" && isMobile && <MobilePage />}
      {currentPage === "about me" && <AboutPage />}
      {currentPage === "experience" && <ExperiencePage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "contact" && <ContactPage />}
    </Box>
  );
};

export default App;
