/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const routes = ["home", "about me", "experience", "projects", "contact"];

const RetroMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  useEffect(() => {
    const path =
      routes[selectedIndex] === "home"
        ? "/"
        : `/${routes[selectedIndex].replace(" ", "-")}`;
    navigate(path);
  }, [selectedIndex, navigate]);

  const theme = useTheme();
  const atLeastMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      flexDirection="row"
      position="fixed"
      bottom="5px"
      right="5px"
      padding="12px"
      alignItems="flex-end"
      zIndex="100"
    >
      {atLeastMd && (
        <Box marginRight="-30px" marginBottom="-10px">
          <Tooltip
            arrow
            title="Use arrow keys to navigate too!"
            placement="left"
          >
            <img
              width="33.4px"
              height="70px"
              src="arrowkeys.png"
              alt="Arrow Keys"
            />
          </Tooltip>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent={atLeastMd ? "flex-end" : "center"}
        flexDirection="column"
        textAlign="right"
      >
        {routes.map((route, index) => (
          <Box key={route} mx={1}>
            <NavLink
              to={route === "home" ? "/" : `/${route.replace(" ", "-")}`}
              style={{
                display: "inline-block",
                color: selectedIndex === index ? "#d88e2c" : "white",
                textDecoration: selectedIndex === index ? "underline" : "none",
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <Typography>{route}</Typography>
            </NavLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RetroMenu;
