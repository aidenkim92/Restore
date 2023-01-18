import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {
  const [products,setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  },[]) // adding up the emtpy array dependency here will prevent happening that causes the endless looping - which means it renders only once. 
  // React redenders when the products list is being added, and the .then(data => setProducts(data)) will add the component and re-render.
  // Hence, without having the empty array will trigger re-rendering infinitely

  function addProduct(){
    // setProducts([...products, {name: 'product'+ (products.length + 1), price: (products.length*100)+100}])
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length+101,
        name: 'product'+ (prevState.length + 1), 
        price: (prevState.length*100)+100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
    }])
  }
  
  return (
    <>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
