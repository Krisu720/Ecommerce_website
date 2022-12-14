import React from "react";
import { Badge, Box, CardActionArea, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/cartRedux";
import styled from "@emotion/styled";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { removeProductFromCart } from "../../redux/apiCalls";
const Image = styled("img")({
  borderRadius: "7px",
  border: "0.1px solid gray",
});

const MiniCardComponent = ({ cardDetails, index }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let cartId;
    cart.products.map((item, index) => {
      if (index === id) {
        cartId = item._id;
      }
    });
    removeProductFromCart(dispatch,{id: id,cartId: cartId})
  };

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Badge
        badgeContent={cardDetails.quantity}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <CardActionArea sx={{ borderRadius: "7px" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                opacity: 0,
                position: "absolute",
                backgroundColor: "red",
                zIndex: 1,
                height: "85px",
                width: "85px",
                borderRadius: "7px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all .1s",
                border: "0.1px solid gray",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "error.main",
                  opacity: 0.5,
                },
              }}
              onClick={() => handleDelete(index)}
            >
              <HighlightOffIcon sx={{ color: "white" }} />
            </Box>
            <Image
              src={cardDetails.productId.img}
              height="85px"
              width="85px"
              onClick={() => handleDelete(index)}
            />
          </Box>
        </CardActionArea>
      </Badge>
      <Stack justifyContent="center" spacing={1}>
        <Typography sx={{ fontWeight: "600" }}>
          {cardDetails.productId.name}
        </Typography>
        <Typography sx={{ color: "gray" }}>{cardDetails.size}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography sx={{ fontWeight: "600" }}>
          {cardDetails.productId.price * cardDetails.quantity} PLN
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MiniCardComponent;
