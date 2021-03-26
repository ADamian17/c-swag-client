import { selector } from 'recoil';

import { cartItems } from './cart.atoms';

export const cartItemsCount = selector({
  key: 'cartItemsCount',
  get: ({ get }) => {
    const items = get(cartItems)
    
    return items.reduce( ( acc, item ) => acc + item.quantity, 0 );
  }
});

export const cartItemsTotal = selector({
  key: 'cartItemsTotal',
  get: ({ get }) => {
    const items = get(cartItems).map( item => item.total )
    
    if ( items.length > 0 ) { 
      
      const total = items.reduce( ( acc, item ) => acc + item );
      console.log('from selector', { total })
      return total 
    };

    return 0;
  }
});
