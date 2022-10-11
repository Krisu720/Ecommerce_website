import React from 'react'
import {  Grid, Paper, Stack, CardActionArea,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ProductCard = ({itemDetails}) => {
  
  const navigate= useNavigate();
  

  return (
    <Grid key={itemDetails._id} item xs={12} sm={12} md={6} lg={4}sx={{display: 'flex', justifyContent: 'center'}}>
    <CardActionArea sx={{width: 350}} onClick={()=>navigate(`/product/${itemDetails._id}`)}>
      <Paper
        sx={{
          p: 1,
        }}
        elevation={3}
      >
        <Stack>
          <img src={"./" + itemDetails.img} width='100%' />
          <Typography>
            {itemDetails.name}
          </Typography>
          <Typography>
            {itemDetails.price}zł
          </Typography>
        </Stack>
      </Paper>
    </CardActionArea>
  </Grid>
  )
}

export default ProductCard