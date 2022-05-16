import "./App.css";
import { Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Homepage/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<HomePage />} />
        <Route path="/SignUp" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/myCart" element={<HomePage />} />
        <Route path="/myWishlist" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
