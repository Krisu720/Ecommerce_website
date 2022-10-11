import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

const navbarbox = {
  backgroundColor: "#266666",
  height: "85px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "0px 50px",
};

const logotypography = {
  fontWeight: 800,
  fontSize: { xs: 22, md: 50 },
  color: "white",
};

const searchtextfield = {
  margin: " 0px 70px",
  maxWidth: "400px",
  display: { xs: "none", md: "block" },
};

const searchinputprops = {
  endAdornment: (
    <InputAdornment position="end">
      <SearchIcon />
    </InputAdornment>
  ),
};

const shopbutton = { color: "white", marginLeft: "5px" };

const contactbutton = { color: "white" };

const logintext = {
    fontSize: "20px",
    textTransform: "uppercase",
    marginLeft: "5px",
    color: "white",
  }

  const carticon = { color: "white" }

export {
  navbarbox,
  logotypography,
  searchtextfield,
  searchinputprops,
  shopbutton,
  contactbutton,
  logintext,
  carticon
};
