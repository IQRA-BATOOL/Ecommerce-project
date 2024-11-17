

const FormatPrice = ({price}) => {
  return  Intl.NumberFormat(" en_In",{
    style: " currency  " ,
    currency: " INR" ,
    maximumFractionDegits : 2,
  } ).format (price/100);                
};

export default FormatPrice;