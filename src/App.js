import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Audio from "./soft.mp3";

import Home from "./Home";
import Service from "./Service";
import Team from "./Team";
import Career from "./Career";
import Client from "./Client";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Try from "./Try";
import About from "./About";
export default function App() {
  return (
    <>
      <Router>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Service} />
            <Route path="/clients" exact component={Client} />
            <Route path="/careers" exact component={Career} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
            {/* <Try /> */}
            <Redirect to="/"></Redirect>
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}
