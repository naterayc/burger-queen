import React from "react";
import Login from "./components/templateLogin/login";
import Kitchen from "./components/templateKitchen/kitchen";
import Hello from "./components/templateStart/Start";
import Salon from "./components/TemplateSalon/Salon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/kitchen">
          <Kitchen />
        </Route>

        <Route path="/Hello">
          <Hello />
        </Route>

        <Route path="/Salon">
          <Salon />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
