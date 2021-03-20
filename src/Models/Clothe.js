class Clothes {
  static all = async () => {
    const res = await fetch(
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=men_all",
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
}

export default Clothes;
