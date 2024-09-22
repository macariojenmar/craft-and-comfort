import React, { Fragment } from "react";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket, TbHeart } from "react-icons/tb";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { useBasketStore, useLikeStore } from "../../../hooks/useStore";
import toast from "react-hot-toast";
import { TiHeart, TiHeartOutline } from "react-icons/ti";

export const ItemCard = (props) => {
  const {
    item,
    ...others
  } = props;

  const { addCartItem } = useBasketStore()
  const { likedItems, addLikeItem, unlikeItem } = useLikeStore()

  console.log('likedItems', likedItems);

  const handleAddToCart = (item) => {
    addCartItem(item)
    toast('Added to basket!', { icon: '🧺' });
  };

  const handleLikeUnlike = (item) => {
    addLikeItem(item);
    toast('Added to likes!', { icon: '❤️' });
  };

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
        {...others}
      >
        <img
          src={item?.image}
          style={{ width: '100%', height: '100%', borderRadius: '10px', boxShadow: SHADOWS.default }}
        />
      </Box>
      <Grid2 container justifyContent={'space-between'} mb={0.5}>
        <Grid2 item>
          <Typography fontWeight={800}>{item?.name}</Typography>
          <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(item?.price)}</Typography>
        </Grid2>
        <Grid2 item>
          <Stack direction={'row'}>
            <GenericIconButton
              icon={likedItems?.includes(item) ? <TiHeart color="#ec7063"/> : <TiHeartOutline />}
              tooltip={'Like'}
              onClick={() => handleLikeUnlike(item)}
            />
            <GenericIconButton
              icon={<TbBasket />}
              tooltip={'Add to cart'}
              onClick={() => handleAddToCart(item)}
            />
          </Stack>
        </Grid2>
      </Grid2>
      <Button variant="contained" fullWidth>Buy Now</Button>
    </Fragment>
  );
};