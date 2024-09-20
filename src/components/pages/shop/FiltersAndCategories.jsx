import React, { Fragment } from "react";
import { Button, Checkbox, FormControlLabel, Grid2, Slider, Stack, Typography } from "@mui/material";
import { CATEGORIES } from "../../../enums/dummyData/dummyData";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { formatWithThousandSeparator, kebabToCapitalized } from "../../../helpers/stringHelper";
import { FaCheck } from "react-icons/fa6";

export const FiltersAndCategories = (props) => {
  const {
    filterType,
    handleSelectPriceRange,
    filters,
    handleSelectFilters,
    setSortType,
    sortType,
    handleApplyFilter
  } = props;

  const sortTypes = ['default', 'price-low-to-high', 'price-high-to-low'];

  return (
    <Fragment>
      {
        filterType === 'sort' ? <Fragment>
          {
            Object.values(sortTypes)?.map((item, index) => {
              const isSelected = (sortType === item);
              return (
                <Button
                  key={`sort-key-${index}`}
                  startIcon={isSelected && <FaCheck size={'14px'} />}
                  fullWidth
                  color={isSelected ? "primary" : ''}
                  size="small"
                  sx={{ justifyContent: 'flex-start', fontWeight: isSelected && 800 }}
                  onClick={() => setSortType(item)}
                >
                  {kebabToCapitalized(item)}
                </Button>
              )
            })
          }
        </Fragment> : <Fragment>
          <Typography variant="body2" color="grey">Price Range</Typography>
          <Slider
            onChange={handleSelectPriceRange}
            size="small"
            value={filters?.price_range}
            min={0}
            max={5000}
          />
          <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
            <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(filters?.price_range[0])}</Typography>
            <Typography variant="body2">{PESO_SYMBOL}{formatWithThousandSeparator(filters?.price_range[1])}</Typography>
          </Stack>
          <Typography variant="body2" color="grey">Categories</Typography>
          <Grid2 container>
            {
              Object.values(CATEGORIES)?.map((item, index) => {
                return (
                  <Grid2 item size={{ xs: 6 }} key={`category-key-${index}`}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          checked={filters?.categories.includes(item)}
                          onChange={(event) => {
                            if (event.target.checked) {
                              handleSelectFilters('categories', [...filters.categories, item]);
                            } else {
                              handleSelectFilters('categories', filters?.categories.filter(category => category !== item));
                            }
                          }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                          {item}
                        </Typography>
                      }
                    />
                  </Grid2>
                );
              })
            }
          </Grid2>
          <Button
            variant="contained"
            fullWidth size="small"
            sx={{ margin: '10px 0' }}
            onClick={() => handleApplyFilter()}
          >
            Apply
          </Button>
        </Fragment>
      }
    </Fragment>
  )
};