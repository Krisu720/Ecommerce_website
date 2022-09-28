import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Container>
        
            <Typography>Contact</Typography>
            <Typography>If u have problem contact ples</Typography>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Typography>Sklep@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>+48 134 123 512</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Ul. street 2700</Typography>
                </Grid>
            </Grid>
        
    </Container>
  )
}

export default Contact