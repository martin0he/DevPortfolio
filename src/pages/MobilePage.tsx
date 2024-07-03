import { Box, Typography, useTheme } from "@mui/material";
import Typewriter from "typewriter-effect";

const MobilePage = () => {
  const theme = useTheme();
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      height="92vh"
      justifyContent="space-between"
      padding="20px"
    >
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

      <Typography
        fontSize="1.4rem"
        width="wrap-content"
        position="absolute"
        bottom="10px"
      >
        Please check out my portfolio on your desktop (phones won't do it
        justice) :]
      </Typography>
    </Box>
  );
};

export default MobilePage;
