import React from "react";
import { Typography, useTheme, useMediaQuery, Box, Link } from "@mui/material";
import ThreeScene from "../components/ThreeScene";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box display="flex" flexDirection="column">
      <Typography fontSize={43} fontWeight={600}>
        Hiya, I'm{" "}
        <span style={{ color: theme.palette.primary.main }}>Martin</span>. I'm a
        passionate{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          <Typewriter
            options={{
              delay: 40,
              deleteSpeed: 25,
              strings: [
                "full stack developer.",
                "foodie.",
                "artist.",
                "engineer.",
                "cinephile.",
                "explorer.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </Typography>

      {!isMd && <ThreeScene />}
      <Box
        position="absolute"
        top={isMd ? "auto" : "25px"}
        bottom={isMd ? "10px" : "auto"}
        left={isMd ? "35px" : "auto"}
        right={isMd ? "auto" : "25px"}
        display="flex"
        flexDirection="column"
        columnGap="10px"
      >
        <Link target="_blank" href="https://github.com/martin0he">
          <GitHubIcon
            color="secondary"
            sx={{
              "&:hover": { color: theme.palette.secondary.dark },
              transition: "color 0.3s",
            }}
          />
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/martin-hema">
          <LinkedInIcon
            color="primary"
            sx={{
              "&:hover": { color: theme.palette.primary.dark },
              transition: "color 0.3s",
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
