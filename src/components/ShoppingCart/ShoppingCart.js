import {
  Container,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftLayer from "./LeftLayer";
import RightLayer from "./RightLayer";


const ShoppingCart = () => {


  
  const dispatch = useDispatch()
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
