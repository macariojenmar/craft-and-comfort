import React from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Grid2, Stack } from "@mui/material";
import { ItemCard } from "../../ui/cards/ItemCard";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GenericIconLabel } from "../../generic/GenericIconLabel";
import { IoFilter } from "react-icons/io5";

const ShopPage = () => {
  return (
    <AppLayout>
      <Grid2 container justifyContent={'space-between'} mb={2}>
        <Grid2 item>
        </Grid2>
        <Grid2 item>
          <Stack direction={'row'} gap={2}>
            <GenericIconLabel
              label={'Categories'}
              startIcon={<BiCategory />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
            />
            <GenericIconLabel
              label={'Filters'}
              startIcon={<IoFilter />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
            />
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={4}>
        {
          FURNITURES?.map((item, index) => {
            return (
              <Grid2 item size={{ xs: 12, md: 2 }} key={`card-key-${index}`}>
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
  );
};

export default ShopPage;