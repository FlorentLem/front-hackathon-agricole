import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Header from "./components/elements/Header/Header"

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
