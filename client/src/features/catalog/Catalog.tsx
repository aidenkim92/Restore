import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


// Used destructuring by using {products,addProduct} instead of 'props'
export default function Catalog(){
    const [products,setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
    },[]) // adding up the emtpy array dependency here will prevent happening that causes the endless looping - which means it renders only once. 
    // React redenders when the products list is being added, and the .then(data => setProducts(data)) will add the component and re-render.
    // Hence, without having the empty array will trigger re-rendering infinitely
  
    return(
        <>
            <ProductList products={products}/>
        </>
    )
}