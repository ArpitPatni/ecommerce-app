import React from 'react'
import { Navbar } from '../../Components'
import "./MyCart.css"
import { useProduct } from '../../Context/ProductContext';
import { useEffect, useState } from 'react';

function MyCart() {

    const { productState: { cart, wishList }, productsDispatch } = useProduct();

    const [Total, setTotal] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [OriginalTotal, setOriginalTotal] = useState(0);
  
    useEffect(() => {
      setOriginalTotal(
        cart.reduce((acc, curr) => acc + Number(curr.originalPrice * curr.qty), 0)
      );
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
      );
      setDiscount(
        cart.reduce(
          (acc, curr) =>
            acc + Number((curr.originalPrice - curr.price) * curr.qty),
          0
        )
      );
    }, [cart]);
    return (
        <div>
            <Navbar />
            <h1 class="cart-heading">Shopping Cart</h1>
            <hr />

            {cart.length > 0 ? (
                <>
                    {cart.map((prod) => {
                        return (
                            <div class="card-conatiner">
                                <div>
                                    <img
                                        class="card-image1"
                                        src={prod.image}
                                        alt=""
                                    />
                                </div>
                                <div className='checkpoint'>
                                    <h3 class="product-heading">{prod.name}</h3>
                                    <small class="product-desc">{prod.description}</small>
                                    <div>
                                        <span class="price">Rs {prod.price}</span>
                                        <span class="price actual-price">Rs {prod.originalPrice}</span>
                                        <span class="price">{prod.discount}% off</span>
                                    </div>
                                    <br />
                                    <div className='checkpoint'>

                                        <select
                                            className="qty-button"
                                            value={prod.qty}
                                            onChange={(e) =>
                                                productsDispatch({
                                                    type: "CHANGE_IN_QTY",
                                                    payload: { id: prod.id, qty: e.target.value },
                                                })
                                            }
                                        >
                                            {[...Array(prod.inStock).keys()].map((quantity) => (
                                                <option key={quantity + 1}>{quantity + 1}</option>
                                            ))}
                                        </select>


                                        <button onClick={() => productsDispatch({ type: "REMOVE_FROM_CART", payload: prod })} className='cart-button'>Delete</button>
                                                                    
                            {wishList.some(
                  (wishlistItem) => wishlistItem.id === prod.id
                ) ? (
                  <button class="ecom-btn">Add to Wishlist</button>
                ) : (
                  <button
                    class="ecom-btn"
                    onClick={() =>
                        productsDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: prod,
                      })
                    }
                  >
                    Add to Wishlist
                  </button>
                )}

                                    </div>
                                </div>
                            </div>
                        )
                    })}


                    <div class="price-container">
                        <h3 class="price-details-heading">PRICE DETAILS</h3>
                        <hr />
                        <div class="item">
                            <p class="list">Price of {cart.length} Items</p>
                            <span class="price-items">{OriginalTotal}</span>
                        </div>
                        <div class="item">
                            <p class="list">Discount</p>
                            <span class="price-items">-{Discount}</span>
                        </div>
                        <div class="item">
                            <p class="list">Delievery charges</p>
                            <span class="price-items">FREE</span>
                        </div>
                        <hr />
                        <div class="item">
                            <p class="list">Total Amount</p>
                            <span class="price-items">{Total}</span>
                        </div>
                        <hr />
                        <div class="item saved-money">
                            <p class="list">You will save {Discount} in this order</p>
                        </div>
                        <button class="btn-place-order">Place Order</button>
                    </div>

                </>
            ) : (<div>
                <h1>Cart is Empty.Please add some items in Cart!</h1>
            </div>)}
            
        </div>
    )
}

export default MyCart