import { Route,  Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import ShoppingCard from "./pages/ShoppingCard";
import { createTheme, ThemeProvider,} from '@mui/material'

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
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/summary" element={<ShoppingCard/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </ThemeProvider>
  );
}

export default App;
