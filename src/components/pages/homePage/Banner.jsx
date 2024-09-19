import React from "react";
import { Box, Button, Fade, Grid2, Stack, Typography } from "@mui/material";
import { BANNER } from "../../../enums/dummyData/dummyData";
import { arrayShuffler } from "../../../helpers/arrayHelper";

export const Banner = () => {
  return (
    <Fade in={true}>
      <Box sx={{ backgroundColor: 'primary.main', padding: '0px 300px', color: '#FFF' }}>
        <Grid2 container alignItems={'center'}>
          <Grid2 item size={{ xs: 6 }}>
            <Typography variant="h3" fontWeight={800} mb={1}>Lorem ipsum dolor sit amet consectetur adipiscing elit</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Typography>
            <Stack direction={'row'} gap={1} mt={2}>
              <Button variant="contained" color="secondary">Shop Now</Button>
              <Button variant="outlined" color="#FFF">Explore</Button>
            </Stack>
          </Grid2>
          <Grid2 container item size={{ xs: 6 }} justifyContent={'flex-end'}>
            {
              Object.values(arrayShuffler(BANNER))?.slice(0, 1)?.map((item, index) => {
                return (
                  <Box key={`banner-key-${index}`} sx={{ width: '550px', height: '400px' }}>
                    <img
                      src={item}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Box>
                );
              })
            }
          </Grid2>
        </Grid2>
      </Box>
    </Fade>
  );
};