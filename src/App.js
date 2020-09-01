import React from 'react';
import Login from './components/templateLogin/login'
import Salon from './components/templateSalon/salon';
import Kitchen from './components/templatekitchen/kitchen';
import Garzon from './components/templateGarzon/garzon';
import ChooseArea from './components/templateChooseArea/chooseArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/choose">
          <ChooseArea/>
        </Route>
        <Route path="/garzon">
          <Garzon/>
        </Route>
        <Route path="/kitchen">
          <Kitchen/>
        </Route>
        <Route path="/salon">
          <Salon/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
