import { useState } from 'react';
import { Menu } from 'semantic-ui-react'

import { useWindowSize } from '../../hooks/useWinddowSize';

import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

import Cart from '../Cart/Cart';

import './Navbar.scss';

const Navbar = () => {
  const windowSize = useWindowSize()

  return (
    <div class="ui secondary pointing top fixed menu nav__color">
      <Menu.Item
        name='home'
        href='/' />
      <Cart />
    </div>
  )
}

export default Navbar;
