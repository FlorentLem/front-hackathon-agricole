import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Map from './components/pages/Map/Map';
import Header from './components/elements/Header/Header';

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
