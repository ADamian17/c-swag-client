import { Switch, Route } from "react-router-dom";

import ProductsGallery from "../pages/ProductsGallery/ProductsGallery";
import Checkout from "../pages/Checkout/Checkout.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsGallery} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
