import Routes from "./config/routes";

import { useRecoilState } from "recoil";
import { toggleCart } from "./recoil/cart/cart.atoms";

import Navbar from "./components/Navbar/Navbar";
import ContainerComponent from "./components/Container/Container";

import "./App.scss";

const App = () => {
  const [show, setShow] = useRecoilState(toggleCart);

  return (
    <>
      <Navbar />
      <main
        onClick={
          show
            ? () => setShow(!show)
            : () => {
                return;
              }
        }
      >
        <ContainerComponent fluid={true}>
          <Routes />
        </ContainerComponent>
      </main>
    </>
  );
};

export default App;
