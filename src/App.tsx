import React, { useState } from "react";
import { Box } from "@mui/material";

import RetroMenu from "./components/RetroMenu";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Box padding="25px" marginLeft="20px">
      <RetroMenu setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "about me" && <AboutPage />}
      {currentPage === "experience" && <ExperiencePage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "contact" && <ContactPage />}
    </Box>
  );
};

export default App;
