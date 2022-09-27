import { createTheme, ThemeProvider,} from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const theme = createTheme({
  breakpoints: {
    values: {
      xs:0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: "light",
  }
  
})


const MainPage = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Products/>
    </ThemeProvider>
  )
}

export default MainPage