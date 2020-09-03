import React from "react";
import Login from "./components/templateLogin/login";
import Kitchen from "./components/templateKitchen/kitchens";
import Area from "./components/templateStart/Start";
import Salon from "./components/TemplateSalon/salon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Garzon from "./components/templateGarzon/garzon";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/area">
          <Area />
        </Route>

        <Route path="/garzon">
          <Garzon />
        </Route>

        <Route path="/kitchen">
          <Kitchen />
        </Route>

        <Route path="/salon">
          <Salon />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
