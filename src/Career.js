import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import simpleParallax from "simple-parallax-js";
import PIXXMO from "./TBGW_port.png";

import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

export default function Career() {
  useEffect(() => {
    var image = document.querySelector(".career-landing-img img");
    new simpleParallax(image);
  });

  return (
    <motion.div
      className="career-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div>
        <div className="career-landing">
          <div className="noise-background"></div>
          <div className="career-logo">
            <img src={PIXXMO} />
          </div>
          <div className="career-content">
            <div>
              <div className="career-content-heading">
                pixXmo Careers<span>Coming Soon</span>
              </div>
              <div className="radial-line"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
