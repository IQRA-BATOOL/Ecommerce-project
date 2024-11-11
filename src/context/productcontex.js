
import { createContext, useContext} from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
    return <AppContext.Provider> value= {{ myname : Iqra}}{children}</AppContext.Provider>
};
//coustom hook
const useproductContext = ()=>{
return useContext (AppContext);
};

export {AppProvider,AppProvider};