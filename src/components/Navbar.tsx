import { Box, Drawer, IconButton } from "@mui/material";
import RetroMenu from "./RetroMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Box
      width="wrap-content"
      position="fixed"
      bottom="0"
      right="0"
      padding="10px"
    >
      {!menuOpen && (
        <IconButton onClick={() => setMenuOpen(true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor="bottom"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <RetroMenu />
      </Drawer>
    </Box>
  );
};

export default Navbar;
