import { createContext , useContext,useReducer ,useEffect} from " react " ;
//import FilterSection from "../components/FilterSection";
import  Reducer  from "../reducer/filterReducer";
import {useProductContext} from "./productcontext";
const FilterContext = createContext () ;

const initialState = {
    filter_products : [],
    all_products : [],
  grid_view: true,
  sorting_value: "lowest",
  Filters:
  {
    text=" ",
  category :   "all" ,
  color : " all",
  maxPrice: 0,
  price :    0,
  minPrice : 0,
  },

};
 export const FilterContextProvider = ({children}) => {
    const {products } = useProductContext();
p
    const [state , dispatch ] = useReducer(reducer,initialState);
const setGridView = () => {
    return dispatch(type: "SET_GRID_VIEW")};


    const setListView = () => {
        return dispatch(type : "SET_List_VIEW")};

    //sorting function 
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch ({ type : "GET_SORT_VALUE "});
    };
    const updateFiltterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        
        return dispatch({type : "UPDATE_FILTER_VALUE ",payload : {name , value}})

    };



    const clearFilters  = () => {
        dispatch ({type : "CLEAR _FILTERS"})
    }
useEffect(() => {
console.lod("hi");
}, [state.sorting_value]);



    useEffect(( ) =>{
        dispatch ({type : "FILTER_PRODUCTS"})
           dispatch ({type : "LOAD _FILTER_PRODUCTS" });
    }, [ products, state.sorting_value ,  state.filters]);
 return (
 <FilterContext.Provider value = {{ ...state , setGridView , setListView, sorting,updateFiltterValue,clearFilters}}>
    {children}

    </FilterContext.Provider>
);
}
export const useFilterContext = () => {

return useContext (FilterContext);

};



