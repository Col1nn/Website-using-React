import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import FaQsSection from "../FAQsSection/FAQsSection";
import Form from "../Form/Form";
import "../styles/App.css";
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FaQ" exact component={FaQsSection} />
        <Route path="/contact" exact component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
