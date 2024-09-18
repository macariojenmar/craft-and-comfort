import React from "react";
import { IconButton, Tooltip } from "@mui/material";

export const GenericIconButton = (props) => {
  const {
    icon,
    tooltip,
    cursor = 'pointer',
    ...others
  } = props;

  return (
    <Tooltip title={tooltip}>
      <IconButton {...others} sx={{ cursor: cursor }}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};