import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from "./components/pages/Home/Home";
import Header from "./components/elements/Header/Header";
import SelectedMarker from "./components/elements/SelectedMarker/SelectedMarker";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <SelectedMarker role={true} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
