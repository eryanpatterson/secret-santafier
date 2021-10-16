import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home'
import Register from './components/register';


function App() {
  return (
    <Layout>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/*<Route path="/group">
          <Group />
        </Route>
        <Route path="/result">
          <Result />
        </Route> */}
      </Switch>
    </Router>
    </Layout>
  );
}

export default App;
