import React from "react";
import { Grid2 } from "@mui/material";
import { arrayShuffler } from "../../../helpers/arrayHelper";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { ItemCard } from "../cards/ItemCard";

export const FurnitureList = () => {
  return (
    <Grid2 container spacing={4} mt={1} mb={1}>
      {
        arrayShuffler(FURNITURES).slice(0, 6)?.map((item, index) => {
          return (
            <Grid2 item size={{ xs: 12, md: 2 }} key={`card-key-${index}`}>
              <ItemCard item={item} />
            </Grid2>
          );
        })
      }
    </Grid2>
  )
};