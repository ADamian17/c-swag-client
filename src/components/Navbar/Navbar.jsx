import { useState } from 'react';
import { Menu } from 'semantic-ui-react'

import { useWindowSize } from '../../hooks/useWinddowSize';

import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const windowSize = useWindowSize()

  return (
    <Menu pointing secondary>
      <Menu.Item
        name='home'
        href='/' />
      <Cart />
    </Menu>
  )
}

export default Navbar;
