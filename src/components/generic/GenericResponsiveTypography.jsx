import React from "react";
import { Typography } from "@mui/material";

export const GenericResponsiveTypography = (props) => {
  const {
    children,
    fontWeight = 600,
    ...otherProps
  } = props;

  return (
    <Typography
      {...otherProps}
      sx={{
        typography: { xs: 'h4', md: 'h3' },
        fontWeight: { xs: fontWeight, md: (fontWeight + 100) }
      }}
    >
      {children}
    </Typography>
  );
};