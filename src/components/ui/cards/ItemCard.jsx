import React, { Fragment } from "react";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket, TbHeart } from "react-icons/tb";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";

export const ItemCard = (props) => {
  const {
    image,
    name,
    price
  } = props;

  return (
    <Fragment>
      <Box
        sx={{
          height: { xs: '320px', md: '260px' },
          mb: 1,
          backgroundColor: '#dadada',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        <img
          src={image}
          style={{ width: '100%', height: '100%', borderRadius: '10px', boxShadow: SHADOWS.default }}
        />
      </Box>
      <Grid2 container justifyContent={'space-between'} mb={0.5}>
        <Grid2 item>
          <Typography fontWeight={800}>{name}</Typography>
          <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(price)}</Typography>
        </Grid2>
        <Grid2 item>
          <Stack direction={'row'}>
            <GenericIconButton
              icon={<TbHeart />}
              tooltip={'Like'}
            />
            <GenericIconButton
              icon={<TbBasket />}
              tooltip={'Add to cart'}
            />
          </Stack>
        </Grid2>
      </Grid2>
      <Button variant="contained" fullWidth>Buy Now</Button>
    </Fragment>
  );
};