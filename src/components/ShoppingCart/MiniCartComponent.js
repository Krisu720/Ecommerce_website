import React from "react";
import { Badge, Stack, Typography } from "@mui/material";
const MiniCardComponent = ({ cardDetails }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Badge
        badgeContent={cardDetails.amount}
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
          src={cardDetails.img}
          height="85px"
          width="85px"
        />
      </Badge>
      <Stack justifyContent="center" spacing={1}>
        <Typography sx={{ fontWeight: "600" }}>{cardDetails.name}</Typography>
        <Typography sx={{ color: "gray" }}>{cardDetails.size}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography sx={{ fontWeight: "600" }}>
          {cardDetails.price} PLN
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MiniCardComponent;
