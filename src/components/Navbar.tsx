import { Box, Drawer, IconButton } from "@mui/material";
import RetroMenu from "./RetroMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = ({ setBlur }: { setBlur: (blur: boolean) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(true);
    setBlur(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setBlur(false);
  };

  return (
    <Box
      zIndex="100"
      width="wrap-content"
      position="fixed"
      bottom="0"
      right="0"
      padding="10px"
    >
      {!menuOpen && (
        <IconButton onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        sx={{ zIndex: 100, opacity: 0.9 }}
        anchor="bottom"
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <RetroMenu onClose={handleMenuClose} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
