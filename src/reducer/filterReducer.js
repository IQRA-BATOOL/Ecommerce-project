const filterReducer = (state ,  action) => {

 switch (action.type){
 case "LOAD_FILTER_PRODUCTS";
 return {
    ...state ,
    filter_products: [...action.payload],
    all_poroducts:[action.payload]
 }

    default:
         return state
 }
};

export default filterReducer;