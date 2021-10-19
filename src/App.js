import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home'
import Register from './components/register';
import Group from './components/group';


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
        <Route path="/group">
          <Group />
        </Route>
        {/*<Route path="/result">
          <Result />
        </Route> */}
      </Switch>
    </Router>
    </Layout>
  );
}

export default App;
