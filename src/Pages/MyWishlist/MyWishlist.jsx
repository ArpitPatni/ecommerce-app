import React from 'react'
import { Navbar } from '../../Components'
import { useProduct } from '../../Context/ProductContext';
import "./MyWishlist.css"
function MyWishlist() {
    const { productState: { wishList }, productsDispatch } = useProduct();
    return (
        <div>
            <Navbar />
            <h1>My Wishlist</h1>
            <div className='product-flex'>
                {wishList.map((prod) => {
                    return (

                        <div class="card-container">
                            <h4 class="card-with-badge">
                                <i class="fas fa-heart"></i>
                            </h4>
                            <img class="card-image" src={prod.image} alt={prod.alt} />
                            <div class="description">
                                <p class="card-heading">{prod.name}</p>
                                <p className="product-description">{prod.description}</p>
                                <div class="flex product-price">
                                    <p>Rs. {prod.price}</p>
                                    <p className="original-price">Rs. {prod.originalPrice} </p>
                                    <p>{prod.discount}% off</p>
                                </div>
                                <div className="flex product-button">

                                    {wishList.some((item) => item.id === prod.id) ? (<button onClick={() => productsDispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod })} className='ecom-btn'>Remove from Wishlist </button>) : (<button className='ecom-btn' onClick={() => productsDispatch({ type: "ADD_TO_WISHLIST", payload: prod })}>Add to Wishlist</button>)}

                                </div>
                            </div>
                        </div>)

                })}





            </div>
        </div>
    )
}

export default MyWishlist 