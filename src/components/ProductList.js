import React from 'react'
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
 import ListView from "./listView";


 
const ProductList = () => {
    const {filter_products,  setGridView} = useFilterContext();

if ( setGridView === true) {
      return <GridView products = {filter_products}  />;
}
 

if ( setGridView === false) {
    return < ListView products = {filter_products}  />;
}
  
}

export default ProductList