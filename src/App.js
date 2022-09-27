import { Route,  Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Product/>}/>
      {/* <Route path="/" element={<MainPage/>}/> */}
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
   </>
  );
}

export default App;
