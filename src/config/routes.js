import { Switch, Route } from "react-router-dom";

import ProductsGallery from "../pages/ProductsGallery/ProductsGallery";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsGallery} />
      <Route path="/products/:id" component={ProductDetails} />
    </Switch>
  );
};

export default Routes;
