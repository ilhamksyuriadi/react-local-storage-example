import './App.css';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <h1>Website Admin</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={DashboardPage} />
          {/* other componenet on the next line
            e.g.:
          <PrivateRoute exact path="/" component={ListCard} /> 
          */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
