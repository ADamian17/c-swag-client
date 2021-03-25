import { Switch, Route } from "react-router-dom";

import ProductsGallery from "../pages/ProductsGallery/ProductsGallery";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductsGallery} />
    </Switch>
  );
};

export default Routes;
