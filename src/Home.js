import React from "react";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProducts";
const Home = ( ) => {
    const data = {
        name: "thapa store"
    };
    return <HeroSection myData = {data}/>

};
<>
<HeroSection myData = {data} />
<Services/>
<FeatureProduct/>
<Trusted/>

</>
export default Home;