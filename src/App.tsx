import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ThreeScene from "./ThreeScene";
import Typewriter from "typewriter-effect";
import RetroMenu from "./components/RetroMenu";

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Grid container flexDirection="row">
          <Grid item xs={6} padding="25px" marginLeft="20px">
            <Typography fontSize={43} fontWeight={600}>
              Hi, I'm{" "}
              <span style={{ color: theme.palette.primary.main }}>Martin</span>.
              I'm a passionate{" "}
              <span style={{ color: theme.palette.secondary.main }}>
                <Typewriter
                  options={{
                    delay: "natural",
                    strings: [
                      "full stack developer.",
                      "foodie.",
                      "artist.",
                      "engineer.",
                      "film watcher.",
                      "explorer.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ThreeScene />
          </Grid>
        </Grid>
      </Box>
      <RetroMenu />
    </>
  );
};

export default App;
