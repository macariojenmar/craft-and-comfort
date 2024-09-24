import React from "react";
import AppLayout from "../../../layouts/AppLayout";
import { useLikeStore } from "../../../hooks/useStore";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { ItemCard } from "../../ui/cards/ItemCard";
import { GoInbox } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { likedItems } = useLikeStore();
  const navigate = useNavigate();
  console.log('likedItems', likedItems);
  return (
    <AppLayout>
      <Typography fontWeight={800} mb={1.5} variant="h6">Your Wishlist</Typography>
      {
        likedItems?.length > 0 ? <Grid2 container spacing={4}>
          {
            likedItems?.map((item, index) => {
              return (
                <Grid2 item size={{ xs: 12, sm: 6, md: 2 }} key={`card-key-${index}`}>
                  <ItemCard item={item} />
                </Grid2>
              );
            })
          }
        </Grid2> : <Box
          sx={{
            padding: 1,
            display: 'flex',
            justifyContent: 'center',
            height: '50vh',
            alignItems: 'center',
          }}
        >
          <Stack gap={1} alignItems={'center'}>
            <GoInbox size={'45px'} color="grey" />
            <Typography variant="body2" color="grey" fontWeight={700}>No Items Found</Typography>
            <Button variant="contained" onClick={() => navigate('/shop')}>Browse Shop</Button>
          </Stack>
        </Box>
      }
    </AppLayout>
  )
};

export default WishlistPage;
