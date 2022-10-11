import { CircularProgress, Container, Grid,  } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
  
  const [fetchData, setFetchData] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/products/').then(data=>setFetchData(data.data))
  }, [])
  


  return (
    <Container sx={{marginTop: '50px'}}>
      <Grid container spacing={2} rowSpacing={4}>
        {fetchData ? fetchData.map((item) =>  <ProductCard key={item._id} itemDetails={item} />) : <CircularProgress/>}
      </Grid>
    </Container>
  );
};

export default Products;
