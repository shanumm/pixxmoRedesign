import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ScrollReveal from "scrollreveal";

import Logo1 from "./LOGO/logo1.png";
import Logo2 from "./LOGO/logo2.png";
import Logo3 from "./LOGO/logo3.png";
import Logo4 from "./LOGO/logo4.jpg";
import Logo5 from "./LOGO/logo5.jpg";
import Logo6 from "./LOGO/logo6.jpg";
import Logo7 from "./LOGO/logo7.png";
import Logo8 from "./LOGO/logo8.jpg";
import Logo9 from "./LOGO/logo9.jpg";
import Logo10 from "./LOGO/logo10.jpg";
import Logo11 from "./LOGO/logo11.png";
import Logo12 from "./LOGO/logo12.png";
import Logo13 from "./LOGO/logo13.png";
import Logo14 from "./LOGO/logo14.png";
import Logo15 from "./LOGO/logo15.png";
import Logo16 from "./LOGO/logo16.jpg";
import Logo17 from "./LOGO/logo17.png";
import Logo18 from "./LOGO/logo18.png";

import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Hole from "./Hole";
import { noConflict } from "jquery";

export default function Client() {
  useEffect(() => {
    ScrollReveal().reveal(".client-image", { delay: 500 });
    ScrollReveal().reveal(".client-info-content", {
      delay: 800,
    });
  });

  return (
    <motion.div
      className="client-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="client-landing">
        <div className="client-landing-content">
          <h1>Our Clients</h1>
          <i style={{ marginLeft: "2rem", fontWeight: "200" }}>
            Coming together is beginning, keeping together is progress, working
            together is a success!
          </i>
          <h3>
            We at pixXmo ascertain that your demands are always met. We ensure
            that we always listen to your views, wishes, wants, and needs all
            the while creating an end product which not only aligns to your
            perspective but also allures to your vision.
          </h3>
        </div>
        <div className="client-landing-clientsInfo">
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo1} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img bril">
                <img src={Logo2} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo3} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo4} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo5} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo11} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo7} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo8} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img le">
                <img src={Logo9} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo10} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img old">
                <img src={Logo6} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo12} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo13} />
              </div>
            </div>
            <div className="client-info-content pak">
              <div className="client-image-img">
                <img src={Logo14} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div className="client-image-img">
                <img src={Logo15} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img hans">
                <img src={Logo17} />
              </div>
            </div>
          </div>
          <div>
            <div className="client-image">
              <div
                className="client-image-img"
                style={{ visibility: "hidden" }}
              >
                <img src={Logo17} />
              </div>
            </div>
            <div className="client-info-content">
              <div className="client-image-img">
                <img src={Logo18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hole />
      <Footer />
    </motion.div>
  );
}
