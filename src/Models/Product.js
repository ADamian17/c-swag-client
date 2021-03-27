class Product {
  static all = async () => {
    const res =  await fetch('https://fakestoreapi.com/products?limit=9');

    return res.json()
  };

  static show = async ( id ) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    return res.json()
  }
}

export default Product;
