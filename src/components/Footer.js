import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button} from "../styles/Button";
import {FaDiscord , FaInstagram , FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
       <div className = " contact-short">
        <div className="grid grid-two-colume ">
<div>
<h3> Ready to get started?</h3>
<h3> Talk to us today</h3>


</div>

<div>
    <button>

<Nablink to = " /contact" >
Get started
</Nablink>
        </button>
        
        
         </div>
        </div>
       </div>

       {/* main footer */}
       <footer>
        <div className=" container grid grid-four-column"> 
        <div className="Footer-about"> 
          <h3> Thapa Technical</h3> 
          <p> lorem ipsum dolor, sit emet consectetur adipisicing elit.</p>
        </div>
        <div className = " footer-Subscribe "> 

        <h3> Subscribe to get important updates</h3> 
        <form action= "#" >
          <input type = " email" placeholder=" Your e-mail"/>
          <input type = " submit " value= " subsribe"/>
        </form>
        </div>
        <div className=" footer-social">


          <h3> follow us </h3>
          <div className=" footer-social--icons">
            <div>
              <FaDiscord className = "icons" />
               </div>
               <div>
               <a href="https://www.youtube.com/watch?v=X6EfH1KlZlk&t=323s " target= "blank">
                <FaYoutube className = " icons" />
               </a>
               <h3>Call Us </h3>
              { /*<a href = " tel : 123456789"> +92 3494234195</a>*/}
              <h3>+92 3494234195 </h3>
               </div>
             <div  className="footer-bottom--section">
              <hr/>
              <div className="container grid grid-two-column">
                <p> @ {new Date().getFullYear ()} ThapaTechnical. All rights Reserved
                  <p> PRIVACY POLICY </p>
                  <P> TERMS & CONDITIONS</P>
                </p>
              </div>
              </div>  
          </div>
        </div>
        </div>
       </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
