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
import {
  carticon,
  contactbutton,
  logintext,
  logotypography,
  navbarbox,
  searchinputprops,
  searchtextfield,
  shopbutton,
} from "./Navbar-style";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import { persistor } from "../../redux/store";


const Navbar = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  let haha = 0;
  items.products.map((item)=>haha += item.quantity)
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
        <Button onClick={() => navigate("/")} variant="text" sx={shopbutton}>
          Shop
        </Button>
        <Button
          variant="text"
          onClick={() => navigate("/contact")}
          sx={contactbutton}
        >
          Contact
        </Button>
        {user ? (
          <IconButton onClick={()=>{persistor.purge();window.location.reload()}}>
            <Avatar />
          </IconButton>
        ) : (
          <IconButton onClick={() => navigate("/login")}>
            
            <>
              {" "}
              <LoginIcon sx={{ color: "white" }} />{" "}
            </>
            
          </IconButton>
        )}
        <Box>
          <IconButton size="large" onClick={() => navigate("/summary")}>
            <Badge badgeContent={haha} color="primary">
              <ShoppingCartIcon sx={carticon} />
            </Badge>
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
