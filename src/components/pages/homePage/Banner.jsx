import React from "react";
import { Box, Button, Fade, Grid2, Stack, Typography } from "@mui/material";
import { BANNER } from "../../../enums/dummyData/dummyData";
import { arrayShuffler } from "../../../helpers/arrayHelper";
import { GenericResponsiveTypography } from "../../generic/GenericResponsiveTypography";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <Fade in={true}>
      <Box sx={{ backgroundColor: 'primary.main', padding: { md: '0px 100px', lg: '0px 300px' }, color: '#FFF' }}>
        <Grid2 container alignItems={'center'} spacing={1} direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid2 item size={{ xs: 12, md: 6 }} padding={{ xs: '15px 15px', md: '0px' }}>
            <GenericResponsiveTypography fontWeight={800} mb={1}>Simplicity & Elegance in Every Modern Piece</GenericResponsiveTypography>
            <Typography>Discover furniture that blends modern minimalism with timeless class. Each piece is designed to bring elegance, comfort, and style to your space. Elevate your home with our curated collection today.</Typography>
            <Stack direction={'row'} gap={1} mt={2}>
              <Button variant="contained" color="secondary" onClick={() => navigate('/shop')}>Shop Now</Button>
              <Button variant="outlined" color="#FFF">Explore</Button>
            </Stack>
          </Grid2>
          <Grid2 container item size={{ xs: 12, md: 6 }} justifyContent={'flex-end'}>
            {
              Object.values(arrayShuffler(BANNER))?.slice(0, 1)?.map((item, index) => {
                return (
                  <Box
                    key={`banner-key-${index}`}
                    sx={{
                      width: '550px',
                      height: { xs: '300px', md: '340px', lg: '400px' },
                    }}
                  >
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