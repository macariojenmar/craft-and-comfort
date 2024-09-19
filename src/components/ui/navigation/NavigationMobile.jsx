import React from "react";
import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { PageList } from "./PageList";

export const NavigationMobile = ({ openMenuDrawer, handleToggleMenuDrawer }) => {
  return (
    <Drawer
      anchor={'right'}
      open={openMenuDrawer}
      onClose={() => handleToggleMenuDrawer()}
      sx={{
        '.MuiPaper-root': {
          minWidth: '280px'
        }
      }}
    >
      <Box padding={'10px 20px'}>
        <Stack direction={'row'} alignItems={'center'} gap={0.5}>
          <GenericIconButton
            icon={<FaArrowLeft fontSize={'medium'} />}
            onClick={() => handleToggleMenuDrawer()}
          />
          <Typography variant="body2">Back</Typography>
        </Stack>
        <Divider sx={{ margin: '10px 0px' }} />
        <PageList isMobile={true} />
      </Box>
    </Drawer>
  );
};