import {
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LeftLayer from "./LeftLayer";
import RightLayer from "./RightLayer";


const ShoppingCart = () => {

  

  const items = useSelector((state)=>state.cart)
  return (
    <>
      <Container sx={{ marginTop: "35px" }}>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12} >
            <LeftLayer/>
          </Grid>
          <Grid item md={5} xs={12} >
            <RightLayer items={items}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShoppingCart;
