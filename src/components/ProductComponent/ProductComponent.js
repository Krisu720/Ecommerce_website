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

  const data = {
      name: 'Buty nike air force',
      sizes: ['xs','m',"l",'xl'],
      price: 219.99,
      deliveryInfo: '2-7 dni roboczych',
      sexInfo: 'male',
      colorInfo: 'black',
      materialInfo: '100% bawełna'


  }

  const [productInfo, setProductInfo] = useState({
    size: "",
    quantity: 1,
  });

  console.log(productInfo)
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
              {data.name}
            </Typography>
            <Typography variant="h3" sx={{ margin: "20px 0" }}>
              {data.price} PLN
            </Typography>
            <Stack spacing={3} sx={{ marginTop: "20px",}}>
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
                {data.sizes.filter(size=> size==="xs") == 'xs' && <MenuItem value="xs">XS</MenuItem>}
                {data.sizes.filter(size=> size==="s") == 's' && <MenuItem value="s">S</MenuItem>}
                {data.sizes.filter(size=> size==="m") == 'm' && <MenuItem value="m">M</MenuItem>}
                {data.sizes.filter(size=> size==="l") == 'l' && <MenuItem value="l">L</MenuItem>}
                {data.sizes.filter(size=> size==="xl") == 'xl' && <MenuItem value="xl">XL</MenuItem>}
              </TextField>

              <Stack spacing={1}>
                <Typography sx={{fontWeight: 600}}>Opis:</Typography>
                <Typography>Dostawa: {data.deliveryInfo}</Typography>
                <Typography>Skład: {data.materialInfo}</Typography>
                <Typography>Kolor: {data.colorInfo}</Typography>
                <Typography>Płeć: {data.sexInfo}</Typography>
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
