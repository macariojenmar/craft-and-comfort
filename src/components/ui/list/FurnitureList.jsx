import React, { useMemo } from "react";
import { Grid2, useMediaQuery } from "@mui/material";
import { arrayShuffler } from "../../../helpers/arrayHelper";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { ItemCard } from "../cards/ItemCard";
import { useLikeStore } from "../../../hooks/useStore";
import { useTheme } from "@emotion/react";

export const FurnitureList = ({ includeLiked = true }) => {
  const theme = useTheme();
  const { likedItems } = useLikeStore();
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  const renderFurnitures = useMemo(() => {
    let list = FURNITURES;
    if (!includeLiked) {
      list = list?.filter(furniture => !likedItems?.some(liked => furniture?.id === liked?.id));
    }
    return list;
  }, [FURNITURES]);

  return (
    <Grid2 container spacing={{ xs: 2, md: 3, lg: 4 }} mt={1} mb={1}>
      {
        arrayShuffler(renderFurnitures).slice(0, isMd ? 4 : 6)?.map((item, index) => {
          return (
            <Grid2 item size={{ xs: 12, sm: 6, md: 3, lg: 2 }} key={`card-key-${index}`}>
              <ItemCard item={item} />
            </Grid2>
          );
        })
      }
    </Grid2>
  )
};