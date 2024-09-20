import React, { useMemo, useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Chip, Grid2, Popover, Stack } from "@mui/material";
import { ItemCard } from "../../ui/cards/ItemCard";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GenericIconLabel } from "../../generic/GenericIconLabel";
import { IoFilter } from "react-icons/io5";
import { FiltersAndCategories } from "./FiltersAndCategories";
import { TbArrowsSort } from "react-icons/tb";
import { PESO_SYMBOL, SORT_PRICE_HIGH_TO_LOW, SORT_PRICE_LOW_TO_HIGH } from "../../../enums/generalEnum";
import { formatWithThousandSeparator, kebabToCapitalized } from "../../../helpers/stringHelper";

const ShopPage = () => {
  const defaultFilters = { price_range: [0, 5000], categories: [] };
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState('sort');
  const [sortType, setSortType] = useState('default');
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);
  const [filters, setFilters] = useState(defaultFilters);

  const handleSelectPriceRange = (event, newValue) => {
    setFilters((prev) => ({ ...prev, price_range: newValue }))
  };

  const handleSelectFilters = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  };

  const handleOpenFilterPopover = (event, type) => {
    setFilterType(type);
    setAnchorEl(event.currentTarget);
  };

  const renderFurnitures = useMemo(() => {
    let list = [...FURNITURES]?.filter((item) => item?.price >= appliedFilters?.price_range[0] && item?.price <= appliedFilters?.price_range[1]);
    if (appliedFilters?.categories?.length > 0) {
      list = list?.filter((item) => appliedFilters?.categories?.includes(item?.category))
    }
    if (sortType === SORT_PRICE_LOW_TO_HIGH) {
      list = list?.sort((a, b) => b.price - a.price);
    } else if (sortType === SORT_PRICE_HIGH_TO_LOW) {
      list = list?.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [sortType, appliedFilters]);

  const handleApplyFilter = () => {
    setAppliedFilters({ ...filters });
    setAnchorEl(null);
  };

  return (
    <AppLayout>
      <Grid2 container mb={2} alignItems={'center'} spacing={1.5}>
        <Grid2 container item size={{ xs: 12, md: 3 }}>
          <Stack direction={'row'} gap={3}>
            <GenericIconLabel
              label={`Sort: ${kebabToCapitalized(sortType)}`}
              startIcon={<TbArrowsSort />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
              onClick={(event) => handleOpenFilterPopover(event, 'sort')}
            />
            <GenericIconLabel
              label={'Filters'}
              startIcon={<IoFilter />}
              endIcon={<MdKeyboardArrowDown />}
              select={true}
              onClick={(event) => handleOpenFilterPopover(event, 'filters')}
            />
          </Stack>
        </Grid2>
        <Grid2 container item size={{ xs: 12, md: 9 }} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
          <Chip
            label={`Price range: ${PESO_SYMBOL}${formatWithThousandSeparator(appliedFilters?.price_range[0])} - ${PESO_SYMBOL}${formatWithThousandSeparator(appliedFilters?.price_range[1])}`}
          />
          {
            Object.values(appliedFilters?.categories)?.map((item, index) => {
              return (
                <Chip
                  key={`category-key-${index}`}
                  sx={{ textTransform: 'capitalize' }}
                  label={`Category: ${item}`}
                />
              )
            })
          }
        </Grid2>
      </Grid2>
      <Grid2 container spacing={4}>
        {
          renderFurnitures?.map((item, index) => {
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
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          '.MuiPaper-root': {
            width: '230px',
            padding: '10px 20px',
          }
        }}
      >
        <FiltersAndCategories
          filterType={filterType}
          handleSelectPriceRange={handleSelectPriceRange}
          filters={filters}
          setFilters={setFilters}
          handleSelectFilters={handleSelectFilters}
          setSortType={setSortType}
          sortType={sortType}
          handleApplyFilter={handleApplyFilter}
        />
      </Popover>
    </AppLayout>
  );
};

export default ShopPage;