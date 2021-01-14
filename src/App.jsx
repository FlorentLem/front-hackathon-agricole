import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import Header from "./components/elements/Header/Header";
import SelectedMarker from "./components/elements/SelectedMarker/SelectedMarker";
import ProfileAgriMobile from "../src/components/elements/MobileFiche/ProfileAgriMobile";

const App = () => {
  const marker = [
    {
      Name: "oui",
      role: false,
      type: "marchand"
    },
    {
      farmsize: 1000,
      rate: "Expert",
      role: true,
      date: "2021"
    }
  ];

  return (
    <>
      <Header />
      <Home />
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <SelectedMarker marker={marker[1]} /> */}
            <ProfileAgriMobile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
