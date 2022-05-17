import { createContext, useContext, useReducer } from 'react';
import { productReducer } from '../Reducer/ProductReducer';

const productContext = createContext();

const ProductProvider = ({ children }) => {
    const [productState, productsDispatch] = useReducer(productReducer, { productData: [],loading:true, cart: [], wishList: [] })
    return (
        <productContext.Provider value={{ productState, productsDispatch }}>
            {children}
        </productContext.Provider>)
}

const useProduct = () => useContext(productContext)
export { ProductProvider, useProduct }