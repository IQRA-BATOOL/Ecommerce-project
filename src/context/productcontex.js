import axios from "axios";
import { createContext, useContext, useEffect,useReducer} from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";  
 const initialState = {
    isloading: false,
    isError: false,
    products:[],
    featureProducts:[],
 }
 
 


const AppProvider = ({ children }) => {
const [state , dispatch] = useReducer(reducer,initialState);

   const getProducts = async(url)=>{
    dispatch({type:"SET_LOADING"})

   try{
    const res = await axios.get(url);
    const products = await res.data;
    dispatch({type: " MY_API_DATA" ,playload: products});
   } catch (error){
dispatch({type:"API_ERROR "})
    }
    
    
console. log (
    " ~ file:productcontext.js ~ line 10  ~getProducts ~ res" ,
    res
);

   };
   useEffect(() => {  
    getProducts(API);
},[]);
    return (
        <AppContext.Provider> value= {{...state}}{children}</AppContext.Provider>
    );
};
//coustom hook
const useproductContext = ()=>{
return useContext (AppContext);
};

export {AppProvider,AppProvider};