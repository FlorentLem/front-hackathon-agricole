import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/elements/Header/Header';
import ProfileAgriMobile from './components/elements/MobileFiche/ProfileAgriMobile';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={ProfileAgriMobile} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
