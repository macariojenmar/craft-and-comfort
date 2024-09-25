import React from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Grid2, Stack, Typography } from "@mui/material";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GenericImageBox } from "../../generic/GenericImageBox";

const AboutPage = () => {
  return (
    <AppLayout padding={{ xs: '15px 15px', md: '45px 200px', lg: '150px 520px' }}>
      <Grid2 container spacing={{ xs: 2, md: 4 }} alignItems={'center'}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <GenericImageBox
            image={'/CCAboutImage.png'}
            height={{
              xs: '320px',
              md: '350px'
            }}
          />
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" fontWeight={800} mb={1}>About Craft & Comfort</Typography>
          <Typography variant="body2" mb={2}>
            A fictional online shop specializing in handcrafted furniture, offering a unique collection that blends minimalist elegance, timeless class, and vintage charm. The website is designed to be fully responsive, providing an optimal user experience across all devices. With its clean, minimalist yet modern interface, the site reflects the brand's commitment to simplicity, functionality, and aesthetic appeal, making it easy for customers to explore the collection.
          </Typography>
          <Stack
            direction={'row'}
            gap={1}
            alignItems={'center'}
            sx={{
              cursor: 'pointer'
            }}
            onClick={() => window.open('https://dev-jenmar.web.app/')}
          >
            <Typography variant="body2">Developed By: </Typography>
            <Typography variant="body2" fontWeight={800}>Jenmar Macario</Typography>
            <FaArrowUpRightFromSquare size={'14px'} />
          </Stack>
        </Grid2>
      </Grid2>
    </AppLayout>
  )
};

export default AboutPage;