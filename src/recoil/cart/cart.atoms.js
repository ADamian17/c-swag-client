import { atom } from 'recoil';

export const toggleCart = atom({
  key: 'toggleCart',
  default: false
});

export const cartItems = atom({
  key: 'cartItems',
  default: []
});
