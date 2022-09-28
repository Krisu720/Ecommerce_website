import {
  Badge,
  Box,
  Button,
  CardActionArea,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const ShoppingCart = () => {
  return (
    <>
      <Container sx={{ marginTop: "35px" }}>
        <Grid container spacing={2}>
          <Grid item md={7} xs={12}>
            <Paper sx={{ width: "100%", minHeight: "400px" }}>
              <Stack sx={{ p: 5 }} spacing={2}>
                <Typography>Metoda płatności:</Typography>
                <Stack>
                  <Grid container spacing={1}>
                    <Grid item xs={12} lg={6}>
                      <CardActionArea>
                        <Paper
                          sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            bgcolor:'lightgreen'
                          }}
                        >
                          <img src="karta.jpg" height="65px" />
                          <Stack justifyContent="center" alignItems="flex-end">
                            <Typography sx={{ fontWeight: "600" }}>
                              Karta Visa
                            </Typography>
                          </Stack>
                        </Paper>
                      </CardActionArea>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                      <CardActionArea>
                        <Paper
                          sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            
                          }}
                        >
                          <img src="przelewy24.png" height="65px" />
                          <Stack justifyContent="center" alignItems="flex-end">
                            <Typography sx={{ fontWeight: "600" }}>
                              Przelewy24
                            </Typography>
                          </Stack>
                        </Paper>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                </Stack>
                <Typography>Dostawa:</Typography>
                <Stack>
                  <Grid container spacing={1}>
                    <Grid item xs={12} lg={6}>
                      <CardActionArea>
                        <Paper
                          sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            bgcolor:'lightgreen'
                          }}
                        >
                          <img src="inpost.png" height="65px" />
                          <Stack justifyContent="center" alignItems="flex-end">
                            <Typography sx={{ fontWeight: "600" }}>
                              Paczkomat Inpost
                            </Typography>
                            <Typography variant="body2">10,00PLN</Typography>
                          </Stack>
                        </Paper>
                      </CardActionArea>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <CardActionArea>
                        <Paper
                          sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src="dpd.jpg" height="65px" />
                          <Stack justifyContent="center" alignItems="flex-end">
                            <Typography sx={{ fontWeight: "600" }}>
                              Kurier DPD
                            </Typography>
                            <Typography variant="body2">14,00PLN</Typography>
                          </Stack>
                        </Paper>
                      </CardActionArea>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <CardActionArea>
                        <Paper
                          sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <img src="pocztex.jpg" height="65px" />
                          <Stack justifyContent="center" alignItems="flex-end">
                            <Typography sx={{ fontWeight: "600" }}>
                              Pocztex żabka
                            </Typography>
                            <Typography variant="body2">15,00PLN</Typography>
                          </Stack>
                        </Paper>
                      </CardActionArea>
                    </Grid>
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
          </Grid>
          <Grid item md={5} xs={12}>
            <Paper sx={{ width: "100%", height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Stack sx={{ padding: 3, flexGrow: 1 }} spacing={3}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Badge
                      badgeContent={1}
                      color="primary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "7px",
                          border: "0.1px solid gray",
                        }}
                        src="buty.jpg"
                        height="85px"
                        width="85px"
                      />
                    </Badge>
                    <Stack justifyContent="center" spacing={1}>
                      <Typography sx={{ fontWeight: "600" }}>
                        Nike air force
                      </Typography>
                      <Typography sx={{ color: "gray" }}>
                        EU 36 -- 4 US
                      </Typography>
                    </Stack>
                    <Stack direction="row">
                      <Typography sx={{ fontWeight: "600" }}>
                        500,00 PLN
                      </Typography>
                    </Stack>
                  </Stack>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShoppingCart;
