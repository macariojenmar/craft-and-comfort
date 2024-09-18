import { Box, Grid2, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { PageList } from "./PageList";
import { LuSearch } from "react-icons/lu";
import { SHADOWS } from "../../../enums/themeEnums";
import { NavigationButtonList } from "./NavigationButtonList";

const NavigationBar = () => {
  return (
    <Grid2
      container
      alignItems={'center'}
      sx={{ padding: '20px 100px' }}
      spacing={2}
    >
      <Grid2 item size={{ xs: 4 }}>
        <Typography variant="h6" fontWeight={800} color={'primary'}>Craft & Comfort</Typography>
      </Grid2>
      <Grid2 item size={{ xs: 4 }}>
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
      <Grid2 container item size={{ xs: 4 }} justifyContent={'flex-end'}>
        <NavigationButtonList />
      </Grid2>
      <Grid2 container item size={{ xs: 12 }} justifyContent={'center'}>
        <PageList />
      </Grid2>
    </Grid2>
  );
};

export default NavigationBar;