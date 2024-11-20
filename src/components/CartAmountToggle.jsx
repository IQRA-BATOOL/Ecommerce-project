import React from 'react'

const CartAmountToggle = ({amount , setDecrease , setIncrease}) => {
  return (
    <div className=' "cart_button'>
        <div className="amount_toggle">

          <button onclick = { ( ) => setDecrease()}>
            <FaMinus/>
          </button>

          <div className = "amount-style ">{amount}</div>
          <button onClick = {() =>  setIncrease ()}>
            
          </button>
</div>
    </div>
  );
};

export default CartAmountToggle;