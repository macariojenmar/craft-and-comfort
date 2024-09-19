import { Box, Grid2, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { PageList } from "./PageList";
import { LuSearch } from "react-icons/lu";
import { SHADOWS } from "../../../enums/themeEnums";
import { NavigationButtonList } from "./NavigationButtonList";
import { SHOW_IN_DESKTOP } from "../../../enums/generalEnum";
import { NavigationMobile } from "./NavigationMobile";
import { DisplayLayout } from "../../../layouts/DisplayLayout";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { IoMenu } from "react-icons/io5";

const NavigationBar = () => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const handleToggleMenuDrawer = () => {
    setOpenMenuDrawer(prev => !prev);
  };

  return (
    <Fragment>
      <Grid2
        container
        alignItems={'center'}
        sx={{ padding: { xs: '15px 15px', md: '20px 100px' } }}
        spacing={1}
      >
        <Grid2 item size={{ xs: 6, md: 4 }}>
          <Typography variant="h6" fontWeight={800} color={'primary'}>Craft & Comfort</Typography>
        </Grid2>
        <Grid2 container item size={{ xs: 6 }} justifyContent={'flex-end'} display={{ md: 'none' }}>
          <NavigationButtonList />
          <DisplayLayout isMobile={true}>
            <GenericIconButton
              icon={<IoMenu />}
              onClick={() => handleToggleMenuDrawer()}
            />
          </DisplayLayout>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <Box sx={{ backgroundColor: '#FFF', borderRadius: '10px', boxShadow: SHADOWS.default }}>
            <TextField
              placeholder="Search furniture here"
              fullWidth
              size="small"
              sx={{
                '& fieldset': {
                  border: 'none'
                },
              }}
              slotProps={{
                input: {
                  endAdornment: <LuSearch />,
                },
              }}
            />
          </Box>
        </Grid2>
        <Grid2 container item size={{ xs: 4 }} justifyContent={'flex-end'} display={SHOW_IN_DESKTOP}>
          <NavigationButtonList />
        </Grid2>
        <Grid2 container item size={{ xs: 12 }} justifyContent={'center'} mt={1} display={SHOW_IN_DESKTOP}>
          <PageList />
        </Grid2>
      </Grid2>
      <NavigationMobile
        openMenuDrawer={openMenuDrawer}
        handleToggleMenuDrawer={handleToggleMenuDrawer}
      />
    </Fragment>
  );
};

export default NavigationBar;