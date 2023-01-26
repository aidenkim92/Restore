import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


// Used destructuring by using {products,addProduct} instead of 'props'
export default function Catalog(){
    const [products,setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    },[]) // adding up the emtpy array dependency here will prevent happening that causes the endless looping - which means it renders only once. 
    // React redenders when the products list is being added, and the .then(data => setProducts(data)) will add the component and re-render.
    // Hence, without having the empty array will trigger re-rendering infinitely
  
    if(loading) return <LoadingComponent message="Loading Product..."/>


    return(
        <>
            <ProductList products={products}/>
        </>
    )
}