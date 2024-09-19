import React, { useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Chip, Grid2, Popover, Stack } from "@mui/material";
import { ItemCard } from "../../ui/cards/ItemCard";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { BiCategory } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GenericIconLabel } from "../../generic/GenericIconLabel";
import { IoFilter } from "react-icons/io5";
import { FiltersAndCategories } from "./FiltersAndCategories";
import { PESO_SYMBOL } from "../../../enums/generalEnum";

const ShopPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isCategories, setIsCategories] = useState(true);
  const [rangeValue, setRangeValue] = useState([0, 3000]);
  const [filters, setFilters] = useState({ sort: 'default' });
  const [categories, setCategories] = useState([]);

  const handleSelectPriceRange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const handleOpenPopOver = (event, type) => {
    setIsCategories(type);
    setAnchorEl(event.currentTarget);
  };

  const handleJoinFilters = () => {
    setFilters((prev) => ({ ...prev, price_range: `${PESO_SYMBOL}${rangeValue[0]}-${PESO_SYMBOL}${rangeValue[1]}` }))
  };

  return (
    <AppLayout>
      <Grid2 container justifyContent={'space-between'} mb={2} alignItems={'center'}>
        <Grid2 item>
        </Grid2>
        <Grid2 item>
          <Stack direction={'row'} gap={2}>
            <GenericIconLabel
              label={'Categories'}
              startIcon={<BiCategory />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
              onClick={(event) => handleOpenPopOver(event, true)}
            />
            <GenericIconLabel
              label={'Filters'}
              startIcon={<IoFilter />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
              onClick={(event) => handleOpenPopOver(event, false)}
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
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '.MuiPaper-root': {
            width: '230px',
            padding: '10px 20px',
          }
        }}
      >
        <FiltersAndCategories
          isCategories={isCategories}
          rangeValue={rangeValue}
          handleSelectPriceRange={handleSelectPriceRange}
          filters={filters}
          setFilters={setFilters}
          handleJoinFilters={handleJoinFilters}
          setCategories={setCategories}
        />
      </Popover>
    </AppLayout>
  );
};

export default ShopPage;