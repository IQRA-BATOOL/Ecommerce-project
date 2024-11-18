import React from 'react'
import styled from "styled-components";
import {Button} from "../styles/Button"
const HeroSection = ({myData}) => {
    console.log (
        "~ file: HeroSection.js ~ line 6 ~ HeroSection ~ myData" , myData
        
    );
  return (
    <Wrapper>
        <div className = "container">
            <div className= "grid grid-two-column">
                <div className = " hero-section-data"></div>
                <p className=" intro-data">Welcome to</p>
                <h1>{name}</h1>
<p>
"Welcome to a place where shopping
 is easy and enjoyable! Our grocery
 store is filled with fresh fruits,
 veggies, and everything you need 
 to make tasty meals. We bring quality
 items to your table, making every trip 
 quick, convenient, and friendly.
 Let us help you find exactly 
 what you need to make life
a little brighter and your
 kitchen a little happier!"
</p>
<Navlink>
    <Button>

    </Button>
</Navlink>
<Button> show now</Button>
<div className = " hero-section-image"></div>
<figure>
    <img src = " images/hero.jpg"
      alt= " hero-section-photo"
      className= "img-style"
      />
</figure>
  </div>
</div>
 </Wrapper>
  )
};
const Wrapper = styled.section``;
export default HeroSection