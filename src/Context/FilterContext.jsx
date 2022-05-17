import {createContext,useContext,useReducer} from 'react';
import FilterReducer from '../Reducer/FilterReducer'
const FilterContext=createContext();

const FilterProvider = ({ children }) => {
    const [FilterState, FilterDispatch] = useReducer(FilterReducer, {
      byCategory: [],
      sortBy: null,
      byRating: 0,
      byPrice: null,
    });
    return (
      <FilterContext.Provider value={{ FilterState, FilterDispatch }}>
        {children}
      </FilterContext.Provider>
    );
  };
  
  const useFilter = () => useContext(FilterContext);
  
  export { useFilter, FilterProvider };