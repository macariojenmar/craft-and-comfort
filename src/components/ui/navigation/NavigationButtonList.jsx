import React, { useMemo, useState } from "react";
import { Badge, Box, Button, Card, Checkbox, Chip, Divider, Drawer, FormControlLabel, Grid2, Stack, Tooltip, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket, TbTrash } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { useBasketStore } from "../../../hooks/useStore";
import { Link, useNavigate } from "react-router-dom";
import { TiUserOutline } from "react-icons/ti";

export const NavigationButtonList = () => {
  const { cartItems, addCartItem, removeCartItem, removeAllItem } = useBasketStore();
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const [selectedCheckout, setSelectedCheckout] = useState([]);

  const handleBrowseShop = () => {
    navigate('/shop')
    setOpenCart(false);
  };

  const handleSelectItemToCheckout = (data, condition) => {
    if (condition) {
      setSelectedCheckout((prev) => [...prev, data]);
    } else {
      setSelectedCheckout((prev) => prev.filter((item) => item?.id !== data?.id));
    }
  };

  const handleCloseBasket = () => {
    setOpenCart(false);
    setSelectedCheckout([]);
  };

  const isItemSelectedToCheckout = (id) => {
    return selectedCheckout?.find((item) => item?.id == id)
  };

  const renderCartItems = useMemo(() => {
    const list = cartItems?.map((item) => {
      const duplicated = cartItems?.filter((cartItem) => cartItem.id === item.id)?.length
      return {
        ...item,
        count: duplicated,
        price: item?.price * duplicated
      }
    })
    return list.filter((cartItem, index, self) => index === self.findIndex(item => item.id === cartItem.id));
  }, [cartItems]);

  const handleSelectDeselectAll = (checked) => {
    setSelectedCheckout(checked ? renderCartItems : []);
  };

  return (
    <Stack direction={'row'} gap={0.5}>
      <GenericIconButton
        icon={<TiUserOutline />}
        tooltip={'Account'}
      />
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
        onClose={() => handleCloseBasket()}
        sx={{
          '.MuiPaper-root': {
            backgroundColor: '#FFF4EA',
            minWidth: '350px',
            padding: '0px'
          }
        }}
      >
        <Box sx={{ flexGrow: 1, padding: '10px 15px' }}>
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
              onClick={() => handleCloseBasket()}
            />
          </Stack>
          <Divider sx={{ margin: '10px 0px' }} />
          {
            renderCartItems?.length > 0 ?
              <Box sx={{ height: '76vh', overflowX: 'auto' }}>
                <Stack gap={1}>
                  {
                    renderCartItems?.map((item, index) => {
                      const isSelected = isItemSelectedToCheckout(item?.id);
                      return (
                        <Card variant="outlined" sx={{ padding: '10px !important' }} key={`item-key-${index}`}>
                          <Grid2 container spacing={1.5}>
                            <Grid2 item size={{ xs: 4 }}>
                              <Link to={`/furniture-details?id=${item?.id}`}>
                                <Box
                                  sx={{
                                    height: { xs: '90px', md: '92px' },
                                    backgroundColor: '#dadada',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                  }}
                                  onClick={() => setOpenCart(false)}
                                >
                                  <img
                                    src={item?.image}
                                    style={{ width: '100%', height: '100%', borderRadius: '5px', boxShadow: SHADOWS.default }}
                                  />
                                </Box>
                              </Link>
                            </Grid2>
                            <Grid2 item size={{ xs: 8 }}>
                              <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography fontWeight={800}>{item?.name}</Typography>
                                <Tooltip title={'Check out'}>
                                  <Checkbox
                                    size="small"
                                    checked={isSelected}
                                    onChange={(event) => handleSelectItemToCheckout(item, event.target.checked)}
                                  />
                                </Tooltip>
                              </Stack>
                              <Typography variant="body2" mb={2}>{PESO_SYMBOL}{formatWithThousandSeparator(item?.price)}</Typography>
                              <Grid2 container justifyContent={'space-between'} alignItems={'center'}>
                                <Grid2 item>
                                  <Box display={'flex'} alignItems={'center'}>
                                    <Box sx={{ backgroundColor: 'grey.main', borderRadius: '5px' }}>
                                      <GenericIconButton
                                        icon={<LuMinus size={'14px'} />}
                                        onClick={() => removeCartItem(item)}
                                        disabled={isSelected}
                                      />
                                      <Typography variant="caption" sx={{ margin: '0 5px' }}>{item?.count}</Typography>
                                      <GenericIconButton
                                        icon={<IoMdAdd size={'14px'} />}
                                        onClick={() => addCartItem(item)}
                                        disabled={isSelected}

                                      />
                                    </Box>
                                  </Box>
                                </Grid2>
                                <Grid2 item>
                                  <GenericIconButton
                                    icon={<TbTrash size={'18px'} />}
                                    tooltip={'Remove'}
                                    onClick={() => removeAllItem(item)}
                                    disabled={isSelected}
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
              </Box> : <Box
                sx={{
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  height: '80vh',
                  alignItems: 'center',
                }}
              >
                <Stack gap={1} alignItems={'center'}>
                  <TbBasket size={'45px'} color="grey" />
                  <Typography variant="body2" color="grey" fontWeight={700}>No items added</Typography>
                  <Button variant="contained" onClick={() => handleBrowseShop()}>Browse Shop</Button>
                </Stack>
              </Box>
          }
        </Box>
        {
          renderCartItems?.length > 0 && <Box sx={{ backgroundColor: 'grey.main', padding: '15px 15px' }}>
            <Grid2 container mb={1.5} justifyContent={'space-between'} alignItems={'center'}>
              <Grid2 item>
                <Stack>
                  <Typography variant="caption" color="grey">Estimated Price: </Typography>
                  <Typography variant="h6" fontWeight={800}>{PESO_SYMBOL}{formatWithThousandSeparator(selectedCheckout?.reduce((sum, product) => sum + product.price, 0))}</Typography>
                </Stack>
              </Grid2>
              <Grid2 container item justifyContent={'flex-end'}>
                <FormControlLabel control={<Checkbox onChange={(event) => handleSelectDeselectAll(event.target.checked)} />} label="All" />
              </Grid2>
            </Grid2>
            <Button variant="contained" size="large" fullWidth sx={{ fontWeight: 800 }}>CHECKOUT ({selectedCheckout?.length})</Button>
          </Box>
        }
      </Drawer>
    </Stack>
  );
};