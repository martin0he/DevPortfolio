import React from "react";
import { Typography, useTheme, useMediaQuery, Box } from "@mui/material";
import ThreeScene from "../components/ThreeScene";
import Typewriter from "typewriter-effect";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box display="flex" flexDirection="column">
      <Typography fontSize={43} fontWeight={600}>
        Hiya, I'm{" "}
        <span style={{ color: theme.palette.primary.main }}>Martin</span>. I'm a
        passionate{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          <Typewriter
            options={{
              delay: 70,
              strings: [
                "full stack developer.",
                "foodie.",
                "artist.",
                "engineer.",
                "cinephile.",
                "explorer.",
                "spider-man fan.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </Typography>

      {isLg && <ThreeScene />}
    </Box>
  );
};

export default HomePage;
