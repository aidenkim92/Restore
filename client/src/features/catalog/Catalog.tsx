import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

interface Props{
    products: Product[];
    addProduct:() => void;
}

// Used destructuring by using {products,addProduct} instead of 'props'
export default function Catalog({products, addProduct}: Props){
    return(
        <>
            <ProductList products={products}/>
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </>
    )
}