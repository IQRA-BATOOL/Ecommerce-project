import axios from "axios";
import { createContext, useContext, useEffect} from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";  
const AppProvider = ({ children }) => {

   const getProducts = async(url)=>{
    const res = await axios.get(url);
    const products = await res.data;
    
console. log (
    " ~ file:productcontext.js ~ line 10  ~getProducts ~ res" ,
    res
);

   };
   useEffect(() => {  
    getProducts(API);
},[]);
    return (
        <AppContext.Provider> value= {{ myname : Iqra}}{children}</AppContext.Provider>
    );
};
//coustom hook
const useproductContext = ()=>{
return useContext (AppContext);
};

export {AppProvider,AppProvider};