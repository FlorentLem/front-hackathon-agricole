import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import Map from './components/pages/Map/Map';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Map} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
