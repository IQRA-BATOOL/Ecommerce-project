import { createContext , useContext,useReducer ,useEffect} from " react " ;
import  Reducer  from "../reducer/filterReducer";
import {useProductContext} from "./productcontext";
const FilterContext = createContext () ;

const initialState = {
    filter_products : [],
    all_products : [],
  grid_view: false,
};
 export const FilterContextProvider = ({children}) => {
    const {products } = useProductContext();
p
    const [state , dispatch ] = useReducer(reducer,initialState);
const setGridView = () => {
    return dispatch(type : "SET_GRID_VIEW")};


    const setListView = () => {
        return dispatch(type : "SET_List_VIEW")};

    
    useEffect(( ) =>{
           dispatch ({type : "LOAD _FILTER_PRODUCTS" , payload: products});
    }, []);
 return (
 <FilterContext.Provider value = {{ ...state , setGridView , setListView}}>
    {children}

    </FilterContext.Provider>
);
}
export const useFilterContext = () => {

return useContext (FilterContext);

};



