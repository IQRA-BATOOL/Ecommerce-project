import { createContext , useContext,useReducer ,useEffect} from " react " ;
import  Reducer  from "../reducer/filterReducer";
import {useProductContext} from "./productcontext";
const FilterContext = createContext () ;

const initialState = {
    filter_products : [],
    all_products : [],
  grid_view: true,
};
 export const FilterContextProvider = ({children}) => {
    const {products } = useProductContext();
p
    const [state , dispatch ] = useReducer(reducer,initialState);
const setGridView = () => {
    return dispatch(type : "SET_GRIDVIEW")};

    
    useEffect(( ) =>{
           dispatch ({type : "LOAD _FILTER_PRODUCTS" , payload: products});
    }, []);
 return (
 <FilterContext.Provider value = {{ ...state}}>
    {children}

    </FilterContext.Provider>
);
}
export const useFilterContext = () => {

return useContext (FilterContext);

};



