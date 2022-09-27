import { Route,  Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import ShoppingCard from "./pages/ShoppingCard";

function App() {
  return (
   <>
    <Routes>
      {/* <Route path="/" element={<Product/>}/> */}
      <Route path="/" element={<MainPage/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/summary" element={<ShoppingCard/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
   </>
  );
}

export default App;
