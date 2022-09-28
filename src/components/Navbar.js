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
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

const logged = false;

const Navbar = () => {
const navigate= useNavigate()

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
    
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        
      >
          <Button onClick={()=>navigate('/')} variant="text" sx={{ color: "white",marginLeft: '5px' }}>
            Shop
          </Button>
        <Button variant="text" sx={{ color: "white" }} onClick={()=>navigate('/contact')}>
          Contact
        </Button>
        <IconButton>
          {logged && <Avatar />}
          {!logged && (
            <>
              {" "}
              <LoginIcon sx={{ color: "white" }} />{" "}
              <Typography
                sx={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  marginLeft: "5px",
                  color: "white"
                }}
              >
                Log in
              </Typography>{" "}
            </>
          )}
        </IconButton>
        <Box>
          <IconButton size="large" onClick={()=>navigate('/summary')}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon sx={{color: 'white'}}/>
            </Badge>
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
