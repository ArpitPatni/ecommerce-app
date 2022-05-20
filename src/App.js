import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage/HomePage";
import Products from "./Pages/Products/Products";
import MyCart from "./Pages/MyCart/MyCart";
import MyWishlist from "./Pages/MyWishlist/MyWishlist";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<HomePage />} />
        <Route path="/SignUp" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myWishlist" element={<MyWishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
