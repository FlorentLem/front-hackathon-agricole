import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Map from './components/pages/Map/Map';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Map} />
      </Switch>
    </Router>
  );
};

export default App;
