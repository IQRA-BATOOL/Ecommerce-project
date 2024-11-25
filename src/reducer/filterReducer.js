const filterReducer = (state ,  action) => {

 switch (action.type){
 case "LOAD_FILTER_PRODUCTS":
 return {
    ...state ,
    filter_products: [...action.payload],
    all_poroducts:[action.payload]
 };
 case "SET_GRIDVIEW" :
    return {
      ...state,
      gride_view : true

    };
    case "SET_LIST_VIEW":
      return {
         ...state,
         grid_view: false,
      };
      case "GET_SORT_VALUE":
        // let userSortValue = document.getElementById("sort");
         //let sort_value = usersortValue.options[userSortValue.selectedIndex].value;
         return {
         
            ...state,
            sorting_value : action.payload,
         };
         case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };
   case "UPDATE_FILTER_VALUE" :
    const {name , value} = action.payload;

return {
  ...state,
  filters: {
    ...state.filters,
    [name] : value ,
  },
}

  case "FILTER_PRODUCTS":
    let { all_poroducts} = state;
    let tempFilterProduct =[...all_poroducts];

const {text, category, company } = state.filters;
if (text) {
  tempFilterProduct =  tempFilterProduct.filter ((curElem)=> {
 return curElem.name.tolowerCase().includes(text);
  })
}
// if (category){
//   tempFilterProduct = tempFilterProduct.filter((curElem)=>
//      curElem.category === category

//   );
// }

if (company){
  tempFilterProduct = tempFilterProduct.filter(
    (curElem)=>
     curElem.company.tolowerCase === company.tolowerCase ()

  );
}














    return {
      ...state,
      filter_products: tempFilterProduct,
    };
   default :
   return state ;

}
};

export default filterReducer;