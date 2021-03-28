import { Switch, Route } from "react-router-dom";

import ProductsGallery from "../pages/ProductsGallery/ProductsGallery";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Checkout from "../pages/Checkout/Checkout.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsGallery} />
      <Route path="/products/:id" component={ProductDetails} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
