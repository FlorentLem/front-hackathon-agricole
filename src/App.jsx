import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
      <Header />
    </Router>
  );
}

export default App;
