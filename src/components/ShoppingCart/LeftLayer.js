import React from "react";

import {
  CardActionArea,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MiniPaymentComponent from "./MiniPaymentComponent";
import MiniShippingComponent from "./MiniShippingComponent";
const data = [
  {
    id: 1,
    img: "karta.jpg",
    name: "Karta Visa",
    method: "visa",
  },
  {
    id: 2,
    img: "przelewy24.png",
    name: "Przelewy24",
    method: "przelewy24",
  },
];

const data2 = [
  {
    id: 1,
    img: "inpost.png",
    name: "Paczkomat Inpost",
    price: 9.99,
    method: "paczkomat",
  },
  {
    id: 2,
    img: "pocztex.jpg",
    name: "Pocztex żabka",
    price: 7.89,
    method: "pocztex",
  },
  {
    id: 3,
    img: "dpd.jpg",
    name: "DPD Kurier",
    price: 12.00,
    method: "dpd",
  },
];

const LeftLayer = () => {
  return (
    <Paper sx={{ width: "100%", minHeight: "400px" }}>
      <Stack sx={{ p: 5 }} spacing={2}>
        <Typography>Metoda płatności:</Typography>
        <Stack>
          <Grid container spacing={1}>
            {data.map((item) => (
              <MiniPaymentComponent key={item.id} cardDetails={item} />
            ))}
          </Grid>
        </Stack>
        <Typography>Dostawa:</Typography>
        <Stack>
          <Grid container spacing={1}>
            {data2.map((item) => <MiniShippingComponent key={item.id} cardDetails={item}/>)}
          </Grid>
        </Stack>
        <Typography>Dane odbiorcy:</Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Email" />
          <TextField label="nr telefonu" />
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Imie" />
          <TextField label="Nazwisko" />
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <TextField label="Ulica i nr budynku" />
          <TextField label="Miasto" />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <TextField label="kod pocztowy" />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default LeftLayer;
