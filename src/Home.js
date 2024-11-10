import React from "react";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
const Home = ( ) => {
    const data = {
        name: "thapa store"
    };
    return <HeroSection myData = {data}/>

};
<>
<HeroSection myData = {data} />
<Services/>
<Trusted/>

</>
export default Home;