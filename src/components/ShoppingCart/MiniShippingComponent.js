import React from 'react'
import {
    CardActionArea,
    Grid,
    Paper,
    Stack,
    Typography,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { addDelivery } from "../../redux/cartRedux";
const MiniShippingComponent = ({cardDetails}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart)


  const handleAdd = () => {
    dispatch(
      addDelivery({
        delivery: cardDetails.method,
        price: cardDetails.price,
      })
    );
  };
  return (
     <Grid item xs={12} lg={6}>
              <CardActionArea onClick={()=>handleAdd()}>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: cardDetails.method===items.delivery.name ? "lightgreen" : "transparent"
                  }}
                >
                  <img src={cardDetails.img} height="65px" />
                  <Stack justifyContent="center" alignItems="flex-end">
                    <Typography sx={{ fontWeight: "600" }}>
                      {cardDetails.name}
                    </Typography>
                    <Typography variant="body2">{cardDetails.price} PLN</Typography>
                  </Stack>
                </Paper>
              </CardActionArea>
            </Grid>
  )
}

export default MiniShippingComponent