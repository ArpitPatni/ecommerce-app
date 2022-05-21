import React from 'react'
import { useEffect } from 'react'
import { Navbar } from '../../Components'
import axios from "axios";
import { useCategory } from '../../Context/CategoryContext';
import { useFilter } from '../../Context/FilterContext';
import { Link } from 'react-router-dom';
import './homepage.css';

function HomePage() {
    const {state,dispatch}=useCategory();
    const {
        FilterState: { byCategory },
        FilterDispatch,
    } = useFilter();
    useEffect(()=>{
        (async () => {
            try {
                const response = await axios.get("/api/categories");
                console.log(response.data.categories)
              dispatch({ type: "SAVE_DATA", payload: response.data.categories });
            } catch (error) {
              console.log(error, "Could not load data");
            }
          })();
        }, [dispatch]);
    
    return (
        <div>
           
        <Navbar />
            <section class="starting-body">
                <h1 className='home-heading'>Shop by Category</h1>
                <div class="container-body">
                    {state.categoryData.map((prod)=>(<div class="container-part">
                        <img class="background-image" src={prod.image} alt="" />
                       <Link to='/products'> <p onClick={() =>
            FilterDispatch({ type: "CATEGORY", payload: prod.categoryName })
          }
          checked={byCategory && byCategory === prod.categoryName} class="inside-text">{prod.categoryName}</p> </Link>
                    </div>))}
                    
                </div>
            </section>
            <Link to="/products"> <img className='home-image' src="https://media.gq.com/photos/5e3c37de40e46c00081a19ed/16:9/w_2992,h_1683,c_limit/best-workout-shoes-v3.jpg" alt="" /> </Link>

            <div class="offer-body">
                <div class="offer-container">
                    <div class="">
                        <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11986108/2021/8/5/68605977-c696-4351-b21c-f19ed8ba46951628146095530HIGHLANDERMenWhiteSolidSneakers1.jpg" class="offer-image" alt="" />
                    </div>
                    <div class="offer-description">
                        <h4 class="offer-heading">Best Sneakers</h4>
                        <p class="para-description">
                            Get the best quality Sneakers at the best price with easy return and
                            exchange policy.
                        </p>
                        <div class="btn-class">
                        <Link to="/products"><button class="btn">Click here</button></Link>
                        </div>
                    </div>
                </div>
                <div class="offer-container">
                    <div class="offer-image">
                        <img src="https://img.joomcdn.net/67f438401b03825e9d2239e56d0f1335eec48c33_original.jpeg" class="offer-image" alt="" />
                    </div>
                    <div class="offer-description">
                        <h4 class="offer-heading">Best Sports Shoes</h4>
                        <p class="para-description">
                            Get the best quality sports shoes at the best price with easy return and
                            exchange policy.
                        </p>
                        <div class="btn-class">
                        <Link to="/products"><button class="btn">Click Here</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage