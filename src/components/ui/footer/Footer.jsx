import React, { Fragment } from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GenericResponsiveTypography } from "../../generic/GenericResponsiveTypography";

export const Footer = () => {
  return (
    <Fragment>
      <Box
        sx={{
          padding: { xs: '20px 15px', md: '35px 100px' },
          backgroundColor: 'primary.main',
          color: 'secondary.main',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Grid2 container spacing={{ xs: 1, md: 25 }} alignItems={'center'}>
          <Grid2 item>
            <GenericResponsiveTypography fontWeight={700}>Craft &</GenericResponsiveTypography>
            <GenericResponsiveTypography fontWeight={700}>Comfort</GenericResponsiveTypography>
          </Grid2>
          <Grid2 container item spacing={{ xs: 11, md: 25 }}>
            <Box>
              <Typography fontWeight={800} color="primary.lighter">Contact</Typography>
              <Typography variant="body2">craft&comfort@email.com</Typography>
              <Typography variant="body2">417-623-8766</Typography>
            </Box>
            <Box>
              <Typography fontWeight={800} color="primary.lighter" mb={0.4}>Social</Typography>
              <Stack direction={'row'} gap={1}>
                <FaFacebook size={'24px'} />
                <BsTwitterX size={'24px'} />
                <FaInstagram size={'24px'} />
              </Stack>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          padding: 1,
          backgroundColor: 'primary.darker',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Typography color="primary.lighter" variant="body2">© 2024 Craft & Comfort. All Rights Reserved</Typography>
      </Box>
    </Fragment>
  );
};