import { Switch, Route } from "react-router-dom";

import ClothesGallery from "../pages/ClothesGallery/ClothesGallery";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ClothesGallery} />
    </Switch>
  );
};

export default Routes;
