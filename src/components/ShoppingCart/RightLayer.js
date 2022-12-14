import React, { useState } from "react";
import axios from 'axios'
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MiniCardComponent from "./MiniCartComponent";
import { useDispatch, useSelector } from "react-redux";
import { addInfo, addPromocode } from "../../redux/cartRedux";
import InfoIcon from "@mui/icons-material/Info";

const RightLayer = ({ items }) => {
  const getredux = useSelector((state)=> state.cart)
  const ship = items.delivery.name !== "" ? true : false;
  const promo = items.promocode.price !== 0 ? true : false;
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

 
  function useCode() {
    dispatch(
      addPromocode({
        name: code,
      })
    );
  }



function sendInfo() {
   axios.post('http://localhost:3001/api/stripe/payment',{...getredux.info,products: getredux.products}).then(data=>window.location.href = data.data)
  }

  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Stack sx={{ padding: 3, flexGrow: 1 }} spacing={3}>
          {items.products.length !== 0 ? (
            items.products.map((card, index) => (
              <MiniCardComponent key={index} cardDetails={card} index={index} />
            ))
          ) : (
            <Stack
              sx={{ height: "100%" }}
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ color: "gray", fontSize: "30px" }}>
                Koszyk Pusty
              </Typography>
            </Stack>
          )}
        </Stack>
        <Stack sx={{ padding: 3 }} spacing={3}>
          <Stack
            justifyContent="center"
            spacing={1}
            direction="row"
            alignItems="center"
          >
            <InfoIcon sx={{ color: "gray" }} />
            <Typography sx={{ color: "gray" }} variant="body2">
              Kliknij na zdj??cie produktu aby go usun???? z koszyka.
            </Typography>
          </Stack>
          <Divider />
          <Stack justifyContent="center" spacing={4} direction="row">
            <TextField
              label="Kod promocyjny"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button variant="contained" onClick={useCode}>
              U??yj
            </Button>
          </Stack>
          <Divider />
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" sx={{ color: "gray" }}>
              Subtotal
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              {items.total} PLN
            </Typography>
          </Stack>
          {ship && (
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" sx={{ color: "gray" }}>
                Shipping
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                {items.delivery.price} PLN
              </Typography>
            </Stack>
          )}
          {promo && (
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="body2" color="success.main">
                Promocode: {items.promocode.name}
              </Typography>
              <Typography
                variant="body2"
                color="success.main"
                sx={{ fontWeight: "600" }}
              >
                {items.promocode.price} PLN
              </Typography>
            </Stack>
          )}
          <Divider />
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="h6" sx={{ fontWeight: "800" }}>
              Total:{" "}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "800" }}>
              {Math.round(
                (Math.round(items.total * 100) / 100 +
                  Math.round(items.delivery.price * 100) / 100) *
                  100
              ) /
                100 +
                items.promocode.price}{" "}
              PLN
            </Typography>
          </Stack>
          <Button variant="contained" color="primary" onClick={sendInfo}>
            Place Order
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default RightLayer;
