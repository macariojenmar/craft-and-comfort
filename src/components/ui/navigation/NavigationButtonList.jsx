import React, { useMemo, useState } from "react";
import { Badge, Box, Card, Chip, Divider, Drawer, Grid2, Stack, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket, TbBasketHeart, TbTrash } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { useBasketStore, useLikeStore } from "../../../hooks/useStore";

export const NavigationButtonList = () => {
  const { cartItems, addCartItem, removeCartItem } = useBasketStore();
  const { likedItems } = useLikeStore();

  const [openCart, setOpenCart] = useState(false);

  const renderCartItems = useMemo(() => {
    let list = cartItems;
    return list;
  }, [cartItems]);

  const renderLikes = useMemo(() => {
    let list = likedItems;
    return list;
  }, [likedItems]);

  console.log('renderCartItems', renderCartItems);

  return (
    <Stack direction={'row'} gap={0.5}>
      <Badge
        badgeContent={renderLikes?.length}
        color="primary"
        overlap="circular"
      >
        <GenericIconButton
          icon={<TbBasketHeart />}
          tooltip={'Likes'}
        />
      </Badge>
      <Badge
        badgeContent={renderCartItems?.length}
        color="primary"
        overlap="circular"
      >
        <GenericIconButton
          icon={<TbBasket />}
          tooltip={'Basket'}
          onClick={() => setOpenCart((prev) => !prev)}
        />
      </Badge>
      <Drawer
        anchor={'right'}
        open={openCart}
        onClose={() => setOpenCart(false)}
        sx={{
          '.MuiPaper-root': {
            backgroundColor: '#FFF4EA',
            minWidth: '350px'
          }
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'} gap={1.5}>
            <Typography fontWeight={800}>Your Basket</Typography>
            {
              renderCartItems?.length > 0 && <Chip
                size="small"
                label={`${renderCartItems?.length} items`}
                sx={{ fontWeight: 800 }}
              />
            }
          </Stack>
          <GenericIconButton
            icon={<IoClose />}
            onClick={() => setOpenCart(false)}
          />
        </Stack>
        <Divider sx={{ margin: '10px 0px' }} />
        <Stack gap={1}>
          {
            renderCartItems?.map((item, index) => {
              return (
                <Card variant="outlined" sx={{ padding: '10px !important' }} key={`item-key-${index}`}>
                  <Grid2 container spacing={1.5}>
                    <Grid2 item size={{ xs: 4 }}>
                      <Box
                        sx={{
                          height: { xs: '90px', md: '92px' },
                          backgroundColor: '#dadada',
                          borderRadius: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        <img
                          src={item?.image}
                          style={{ width: '100%', height: '100%', borderRadius: '5px', boxShadow: SHADOWS.default }}
                        />
                      </Box>
                    </Grid2>
                    <Grid2 item size={{ xs: 8 }}>
                      <Typography fontWeight={800}>{item?.name}</Typography>
                      <Typography variant="body2" mb={2}>{PESO_SYMBOL}{formatWithThousandSeparator(item?.price)}</Typography>
                      <Grid2 container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid2 item>
                          <Box display={'flex'} alignItems={'center'}>
                            <Box sx={{ backgroundColor: 'grey.main', borderRadius: '5px' }}>
                              <GenericIconButton
                                icon={<LuMinus size={'14px'} />}
                                onClick={() => removeCartItem(item)}
                              />
                              <Typography variant="caption" sx={{ margin: '0 5px' }}>1</Typography>
                              <GenericIconButton
                                icon={<IoMdAdd size={'14px'} />}
                                onClick={() => addCartItem(item)}
                              />
                            </Box>
                          </Box>
                        </Grid2>
                        <Grid2 item>
                          <GenericIconButton
                            icon={<TbTrash size={'18px'} />}
                            tooltip={'Remove'}
                            onClick={() => removeCartItem(item)}
                          />
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Card>
              );
            })
          }
        </Stack>
      </Drawer>
    </Stack>
  );
};