import React from 'react'
import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import { MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";

const Services = () => {
  return 
    <Wrapper>
     <div className = "container">
       <div className= "grid grid-three-column">
        <div className= "services-1">
            <div>
                <TbTruckDelivery className= "icon"/>
                <h3> Super Fast and free Delivery</h3>
            </div>
            <div className='services-2'>
                <div className = "services-colum-2">
                    <div>
                        <MdSecurity className = "icon"/>
                        <h3> Non-contact shipping </h3>
                    </div>

                </div>
                <div className = "services-colum-2">
                    <div>
                        <GiReceiveMoney className = "icon"/>
                        <h3> Money-back Guaranteed</h3>
                    </div>

                </div>
            </div>
         <div className = "services-3">
            <div>
            <RiSecurePaymentLine className = "icon"/>
            <h3> Super Secure Payment System</h3>
            </div>
         </div>
        </div>
        </div> 
        </div>   
    </Wrapper>

}

export default Services