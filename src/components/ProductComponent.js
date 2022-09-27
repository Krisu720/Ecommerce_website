import {
  Container,
  Stack,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductComponent = () => {
  const [productInfo, setProductInfo] = useState({
    size: "",
    quantity: 1,
  });

  console.log(productInfo);
  return (
    <Container sx={{ marginTop: "35px" }}>
      <Grid container rowSpacing={4}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper sx={{ p: 1, width: { sm: "500px", xs: "100%" } }}>
            <img src="./buty.jpg" width="100%" />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper sx={{ p: 1, height: "670px", paddingLeft: "15px" }}>
            <Typography variant="h2" sx={{ margin: "20px 0" }}>
              Buty nike air force
            </Typography>
            <Typography variant="h3" sx={{ margin: "20px 0" }}>
              219,99 PLN
            </Typography>
            <Stack spacing={3} sx={{ marginTop: "20px" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  size="small"
                  onClick={() =>
                    setProductInfo((prevProductInfo) => ({
                      ...prevProductInfo,
                      quantity: prevProductInfo.quantity - 1,
                    }))
                  }
                >
                  <RemoveIcon />
                </IconButton>
                <TextField
                  type="number"
                  value={productInfo.quantity}
                  sx={{ width: "50px" }}
                />
                <IconButton
                  size="small"
                  onClick={() =>
                    setProductInfo((prevProductInfo) => ({
                      ...prevProductInfo,
                      quantity: prevProductInfo.quantity + 1,
                    }))
                  }
                >
                  <AddIcon />
                </IconButton>
              </Stack>
              <TextField
                value={productInfo.size}
                sx={{ width: "150px" }}
                label="rozmiar"
                onChange={(e) =>
                  setProductInfo((prevProductInfo) => ({
                    ...prevProductInfo,
                    size: e.target.value,
                  }))
                }
                select
              >
                <MenuItem value="xs">XS</MenuItem>
                <MenuItem value="s">S</MenuItem>
                <MenuItem value="m">M</MenuItem>
                <MenuItem value="l">L</MenuItem>
                <MenuItem value="xl">XL</MenuItem>
              </TextField>

              <Stack spacing={1}>
                <Typography>Dostawa 2-7 dni roboczych</Typography>
                <Typography>Skład: 100% bawełna</Typography>
                <Typography>Kolor: Czarny</Typography>
                <Typography>Płeć: Mężczyzna</Typography>
              </Stack>
              <Button variant="contained">Dodaj do koszyka</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductComponent;
