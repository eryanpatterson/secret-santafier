import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home'


function App() {
  return (
    <Layout>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        {/*<Route path="/submit">
          <Submit />
        </Route>
        <Route path="/group">
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
