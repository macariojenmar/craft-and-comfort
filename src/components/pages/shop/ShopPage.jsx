import React, { useMemo, useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Box, Chip, Grid2, Popover, Stack, Typography } from "@mui/material";
import { ItemCard } from "../../ui/cards/ItemCard";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GenericIconLabel } from "../../generic/GenericIconLabel";
import { IoFilter } from "react-icons/io5";
import { FiltersAndCategories } from "./FiltersAndCategories";
import { TbArrowsSort } from "react-icons/tb";
import { PESO_SYMBOL, SORT_PRICE_HIGH_TO_LOW, SORT_PRICE_LOW_TO_HIGH } from "../../../enums/generalEnum";
import { formatWithThousandSeparator, frontendSearch, kebabToCapitalized } from "../../../helpers/stringHelper";
import { useSearchParams } from "react-router-dom";
import { GoInbox } from "react-icons/go";

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const defaultFilters = { price_range: [0, 5000], categories: [] };
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState('sort');
  const [sortType, setSortType] = useState('default');
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);
  const [filters, setFilters] = useState(defaultFilters);
  const searchValue = searchParams.get('search');

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
    if (searchValue) {
      list = frontendSearch(list, searchValue)
    }
    return list;
  }, [sortType, appliedFilters, searchValue]);

  const handleApplyFilter = () => {
    setAppliedFilters({ ...filters });
    setAnchorEl(null);
  };

  return (
    <AppLayout>
      <Grid2 container mb={2} alignItems={'center'} spacing={1.5}>
        <Grid2 container item size={{ xs: 12, md: 3 }}>
          <Stack direction={'row'} gap={1}>
            <Box
              sx={{
                backgroundColor: 'grey.main',
                padding: '8px 15px',
                borderRadius: '10px'
              }}
              onClick={(event) => handleOpenFilterPopover(event, 'sort')}
            >
              <GenericIconLabel
                label={`Sort: ${kebabToCapitalized(sortType)}`}
                startIcon={<TbArrowsSort />}
                endIcon={<MdKeyboardArrowDown />}
                select={true}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: 'grey.main',
                padding: '8px 15px',
                borderRadius: '10px'
              }}
              onClick={(event) => handleOpenFilterPopover(event, 'filters')}
            >
              <GenericIconLabel
                label={'Filters'}
                startIcon={<IoFilter />}
                endIcon={<MdKeyboardArrowDown />}
                select={true}
              />
            </Box>
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
      {
        renderFurnitures?.length > 0 ? <Grid2 container spacing={3}>
          {
            renderFurnitures?.map((item, index) => {
              return (
                <Grid2 item size={{ xs: 12, sm: 6, md: 2 }} key={`card-key-${index}`}>
                  <ItemCard item={item} />
                </Grid2>
              );
            })
          }
        </Grid2> : <Box
          sx={{
            padding: 1,
            display: 'flex',
            justifyContent: 'center',
            height: '50vh',
            alignItems: 'center',
          }}
        >
          <Stack gap={1} alignItems={'center'}>
            <GoInbox size={'45px'} color="grey" />
            <Typography variant="body2" color="grey" fontWeight={700}>No Items Found</Typography>
          </Stack>
        </Box>
      }
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