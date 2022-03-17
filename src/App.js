import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppCustomers from './pages/AppCustomers';
import AppProducts from './pages/AppProducts';
function App() {
  return(
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/customers">
            <AppCustomers/>
          </Route>
          <Route exact path="/products">
            <AppProducts/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
