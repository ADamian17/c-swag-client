import { Switch, Route } from "react-router-dom";

import ProductsGallery from "../pages/ProductsGallery/ProductsGallery";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Checkout from "../pages/Checkout/Checkout.jsx";
import Test from "../pages/Test";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsGallery} />
      <Route path="/products/:id" component={ProductDetails} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/test" component={Test} />
    </Switch>
  );
};

export default Routes;
