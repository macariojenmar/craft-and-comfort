import React from "react";
import { Stack } from "@mui/material";
import { GenericLink } from "../../generic/GenericLink";
import { NAVIGATION } from "../../../enums/generalEnum";
import { useLocation } from "react-router-dom";

export const PageList = () => {
  const { pathname: currentPath } = useLocation();
  return (
    <Stack direction={'row'} gap={2}>
      {
        NAVIGATION?.map((item, index) => {
          const isCurrentPath = (item?.path === currentPath);
          return (
            <GenericLink
              key={`link-key-${index}`}
              path={item?.path}
              text={item?.title}
              variant="body2"
              sx={{
                fontWeight: isCurrentPath && 800
              }}
            />
          )
        })
      }
    </Stack>
  );
};