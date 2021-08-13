
import './App.css';
import Navbar from './components/Navbar'

import {AppProvider} from './global/Context'
import Products from './components/Products';
import Cart from './components/Cart';
import Notfound from './components/Notfound';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <AppProvider>
      <HashRouter>
        <div>
          <Navbar />

          <div className="container">
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
