export const addItem = ( cartItems, selectedItem ) => {
  const foundItem = cartItems.find( cartItem => cartItem.code === selectedItem.code );

  if( foundItem ) {
    return cartItems.map( cartItem => 
      cartItem.code === selectedItem.code ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem 
    );
  }
  
  return [...cartItems, { ...selectedItem, quantity: 1 } ];
}