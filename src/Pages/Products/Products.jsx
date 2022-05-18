import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import Navbar from '../../Components/Navbar/Navbar';
import Filters from '../../Components/FilterSideBar/Filters';
import { useProduct } from '../../Context/ProductContext';
import { useFilter } from '../../Context/FilterContext';
import { Link } from 'react-router-dom';
const Products = () => {

    const {
        FilterState: { byCategory, sortBy, byRating, byPrice },

    } = useFilter();
    
    
    const { productState: { productData, cart, wishList }, productsDispatch } = useProduct();

    
    const transformProduct = () => {
        let sortedProduct = productData;

        if (sortBy) {
            sortedProduct = sortedProduct.sort((a, b) =>
                sortBy === "PRICE_LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
            );
        }
        
        if (byCategory) {
            sortedProduct = sortedProduct.filter(
                (prod) => prod.categoryName === byCategory
            );
        }
        if (byRating) {
            sortedProduct = sortedProduct.filter((prod) => prod.rating >= byRating);
        }
        if (byPrice) {
            sortedProduct = sortedProduct.filter((prod) => prod.price <= byPrice);
        }
        return sortedProduct;
    };



    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("./api/products")
                productsDispatch({ type: "SAVE_DATA", payload: response.data.products })
            } catch (error) {
                console.log(`${error} Error occured`)
            }
        })()
    }, [productsDispatch])
    
    return (
        <div>
            <Navbar />
            <div className='main'>
                <div className='main-body-sec'>
                    <Filters />
                    <div className='right-body-sec'>
                        <h1 className='showing-heading'>Products</h1>
                        
                        <div className='product-flex'>
                            {transformProduct().map((prod) => {
                                
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

                                                    {cart.some((item) => item.id === prod.id) ? (<Link to='/myCart'><button className='ecom-btn'>Go To Cart</button></Link>) : (<button className='ecom-btn' onClick={() => productsDispatch({ type: "ADD_TO_CART", payload: prod })}>Add to Cart</button>)}

                                                    {wishList.some((item) => item.id === prod.id) ? (<Link to='/myWishlist'><button className='ecom-btn'>Go to Wishlist </button></Link>) : (<button className='ecom-btn' onClick={() => productsDispatch({ type: "ADD_TO_WISHLIST", payload: prod })}>Add to Wishlist</button>)}

                                                </div>
                                            </div>
                                        </div>)
                                    

                            })}





                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


export default Products