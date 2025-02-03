import React from "react";
import { Typography, useTheme, useMediaQuery, Box, Link } from "@mui/material";
import ThreeScene from "../components/ThreeScene";
import Typewriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      height="100%"
      overflow="hidden"
      justifyContent="flex-start"
      width="100%"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection="row"
        columnGap="60px"
      >
        <Typography
          fontSize={{ lg: 50, md: 45, sm: 40, xs: 35 }}
          fontWeight={600}
        >
          Hiya, I'm{" "}
          <span style={{ color: theme.palette.primary.main }}>Martin</span>. I'm
          a passionate{" "}
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

        <Box display="flex" flexDirection="column" columnGap="10px">
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

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        height={isSmall ? "60%" : "90%"}
        width="100%"
        marginTop={isSmall ? "0" : "50px"}
      >
        <ThreeScene />
      </Box>
    </Box>
  );
};

export default HomePage;
