import React from "react";
import { Badge, Stack } from "@mui/material";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { TiUserOutline } from "react-icons/ti";
import { TbBasket, TbBasketHeart } from "react-icons/tb";

export const NavigationButtonList = () => {
  return (
    <Stack direction={'row'} gap={0.5}>
      <GenericIconButton
        icon={<TiUserOutline />}
        tooltip={'Account'}
      />
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
        />
      </Badge>
    </Stack>
  );
};