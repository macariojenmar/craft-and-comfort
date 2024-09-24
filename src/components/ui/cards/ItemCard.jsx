import React, { Fragment } from "react";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket } from "react-icons/tb";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { useBasketStore } from "../../../hooks/useStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { GenericLikeButton } from "../../generic/GenericLikeButton";

export const ItemCard = (props) => {
  const {
    item,
    ...others
  } = props;

  const { addCartItem } = useBasketStore()

  const handleAddToCart = (item) => {
    addCartItem(item)
    toast('Added to basket!', { icon: '🧺' });
  };

  return (
    <Fragment>
      <Link to={`/furniture-details?id=${item?.id}`}>
        <Box
          sx={{
            height: { xs: '320px', md: '260px' },
            mb: 1,
            backgroundColor: '#dadada',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
          {...others}
        >
          <img
            src={item?.image}
            style={{ width: '100%', height: '100%', borderRadius: '10px', boxShadow: SHADOWS.default }}
          />
        </Box>
      </Link>
      <Grid2 container justifyContent={'space-between'} mb={0.5}>
        <Grid2 item>
          <Typography fontWeight={800}>{item?.name}</Typography>
          <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(item?.price)}</Typography>
        </Grid2>
        <Grid2 item>
          <Stack direction={'row'}>
            <GenericLikeButton item={item} />
            <GenericIconButton
              icon={<TbBasket />}
              tooltip={'Add to cart'}
              onClick={() => handleAddToCart(item)}
            />
          </Stack>
        </Grid2>
      </Grid2>
    </Fragment>
  );
};