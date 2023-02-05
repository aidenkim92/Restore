import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";


// Used destructuring by using {products,addProduct} instead of 'props'
export default function Catalog(){
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded,status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if(!productsLoaded) dispatch(fetchProductsAsync());
    },[productsLoaded,dispatch]) 
    
    // if the dependency is empty array, then
    // adding up the emtpy array dependency here will prevent happening that causes the endless looping - which means it renders only once. 
    // React redenders when the products list is being added, and the .then(data => setProducts(data)) will add the component and re-render.
    // Hence, without having the empty array will trigger re-rendering infinitely
  
    if(status.includes("pending")) return <LoadingComponent message="Loading Product..."/>

    return(
        <>
            <ProductList products={products}/>
        </>
    )
}