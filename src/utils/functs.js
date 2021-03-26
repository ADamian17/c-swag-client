/* NOTE add itme to the cart */
export const addItem = ( cartItems, selectedItem ) => {
  const foundItem = cartItems.find( cartItem => cartItem.code === selectedItem.code );

  if( foundItem ) {
    return cartItems.map( cartItem => 
      cartItem.code === selectedItem.code ? 
        { ...cartItem, 
          quantity: cartItem.quantity + 1, 
          total: cartItem.total + selectedItem.defaultArticle.whitePrice.value
        } 
          : cartItem 
    );
  }
  
  return [...cartItems, { ...selectedItem, quantity: 1, total: selectedItem.defaultArticle.whitePrice.value } ];
}

  
export const truncateString = ( str, range ) => {
  range = parseInt(range);

  if ( range >= str.length ) {
    return str;
  }

  const newFormat = str.substr(0, range);
  return `${newFormat} ...`;
};