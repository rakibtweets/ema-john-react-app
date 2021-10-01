import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
