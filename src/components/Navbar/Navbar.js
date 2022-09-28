import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { carticon, contactbutton, logintext, logotypography, navbarbox, searchinputprops, searchtextfield, shopbutton } from "./Navbar-style";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

const logged = false;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={navbarbox}>
      <Typography sx={logotypography}>LOGO</Typography>
      <TextField
        InputProps={searchinputprops}
        autoComplete="off"
        fullWidth
        sx={searchtextfield}
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          onClick={() => navigate("/")}
          variant="text"
          sx={shopbutton}
        >
          Shop
        </Button>
        <Button
          variant="text"
          onClick={() => navigate("/contact")}
          sx={contactbutton}
        >
          Contact
        </Button>
        <IconButton>
          {logged && <Avatar />}
          {!logged && (
            <>
              {" "}
              <LoginIcon sx={{ color: "white" }} />{" "}
              <Typography
                sx={logintext}
              >
                Log in
              </Typography>{" "}
            </>
          )}
        </IconButton>
        <Box>
          <IconButton size="large" onClick={() => navigate("/summary")}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon sx={carticon} />
            </Badge>
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
