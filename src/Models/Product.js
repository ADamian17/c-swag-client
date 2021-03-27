class Product {
  static all = async () => {
    const res =  await fetch('https://fakestoreapi.com/products');

    return res.json()
  };

  static show = async ( id ) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    return res.json()
  }
}

export default Product;
