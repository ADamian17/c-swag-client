import { selector } from 'recoil';

import { cartItems } from './cart.atoms';

export const cartItemsCount = selector({
  key: 'cartItemsCount',
  get: ({ get }) => {
    const items = get(cartItems)
    
    return items;
  } 
})