import React from "react";
import { Box } from "@mui/material";
import { SHOW_IN_DESKTOP, SHOW_IN_MOBILE } from "../enums/generalEnum";

export const DisplayLayout = ({ isMobile = false, children }) => {
  return (
    <Box display={isMobile ? SHOW_IN_MOBILE : SHOW_IN_DESKTOP}>
      {children}
    </Box>
  );
};