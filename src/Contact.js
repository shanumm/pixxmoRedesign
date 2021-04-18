import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import anime from "animejs";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import FormSub from "./Form";

export default function Contact() {
  useEffect(() => {
    anime({
      targets: ".contact-text1",
      translateX: [700, 0],
      delay: 1000,
    });
  });
  return (
    <motion.div
      className="contact-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="contact">
        <div className="contact-text1">
          <h1>Calls to action need to be direct!</h1>
        </div>
        <FormSub />
        <div className="contact-text3">
          <div className="contact-text3-info">
            <h4>Address</h4>
            <h5>
              <a href="https://g.page/pixXmo?share" target="_blank">
                977, Sector-1, Rohtak, Haryana-124001
              </a>
            </h5>
          </div>
          <div className="contact-text3-info">
            <h4>E-Mail ID</h4>
            <h5>
              <a href="mailto:contact@pixxmo.com">contact@pixxmo.com</a>
            </h5>
          </div>
          <div className="contact-text3-phone">
            <h4>Phone Number</h4>
            <h5>
              <a href="tel:+91-8318674272">+91-8318674272</a>/
              <a href="tel:+91-9996888764">+91-9996888764</a>
            </h5>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13973.882321368468!2d76.6293766!3d28.8843612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e4711615033c19b!2spixXmo%20Online%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1618757952706!5m2!1sen!2sin"
            width="90%"
            height="780"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
