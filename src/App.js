import { Route, Routes,Navigate } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import ShoppingCard from "./pages/ShoppingCard";

import RegisterPage from "./pages/RegisterPage";

import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";






function App() {

  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  return (
    
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/summary" element={<ShoppingCard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <LoginPage />  } />
        </Routes>
     
  );
}

export default App;
