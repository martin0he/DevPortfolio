import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";

const menuItems = ["about me", "experience", "projects", "contact"];

const RetroMenu: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setSelectedItem((prev) => Math.max(prev - 1, 0));
          break;
        case "ArrowDown":
          setSelectedItem((prev) => Math.min(prev + 1, menuItems.length - 1));
          break;
        case "Enter":
          handleEnter();
          break;
        default:
          break;
      }
    };

    const handleEnter = () => {
      // Simulate scrolling to corresponding sections based on selected item
      switch (selectedItem) {
        case 0:
          scrollToSection("about");
          break;
        case 1:
          scrollToSection("experience");
          break;
        case 2:
          scrollToSection("projects");
          break;
        case 3:
          scrollToSection("contact");
          break;
        default:
          break;
      }
    };

    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]); // Dependency on selectedItem to update event listener on change

  return (
    <Box p={2} position="fixed" bottom="10px" right="10px">
      <Grid container direction="column" spacing={1}>
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <Typography
              variant="h6"
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
