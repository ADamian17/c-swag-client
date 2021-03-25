import { useState, useEffect } from "react";

/* Model */
import Product from "../Models/Product";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  /* fetch api clothes */
  const fetchProducts = async () => {
    try {
      const res = await Product.all();
      setProducts(res.results);
    } catch (error) {
      console.log(error);
    }
  };

  // when this hook is ran we will run by default the fetchProduct function to update our state
  useEffect(() => {
    fetchProducts();
  }, []);

  // we will return our products state and function to refetch in case we need it
  return [products, setProducts];
};

export default useProduct;
