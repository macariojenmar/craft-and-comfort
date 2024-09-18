import React, { Fragment } from "react";
import { Grid2 } from "@mui/material";
import { Banner } from "./Banner";
import AppLayout from "../../../layouts/AppLayout";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { ItemCard } from "../../ui/cards/ItemCard";
import { arrayShuffler } from "../../../helpers/arrayHelper";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <AppLayout>
        <Grid2 container spacing={4} mt={2}>
          {
            arrayShuffler(FURNITURES).slice(0, 6)?.map((item, index) => {
              return (
                <Grid2 item size={{ xs: 2 }} key={`card-key-${index}`}>
                  <ItemCard
                    image={item?.image}
                    name={item?.name}
                    price={item?.price}
                  />
                </Grid2>
              );
            })
          }
        </Grid2>
      </AppLayout>
    </Fragment>
  );
};

export default HomePage;