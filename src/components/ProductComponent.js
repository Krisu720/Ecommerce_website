import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const ProductComponent = () => {
  return (
    <Container sx={{ marginTop: "15px" }}>
      <Grid container>
        <Grid item md={6}>
          <Paper sx={{ p: 1, width: "500px" }}>
            <img src="./buty.jpg" width="100%" />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper sx={{ p: 1 }}>
            <Typography>Buty nike air force air max jordan mid</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductComponent;
