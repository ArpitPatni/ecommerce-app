import { createContext ,useContext,useReducer} from "react";
import { reducerFunc } from "../Reducer/CategoryReducer";

const categoryContext=createContext();

const CategoryProvider=({children})=>{
    const[state,dispatch]=useReducer(reducerFunc,{categoryData:[]})
return(<categoryContext.Provider value={{state,dispatch}}>{children}</categoryContext.Provider>)
}
export const useCategory=()=>useContext(categoryContext);

export {CategoryProvider}