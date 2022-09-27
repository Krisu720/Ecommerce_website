import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Wrapper } from "./Navbar-style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

const logged = true;

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#266666",
        height: "85px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0px 50px",
      }}
    >
      <Typography
        sx={{ fontWeight: 800, fontSize: { xs: 22, md: 50 }, color: "white" }}
      >
        LOGO
      </Typography>
      <TextField
        sx={{ margin: " 0px 70px", display: { xs: "none", md: "block" } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        autoComplete="off"
        fullWidth
      />
      <IconButton sx={{margin: '0 5px'}}>
        <SearchIcon sx={{ color: "white" }} />
      </IconButton>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        
      >
        <Button variant="text" sx={{ color: "white" }}>
          Shop
        </Button>
        <Button variant="text" sx={{ color: "white" }}>
          Contact
        </Button>

        <IconButton>
          {logged && <Avatar />}
          {!logged && (
            <>
              {" "}
              <LoginIcon />{" "}
              <Typography
                sx={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  marginLeft: "5px",
                }}
              >
                Log in
              </Typography>{" "}
            </>
          )}
        </IconButton>
        <Box>
          <IconButton size="large">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
