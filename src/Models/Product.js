class Product {
  static all = async () => {
    const res = await fetch(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
      {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
          useQueryString: true,
        },
      }
    );
    return res.json();
  };

  static show = async (productCode) => {
    const res = await fetch(
      `https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=${productCode}&country=us`,
      {
        headers: {
          "x-rapidapi-key":
            "15e17ee08dmsh62fb1686560c453p107df8jsn42ae32d3fd24",
          "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        },
      }
    );
    return res.json();
  };

}

export default Product;
