import React from "react";
import { Box } from "@mui/material";

import RetroMenu from "./components/RetroMenu";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Box padding="25px" marginLeft="20px">
      {/*<HomePage /> */}
      <RetroMenu />
      <AboutPage />
    </Box>
  );
};

export default App;
