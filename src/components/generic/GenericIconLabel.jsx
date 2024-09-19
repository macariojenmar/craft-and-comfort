import { Stack, Typography } from "@mui/material";
import React from "react";

export const GenericIconLabel = ({ startIcon, endIcon, label, select, ...others }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      gap={0.5}
      {...others}
      sx={{
        cursor: select && 'pointer'
      }}
    >
      {startIcon}
      <Typography variant="body2">{label}</Typography>
      {endIcon}
    </Stack>
  );
};