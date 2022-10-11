import React from "react";
import { CardActionArea, Grid, Paper, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addMethod } from "../../redux/cartRedux";

const MiniPaymentComponent = ({ cardDetails }) => {
  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart)


  const handleAdd = () => {
    dispatch(
      addMethod({
        method: cardDetails.method,
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
            bgcolor: cardDetails.method===items.method ? "lightgreen" : "transparent"
          }}
        >
          <img src={cardDetails.img} height="65px" alt="payment method"/>
          <Stack
            justifyContent="center"
            alignItems="flex-end"
          >
            <Typography sx={{ fontWeight: "600" }}>
              {cardDetails.name}
            </Typography>
          </Stack>
        </Paper>
      </CardActionArea>
    </Grid>
  );
};

export default MiniPaymentComponent;
