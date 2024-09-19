import React, { Fragment } from "react";
import { Button, Checkbox, Divider, FormControlLabel, Grid2, MenuItem, Slider, Stack, TextField, Typography } from "@mui/material";
import { CATEGORIES } from "../../../enums/dummyData/dummyData";
import { PESO_SYMBOL } from "../../../enums/generalEnum";

export const FiltersAndCategories = (props) => {
  const {
    isCategories,
    handleSelectPriceRange,
    rangeValue,
    filters,
    setFilters,
    setCategories,
    handleJoinFilters
  } = props;

  return (
    <Fragment>
      {
        isCategories ? <Grid2 container>
          {
            Object.values(CATEGORIES)?.map((item, index) => {
              return (
                <Grid2 item size={{ xs: 6 }} key={`category-key-${index}`}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
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
        </Grid2> : <Fragment>
          <Typography variant="body2" color="grey">Price Range</Typography>
          <Slider
            onChange={handleSelectPriceRange}
            size="small"
            value={rangeValue}
            min={0}
            max={5000}
          />
          <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
            <Typography variant="body2">{PESO_SYMBOL}{rangeValue[0]}</Typography>
            <Typography variant="body2">{PESO_SYMBOL}{rangeValue[1]}</Typography>
          </Stack>
          <Button variant="contained" fullWidth size="small" onClick={() => handleJoinFilters()}>Apply</Button>
          <Divider sx={{ margin: '10px 0' }} />
          <Typography variant="body2" color="grey">Sort</Typography>
          <TextField
            size="small"
            select
            value={filters?.sort}
            onChange={(event) => setFilters((prev) => ({ ...prev, sort: event.target.value }))}
            sx={{ width: '200px' }}
          >
            <MenuItem value={'default'}>Default</MenuItem>
            <MenuItem value={'price-low-to-high'}>Price low to high</MenuItem>
            <MenuItem value={'price-high-to-low'}>Price hight to low</MenuItem>
          </TextField>
        </Fragment>
      }
    </Fragment>
  )
};

//range
//sort by price low to high or high to low