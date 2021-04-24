import React, { useEffect } from "react";
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
import "./preloader.css";

import Home from "./Home";
import Service from "./Service";
import Team from "./Team";
import Preloader from "./Preloader";
import Career from "./Career";
import Client from "./Client";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Try from "./Try";
import About from "./About";
import Home1 from "./Home1";
export default function App() {
  useEffect(() => {
    // var source = "https://html5music.herokuapp.com/media/no_words.webm";
    // var audio = new Audio();
    // // audio.addEventListener("load", () => {
    // //   audio.play();
    // // }, true);
    // audio.source = source;
    // audio.autoplay = true;
  });

  return (
    <>
      {/* <Preloader/> */}
      <Router>
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home1" exact component={Home1} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Service} />
            <Route path="/clients" exact component={Client} />
            <Route path="/careers" exact component={Career} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/team" exact component={Team} />
            {/* <Try /> */}
            <Redirect to="/"></Redirect>
          </Switch>
          <audio
            preload="metadata"
            id="myaudio"
            sstyle="display: none;"
            controls
            autoplay
            loop
          >
            <source src="./music.mp3" />
          </audio>
        </AnimatePresence>
      </Router>
    </>
  );
}
