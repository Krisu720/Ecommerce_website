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
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { SettingsPowerRounded } from "@mui/icons-material";
import { publicRequest } from "../../requests";
const ProductComponent = () => {
  const [fetchData, setFetchData] = useState();
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false)


  const parameter = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    publicRequest
      .get(`/products/find/${parameter.id}`)
      .then((data) => setFetchData(data.data));
  }, []);


  const setNumber = (dir) => {
    if (dir == "remove") {
      if (productInfo.quantity > 1)
        setProductInfo((prevProductInfo) => ({
          ...prevProductInfo,
          quantity: prevProductInfo.quantity - 1,
        }));
    } else {
      if (productInfo.quantity < 99)
        setProductInfo((prevProductInfo) => ({
          ...prevProductInfo,
          quantity: prevProductInfo.quantity + 1,
        }));
    }
  };

  const [productInfo, setProductInfo] = useState({
    size: "",
    quantity: 1,
  });


  const addToCart = () => {
    if (productInfo.size !== "") {
      dispatch(
        addProduct({
          ...productInfo,
          id: fetchData._id,
          img: fetchData.img,
          name: fetchData.name,
          price: fetchData.price,
        })
      );
      setToast(true);
    } else {
      setError(true);
    }
  };

  return (
    <Container sx={{ marginTop: "35px" }}>
      <Snackbar
        open={toast}
        autoHideDuration={2000}
        onClose={() => setToast(false)}
      >
        <Alert severity="success" color="success">
          Dodano produkt!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={2000}
        onClose={() => setError(false)}
      >
        <Alert severity="error" color="error">
          Wybierz rozmiar produktu.
        </Alert>
      </Snackbar>
      {fetchData ? (
        <Grid container rowSpacing={4}>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper sx={{ p: 1, width: { sm: "500px", xs: "100%" } }}>
              <img src={"../" + fetchData.img} width="100%" />
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper sx={{ p: 1, height: "670px", paddingLeft: "15px" }}>
              <Typography variant="h2" sx={{ margin: "20px 0" }}>
                {fetchData.name}
              </Typography>
              <Typography variant="h3" sx={{ margin: "20px 0" }}>
                {fetchData.price} PLN
              </Typography>
              <Stack spacing={3} sx={{ marginTop: "20px" }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton size="small" onClick={() => setNumber("remove")}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    type="number"
                    value={productInfo.quantity}
                    sx={{ width: "50px" }}
                  />
                  <IconButton size="small" onClick={() => setNumber("add")}>
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
                  {fetchData.sizes.map((item, index) => (
                    <MenuItem key={index} value={item.size}>
                      {item.size}
                    </MenuItem>
                  ))}
                </TextField>

                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 600 }}>Opis:</Typography>
                  <Typography>{fetchData.desc.info}</Typography>
                  {fetchData.desc.deliveryInfo && (
                    <Typography sx={{ fontWeight: 600 }}>
                      Dostawa: {fetchData.desc.deliveryInfo}
                    </Typography>
                  )}
                  {fetchData.desc.materialInfo && (
                    <Typography sx={{ fontWeight: 600 }}>
                      Skład: {fetchData.desc.materialInfo}
                    </Typography>
                  )}
                  {fetchData.desc.colorInfo && (
                    <Typography sx={{ fontWeight: 600 }}>
                      Kolor: {fetchData.desc.colorInfo}
                    </Typography>
                  )}
                  {fetchData.desc.sexInfo && (
                    <Typography sx={{ fontWeight: 600 }}>
                      Płeć: {fetchData.desc.sexInfo}
                    </Typography>
                  )}
                </Stack>
                <Button variant="contained" onClick={() => addToCart()}>
                  Dodaj do koszyka
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography>Not found</Typography>
      )}
    </Container>
  );
};

export default ProductComponent;
