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
         let userSortValue = document.getElementById("sort");
         let sort_value = usersortValue.options[userSortValue.selectedIndex].value;
         return {
         
            ...state,
            sorting_view,
         };
   






    default:
         return state
 }
};

export default filterReducer;