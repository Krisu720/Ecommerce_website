import { Container, Grid, Paper, Stack, Button,CardActionArea,Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 0,
    name: "Buty Nike Jordan Mid",
    price: 229.99,
    img: 'nikeairmax.webp'
  },
  {
    id: 1,
    name: "Buty Nike Air Max",
    price: 222.99,
    img: 'nikejordan.webp'
  },
  {
    id: 2,
    name: "Buty Nike Air Max",
    price: 222.99,
    img: 'nikejordan.webp'
  },
  {
    id: 3,
    name: "Buty Nike Air Max",
    price: 222.99,
    img: 'nikejordan.webp'
  },
  {
    id: 4,
    name: "Buty Nike Air Max",
    price: 222.99,
    img: 'nikejordan.webp'
  },
];

const Products = () => {
  return (
    <Container sx={{marginTop: '50px'}}>
      <Grid container spacing={2}>
        {items.map((item) => 
        <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}sx={{display: 'flex', justifyContent: 'center'}}>
          
          <CardActionArea sx={{width: 350}}>
            <Paper
              sx={{
                p: 1,
              }}
              elevation={3}
            >
              <Stack>
                <img src={"./" + item.img} width='100%' />
                <Typography>
                  {item.name}
                </Typography>
                <Typography>
                  {item.price}zł
                </Typography>
              </Stack>
            </Paper>
          </CardActionArea>
          
        </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Products;
