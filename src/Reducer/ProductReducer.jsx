const productReducer=(state,action)=>{
    switch (action.type) {
        case "SAVE_DATA":
            return {...state,productData:action.payload}
        case "ADD_TO_CART":
            return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case "REMOVE_FROM_CART":
            return{...state,cart:state.cart.filter((c)=>c.id !== action.payload.id)}
        case "ADD_TO_WISHLIST":
            return{...state,wishList:[...state.wishList,{...action.payload,qty:1}]}
        case "REMOVE_FROM_WISHLIST":
            return{...state,wishList:state.wishList.filter((c)=>c.id !==action.payload.id)}
            case "CHANGE_IN_QTY":
                return {
                  ...state,
                  cart: state.cart.filter((cartitem) =>
                    cartitem.id === action.payload.id ? (cartitem.qty = action.payload.qty) : cartitem.qty
                  ),
                };
            
        default:
          return state;
    }

}

export {productReducer}