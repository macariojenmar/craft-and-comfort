import { Box } from "@mui/material";
import React from "react";
import { SHADOWS } from "../../enums/themeEnums";

export const GenericImageBox = (props) => {
  const {
    image,
    height = {
      xs: '320px',
      md: '260px'
    },
    borderRadius = '10px'
  } = props;

  return (
    <Box
      sx={{
        height: height,
        mb: 1,
        backgroundColor: '#dadada',
        borderRadius: borderRadius,
      }}
    >
      <img
        src={image}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: borderRadius,
          boxShadow: SHADOWS.default
        }}
      />
    </Box>
  );
};