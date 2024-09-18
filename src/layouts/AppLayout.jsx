import React from "react";
import { Box, Fade } from "@mui/material";

const AppLayout = ({ children }) => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ padding: '20px 100px' }}>
        {children}
      </Box>
    </Fade>
  );
};

export default AppLayout;