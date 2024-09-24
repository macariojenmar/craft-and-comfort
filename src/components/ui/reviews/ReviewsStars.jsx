import { Stack, Typography } from "@mui/material";
import React from "react";
import { PiStarBold, PiStarFill } from "react-icons/pi";

export const ReviewsStars = ({ reviews, rating = 0 }) => {
  return (
    <Stack direction={'row'} color={'primary.main'} mt={1} alignItems={'center'}>
      {
        Array.from({ length: 5 }).map((_, index) =>
          index < rating ? <PiStarFill key={index} /> : <PiStarBold key={index} />
        )
      }
      {reviews && <Typography variant="body2" fontWeight={700} ml={1}>{`(${reviews} reviews)`}</Typography>}
    </Stack>
  );
};