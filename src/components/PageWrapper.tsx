import { Box } from "@mui/material";
import { ReactFragment } from "react";

const PageWrapper = ({ children }: { children: ReactFragment }) => {
  return (
    <Box
      display="flex"
      width="calc(100vw - 170px)"
      height="100vh"
      padding="20px"
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
