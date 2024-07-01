import { useState } from "react";
import { Box, Typography, Grid, useTheme, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailForm from "../components/EmailForm";

const ContactPage = () => {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
        width: "72%",
        padding: "15px",
      }}
    >
      <Grid container spacing={2} maxWidth="lg">
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{
            [theme.breakpoints.down("md")]: {
              marginTop: "450px",
            },
          }}
        >
          <Link
            target="_blank"
            href="https://github.com/martin0he"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#1b1b1d",
              width: "100%",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                transition: "background-color 0.3s",
              },
            }}
          >
            <GitHubIcon sx={{ color: "white" }} />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/martin-hema"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#1b1b1d",
              width: "100%",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                transition: "background-color 0.3s",
              },
            }}
          >
            <LinkedInIcon sx={{ color: "white" }} />
          </Link>

          <Box
            sx={{
              borderRadius: "12px",
              backgroundColor: "#1b1b1d",
              width: "100%",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              position: "relative",
              "&:hover": {
                backgroundColor: theme.palette.grey[900],
                transition: "background-color 0.3s",
              },
            }}
            onMouseEnter={() => setIsPhoneHovered(true)}
            onMouseLeave={() => setIsPhoneHovered(false)}
          >
            <PhoneEnabledIcon
              sx={{
                opacity: isPhoneHovered ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <Typography
              fontSize="20px"
              sx={{
                position: "absolute",
                color: "white",
                opacity: isPhoneHovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              (617)-735-7961
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "12px",
              backgroundColor: "#1b1b1d",
              width: "100%",
              height: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              position: "relative",
              "&:hover": {
                backgroundColor: theme.palette.grey[900],
                transition: "background-color 0.3s",
              },
            }}
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            <EmailIcon
              sx={{
                opacity: isEmailHovered ? 0 : 1,
                transition: "opacity 0.3s",
              }}
            />
            <Typography
              fontSize="20px"
              sx={{
                position: "absolute",
                color: "white",
                opacity: isEmailHovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              martin.hema.mh@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <EmailForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
