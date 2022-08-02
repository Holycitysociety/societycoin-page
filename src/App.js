import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import Faq from "./page/faq";

import "./css/App.scss"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </Router>
  );
}
