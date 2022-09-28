import React from "react";

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

const data = [
  {
    id: 1,
    amount: 2,
    name: "Nike air force",
    size: "EU 36 -- 4 US",
    price: 500.0,
    img: "buty.jpg",
  },
];

const RightLayer = () => {
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
          {data.map((card) => (
            <MiniCardComponent key={card.id} cardDetails={card} />
          ))}
        </Stack>
        <Stack sx={{ padding: 3 }} spacing={3}>
          <Stack justifyContent="center" spacing={4} direction="row">
            <TextField label="Promocode" />
            <Button variant="contained">Use</Button>
          </Stack>
          <Divider />
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" sx={{ color: "gray" }}>
              Subtotal
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              500,00 PLN
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" sx={{ color: "gray" }}>
              Shipping
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              10,00 PLN
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="body2" color="success.main">
              Promocode: Free shipping
            </Typography>
            <Typography
              variant="body2"
              color="success.main"
              sx={{ fontWeight: "600" }}
            >
              - 10,00 PLN
            </Typography>
          </Stack>
          <Divider />
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="h6" sx={{ fontWeight: "800" }}>
              Total:{" "}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "800" }}>
              510,00 PLN
            </Typography>
          </Stack>
          <Button variant="contained" color="primary">
            Place Order
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default RightLayer;
