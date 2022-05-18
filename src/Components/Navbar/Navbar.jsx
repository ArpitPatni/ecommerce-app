import React from 'react'

import { Link } from "react-router-dom"
import { useFilter } from '../../Context/FilterContext';
import { useProduct } from '../../Context/ProductContext';
function Navbar() {

  const { FilterDispatch } = useFilter();
  const { productState: {cart, wishList } } = useProduct();
  
  return (
    <div>
      <nav class="flex nav-item background-color">
        <div class="left-nav flex">
          <Link to="/"><a href="index.html" class="nav-heading">SHOE STORE</a></Link>
          <input class="search-bar" placeholder="Search" />
        </div>
        <div class="right-nav flex">

        <Link to="/login"><button className="btn btn-round">Login</button></Link>

          <Link to="/SignUp"><button class="btn btn-round" >Signup</button></Link>
          <Link to="/products"><button onClick={() => {
            FilterDispatch({ type: "Clear_Filter" });
          }} class="btn btn-round" >Products</button></Link>
          <Link to='/myCart'>
            <button class="badge-button badge-lg">
              <i class="fas fa-shopping-cart fa-2x"></i>
              <span class="icon-button-badge flex center icon-xl">{cart.length}</span>
            </button>
          </Link>
          <Link to="/myWishlist">
            <button class="badge-button badge-lg" >
              <i class="fas fa-heart fa-2x"></i>
              <span class="icon-button-badge flex center icon-xl">{wishList.length}</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar