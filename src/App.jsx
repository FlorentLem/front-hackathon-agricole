import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import ProfileAgriMobile from "./components/elements/Header/ProfileAgriMobile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
      <Header />
      <ProfileAgriMobile />
    </Router>
  );
}

export default App;
