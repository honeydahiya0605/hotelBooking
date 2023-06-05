import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../src/components/Login/Login";
import SignUpPage from "../src/components/SignUp/SignUp";
import HotelBookingPage from "../src/components/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HotelBookingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default App;
