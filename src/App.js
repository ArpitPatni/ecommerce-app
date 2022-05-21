import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/Homepage/HomePage"
import SignUp from "./Pages/Signup-Page/SignUp";
import MyCart from "./Pages/MyCart/MyCart";
import MyWishlist from "./Pages/MyWishlist/MyWishlist";
import { Routes, Route} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Mockman from 'mockman-js';
import PageNotFound from "./Pages/404-page/PageNotFound";
import { RequiresAuth } from "./RequiresAuth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/products" element={<Products />} />

        <Route
          path="/myCart"
          element={
            <RequiresAuth>
              <MyCart />
            </RequiresAuth>
          }
        />
        <Route
          path="/myWishlist"
          element={
            <RequiresAuth>
              <MyWishlist />
            </RequiresAuth>
          }
        />

        <Route path='/mockman' element={<Mockman />} > </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
