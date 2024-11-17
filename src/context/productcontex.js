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
    isSingleloading : false,
    singleProduct: {} ,
 }
 
 


const AppProvider = ({ children }) => {
const [state , dispatch] = useReducer(reducer,initialState);

   const getProducts = async(url)=>{
    dispatch({type:"SET_LOADING"})

   try{
    const res = await axios.get(url);
    const products = await res.data;
    dispatch({type: " SET_SINGLE_LOADING" ,playload: products});
   } catch (error){
dispatch({type:"API_ERROR "});
    }
    const getSingleproduct = async(url) => {
try{
    const res = await axios.get(url);
    const Singleproductproducts = await res.data;
    dispatch({type: " MY_SINGLE_PRODUCT" ,playload: singleProduct});
} catch (error){
    dispatch( type :" SET_SINGLE_ERROR")
}

    };
    


   };
   useEffect(() => {  
    getProducts(API);
},[]);
    return (
        <AppContext.Provider> value= {{...state,getSingleproduct}}{children}</AppContext.Provider>
    );
};
//coustom hook
const useproductContext = ()=>{
return useContext (AppContext);
};

export {AppProvider,AppProvider};