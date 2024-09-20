import React, { useState } from "react";
import { Badge, Box, Divider, Drawer, Grid2, Stack, Typography } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TbBasket, TbBasketHeart, TbMinus } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { SHADOWS } from "../../../enums/themeEnums";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";

export const NavigationButtonList = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <Stack direction={'row'} gap={0.5}>
      <GenericIconButton
        icon={<TbBasketHeart />}
        tooltip={'Likes'}
      />
      <Badge
        badgeContent={4}
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
            width: { xs: '330px', md: '400px' }
          }
        }}
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography fontWeight={800}>My Cart</Typography>
          <GenericIconButton
            icon={<IoClose />}
            onClick={() => setOpenCart(false)}
          />
        </Stack>
        <Divider sx={{ margin: '10px 0px' }} />
        <Grid2 container spacing={1.5}>
          <Grid2 item size={{ xs: 4 }}>
            <Box
              sx={{
                height: { xs: '90px', md: '100px' },
                backgroundColor: '#dadada',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              <img
                src={'/furniture/cabinet_slim_wood_glass.png'}
                style={{ width: '100%', height: '100%', borderRadius: '5px', boxShadow: SHADOWS.default }}
              />
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 8 }}>
            <Typography fontWeight={800}>Slim Glass Cabinet</Typography>
            <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(1000)}</Typography>
            <Box>
              <GenericIconButton
                icon={<LuMinus color="#664343" />}
              />
              <GenericIconButton
                icon={<IoIosAdd color="#664343" />}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Drawer>
    </Stack>
  );
};