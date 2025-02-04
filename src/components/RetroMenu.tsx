/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const routes = ["home", "about me", "experience", "projects", "contact"];

const RetroMenu = ({ onClose }: { onClose: () => void }) => {
  const routeUrls = routes.map((route) =>
    route === "home" ? "/" : `/${route.replace(" ", "-")}`
  );
  const currentUrl = window.location.pathname;
  const [selectedIndex, setSelectedIndex] = useState(
    routeUrls.indexOf(currentUrl)
  );
  const navigate = useNavigate();

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % routes.length);
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? routes.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const theme = useTheme();

  return (
    <Box
      display="flex"
      padding="30px"
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="flex-start"
      alignItems="center"
      zIndex={100}
      backgroundColor={theme.palette.grey[900]}
    >
      <Typography fontSize={{ lg: 50, md: 42, sm: 36, xs: 30 }}>
        Explore <span style={{ color: "#55a1df" }}>My Portfolio</span>
      </Typography>
      <Box
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="20px"
        >
          {routes.map((route, index) => (
            <Box key={route} mx={1} marginBottom="8px">
              <NavLink
                to={route === "home" ? "/" : `/${route.replace(" ", "-")}`}
                style={{
                  display: "inline-block",
                  color: selectedIndex === index ? "#d88e2c" : "white",
                  textDecoration:
                    selectedIndex === index ? "underline" : "none",
                }}
                onClick={() => {
                  setSelectedIndex(index);
                  navigate(
                    route === "home" ? "/" : `/${route.replace(" ", "-")}`
                  );
                  onClose();
                }}
              >
                <Typography fontSize={{ lg: 29, md: 27, sm: 25, xs: 21 }}>
                  {route}
                </Typography>
              </NavLink>
            </Box>
          ))}
        </Box>
        <IconButton width="wrap-content" color="secondary" onClick={onClose}>
          <CloseIcon width="fit-content" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default RetroMenu;
