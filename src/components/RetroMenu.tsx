import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

const menuItems = ["home", "about me", "experience", "projects", "contact"];

interface RetroMenuProps {
  setCurrentPage: (page: string) => void;
}

const RetroMenu: React.FC<RetroMenuProps> = ({ setCurrentPage }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setSelectedItem((prev) => {
            const newIndex = Math.max(prev - 1, 0);
            setCurrentPage(menuItems[newIndex]);
            return newIndex;
          });
          break;
        case "ArrowDown":
          setSelectedItem((prev) => {
            const newIndex = Math.min(prev + 1, menuItems.length - 1);
            setCurrentPage(menuItems[newIndex]);
            return newIndex;
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setCurrentPage]);

  return (
    <Box p={2} position="fixed" bottom="10px" right="10px">
      <Grid container direction="column" spacing={1}>
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <Typography
              variant="h7"
              style={{
                textDecoration: index === selectedItem ? "underline" : "none",
                color: index === selectedItem ? "#d88e2c" : "white",
              }}
            >
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RetroMenu;
