import { Container } from 'semantic-ui-react'

import Routes from "./config/routes";

import { useRecoilState } from 'recoil';
import { toggleCart } from './recoil/cart/cart.atoms'

import Navbar from './components/Navbar/Navbar';


import "./App.scss";

const App = () => {
  const [ show, setShow ] = useRecoilState(toggleCart);

  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Routes />
        </Container>
      </main>
    </>
  );
};

export default App;
