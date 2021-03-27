export const truncateString = ( str, range ) => {
  range = parseInt(range);

  if ( range >= str.length ) {
    return str;
  }

  const newFormat = str.substr(0, range);
  return `${newFormat} ...`;
};


/* NOTE add itme to the cart */
export const addItem = ( cartItems, selectedItem ) => {
  const foundItem = cartItems.find( cartItem => cartItem.id === selectedItem.id );

  if( foundItem ) {
    return cartItems.map( cartItem => 
      cartItem.id === selectedItem.id ? 
        { ...cartItem, 
          quantity: cartItem.quantity + 1, 
          total: cartItem.total + selectedItem.price
        } 
          : cartItem 
    );
  }
  
  return [ ...cartItems, { ...selectedItem, quantity: 1, total: selectedItem.price } ];
}

export const removeItem = ( cartItems, selectedItem ) => {

  const foundItem = cartItems.indexOf( selectedItem.id );

  if ( foundItem ) {
    console.log(foundItem)
  }

}
