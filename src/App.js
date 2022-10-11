import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import ShoppingCard from "./pages/ShoppingCard";
import { createTheme, ThemeProvider } from "@mui/material";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "./redux/cartRedux";

const store = configureStore({
  reducer: {
    cart: cartRedux
  }
})


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/summary" element={<ShoppingCard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
