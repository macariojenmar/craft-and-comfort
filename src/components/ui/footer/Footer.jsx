import React, { Fragment } from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const Footer = () => {
  return (
    <Fragment>
      <Box
        sx={{
          padding: '35px 100px',
          backgroundColor: 'primary.main',
          height: 200,
          color: 'secondary.main',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Grid2 container spacing={25} alignItems={'center'}>
          <Grid2 item>
            <Typography variant="h2" fontWeight={800}>Craft & </Typography>
            <Typography variant="h2" fontWeight={800}>Comfort</Typography>
          </Grid2>
          <Grid2 container item>
            <Box>
              <Typography fontWeight={800} color="#A56C6E">Contact</Typography>
              <Typography>craft&comfort@email.com</Typography>
              <Typography>417-623-8766</Typography>
            </Box>
            <Box>
              <Typography fontWeight={800} color="#A56C6E" mb={0.4}>Social</Typography>
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
          height: 35,
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Typography color="#A56C6E">© 2024 Craft & Comfort. All Rights Reserved</Typography>
      </Box>
    </Fragment>
  );
};