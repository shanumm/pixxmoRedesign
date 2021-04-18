import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import PixxmoW from "./TBGW_port.png";
import inView from "in-view";
import W1 from "./portfolio/w1.jpg";
import W2 from "./portfolio/w2.jpg";
import W3 from "./portfolio/w3.jpg";
import W4 from "./portfolio/w4.jpg";
import W5 from "./portfolio/w5.jpg";
import W6 from "./portfolio/w6.jpg";
import W7 from "./portfolio/w7.jpg";
import W8 from "./portfolio/w8.jpg";
import W9 from "./portfolio/w9.jpg";
import W10 from "./portfolio/w10.jpg";
import Indo from "./portfolio/w11.png";
import Pure from "./portfolio/w12.png";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import RainAnimation from "./RainAnimation";

export default function Portfolio() {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const portfolioContainer = document.querySelector(".portfolio-container");
    portfolioContainer.addEventListener("scroll", () => {
      const page1 = document.querySelector(".portfolio-page1");
      const page2 = document.querySelector(".portfolio-page2");
      const page3 = document.querySelector(".portfolio-page3");
      const page4 = document.querySelector(".portfolio-page4");
      const page5 = document.querySelector(".portfolio-page5");
      const pageImage = document.querySelectorAll(".p-p1-content-right-img");
      pageImage.forEach((element) => {
        element.classList.add("extra");
      });
      pageImage.forEach((element) => {
        element.addEventListener("animationend", () => {
          element.classList.remove("extra");
        });
      });

      console.log(page1);
      if (page1.getBoundingClientRect().bottom == windowHeight) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
      if (
        page1.getBoundingClientRect().bottom < windowHeight &&
        page1.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
      if (
        page2.getBoundingClientRect().bottom < windowHeight &&
        page2.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
      if (
        page3.getBoundingClientRect().bottom < windowHeight &&
        page3.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
      if (
        page4.getBoundingClientRect().bottom < windowHeight &&
        page4.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
      if (
        page5.getBoundingClientRect().bottom < windowHeight &&
        page5.getBoundingClientRect().bottom > 0
      ) {
        portfolioContainer.style.background = "black";
        document.querySelector(".cross").style.background = "white";
        document.querySelector(".cross1").style.background = "white";
      }
    });
  });

  return (
    <motion.div
      className="portfolio-page"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/">
        <Cross />
      </Link>
      <div className="portfolio-container">
        <div className="portfolio-page1">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>WEIHZ STAY</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W1} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page2">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>HansConcepts India</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W2} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page3">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W3} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page4">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W4} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page5">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W5} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page6">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>IndoBaijin Chemicals Private Limited</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={Indo} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page7">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>The Pure Earth</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={Pure} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page8">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W6} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page9">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W7} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page10">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W8} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page11">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W9} />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-page12">
          <div className="p-p1-header">
            <img src={PixxmoW} />
          </div>
          <div className="p-p1-content">
            <div className="p-p1-content-left">
              <h1>Lorem</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                exercitationem in doloribus quibusdam, atque accusamus!
              </h3>
              <h4>read more</h4>
            </div>
            <div className="p-p1-content-right">
              <div className="p-p1-content-right-img">
                <img src={W10} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RainAnimation />
    </motion.div>
  );
}
