import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./Context/CategoryContext";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext";
import { ProductProvider } from "./Context/ProductContext";
import { AuthProvider } from "./Context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <ProductProvider>
            <CategoryProvider>
              <App />
            </CategoryProvider>
          </ProductProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode >,
  document.getElementById("root")
);
