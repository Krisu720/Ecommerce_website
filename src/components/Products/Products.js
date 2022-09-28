import { Container, Grid,  } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

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
      <Grid container spacing={2} rowSpacing={4}>
        {items.map((item) =>  <ProductCard key={item.id} itemDetails={item} />        )}
      </Grid>
    </Container>
  );
};

export default Products;
