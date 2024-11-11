import React, { useContext } from 'react'
import HeroSection from "./components/HeroSection";
import {AppContext} from "./context/productcontex";
import {useproductContext} from "./context/productcontex";
const About = () => {
    const {myName} = useproductContext ();
    const data = {
        name: "thapa Ecommerce",
    };

return(
<>
{ myName}

<HeroSection myData={data}/> {  "  "}

 </>

);
};
export default About