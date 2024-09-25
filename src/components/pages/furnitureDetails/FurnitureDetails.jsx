import React, { Fragment, useMemo, useState } from "react";
import AppLayout from "../../../layouts/AppLayout";
import { Box, Button, Grid2, Pagination, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { GenericImageBox } from "../../generic/GenericImageBox";
import { FURNITURES } from "../../../enums/dummyData/dummyData";
import { PESO_SYMBOL } from "../../../enums/generalEnum";
import { copyToClipboard, formatWithThousandSeparator } from "../../../helpers/stringHelper";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { LuCopy } from "react-icons/lu";
import { useBasketStore } from "../../../hooks/useStore";
import { FurnitureList } from "../../ui/list/FurnitureList";
import { ReviewsStars } from "../../ui/reviews/ReviewsStars";
import { GenericLikeButton } from "../../generic/GenericLikeButton";
import toast from "react-hot-toast";

const FurnitureDetails = () => {
  const [reviewsCurrentPage, setReviewsCurrentPage] = useState(1);
  const { addCartItem } = useBasketStore();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const selectedFurniture = useMemo(() => {
    return FURNITURES?.find((item) => item?.id == id)
  }, [id]);

  const currentReviews = useMemo(() => {
    const reviewsPerPage = 2
    const indexOfLastReview = reviewsCurrentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    return selectedFurniture?.reviews?.slice(indexOfFirstReview, indexOfLastReview);
  }, [reviewsCurrentPage]);

  const handleChangePagination = (event, value) => {
    setReviewsCurrentPage(value);
  };

  const handleCopyLink = () => {
    copyToClipboard(window.location.href);
    toast.success('Link copied to clipboard!')
  };

  const handleAddToCart = (item) => {
    addCartItem(item)
    toast('Added to basket!', { icon: '🧺' });
  };

  return (
    <Fragment>
      <AppLayout padding={{ xs: '15px 15px', md: '20px 420px' }}>
        <Grid2 container spacing={3}>
          <Grid2 item size={{ xs: 6 }}>
            <GenericImageBox
              image={selectedFurniture?.image}
              height={{
                xs: '320px',
                md: '542px'
              }}
            />
          </Grid2>
          <Grid2 item size={{ xs: 6 }}>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Typography variant="h6" fontWeight={800}>{selectedFurniture?.name}</Typography>
              <GenericIconButton
                icon={<LuCopy size={'18px'} />}
                tooltip={'Copy link'}
                onClick={() => handleCopyLink()}
              />
            </Stack>
            <Typography>{PESO_SYMBOL}{formatWithThousandSeparator(selectedFurniture?.price)}</Typography>
            <Box sx={{ height: '120px', mb: 2 }}>
              <Typography variant="body2" mt={1}>{selectedFurniture?.description}</Typography>
            </Box>
            <Stack mt={2} mb={2} direction={'row'} gap={1}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ fontWeight: 800 }}
                onClick={() => handleAddToCart(selectedFurniture)}
              >
                ADD TO BASKET
              </Button>
              <GenericLikeButton item={selectedFurniture} />
            </Stack>
            <ReviewsStars reviews={selectedFurniture?.reviews?.length} rating={4} />
            <Box sx={{
              backgroundColor: 'grey.main',
              padding: '10px 15px',
              borderRadius: '10px',
              height: '255px',
              mt: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box sx={{ flexGrow: 1 }}>
                {
                  currentReviews?.map((item, index) => {
                    return (
                      <Box mb={2} key={`review-key-${index}`}>
                        <ReviewsStars rating={item?.rate} />
                        <Typography mt={1} variant="body2"><i>&quot;{item?.review}&quot;</i></Typography>
                        <Box display={'flex'} justifyContent={'flex-end'} mt={1}>
                          <Typography variant="body2" fontWeight={800}>— {item?.from}</Typography>
                        </Box>
                      </Box>
                    );
                  })
                }
              </Box>
              <Box display={'flex'} justifyContent={'center'} mt={1}>
                <Pagination
                  count={Math.ceil(selectedFurniture?.reviews?.length / 2)}
                  page={reviewsCurrentPage}
                  onChange={handleChangePagination}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </AppLayout>
      <AppLayout>
        <Typography fontWeight={800} mb={1.5} variant="h6">Furnitures you might like</Typography>
        <FurnitureList />
      </AppLayout>
    </Fragment >
  );
};

export default FurnitureDetails;