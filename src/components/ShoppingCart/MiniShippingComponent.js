import React from 'react'
import {
    CardActionArea,
    Grid,
    Paper,
    Stack,
    Typography,
  } from "@mui/material";

const MiniShippingComponent = ({cardDetails}) => {
  return (
     <Grid item xs={12} lg={6}>
              <CardActionArea>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "lightgreen",
                  }}
                >
                  <img src={cardDetails.img} height="65px" />
                  <Stack justifyContent="center" alignItems="flex-end">
                    <Typography sx={{ fontWeight: "600" }}>
                      {cardDetails.name}
                    </Typography>
                    <Typography variant="body2">{cardDetails.price} PLN</Typography>
                  </Stack>
                </Paper>
              </CardActionArea>
            </Grid>
  )
}

export default MiniShippingComponent