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
    <Router>
    <Layout>
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
      </Switch>
    </Layout>
    </Router>
  );
}

export default App;
