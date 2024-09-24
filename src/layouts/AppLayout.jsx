import React from "react";
import { Box, Fade } from "@mui/material";

const AppLayout = ({ children, padding = { xs: '15px 15px', md: '20px 100px' } }) => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ padding: padding }}>
        {children}
      </Box>
    </Fade>
  );
};

export default AppLayout;