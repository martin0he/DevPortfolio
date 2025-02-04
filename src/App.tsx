import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [isBlurred, setIsBlurred] = React.useState(false);
  return (
    <Router>
      <Navbar setBlur={setIsBlurred} />
      <Box
        padding="25px"
        display="flex"
        width="99vw"
        height="100%"
        overflowX="hidden"
        justifyContent="center"
        flexDirection="column"
        sx={{ filter: isBlurred ? "blur(5px)" : "none" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
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
