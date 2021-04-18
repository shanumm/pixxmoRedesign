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
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h4>Lorem, ipsum dolor.</h4>
            <h5>lorem</h5>
          </div>
          <div className="contact-text3-phone">
            <h5>Lorem, ipsum.</h5>
            <h6>123456789</h6>
          </div>
        </div>
        {/* <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073.5143972670537!2d76.6291030126676!3d28.88436118231899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8583791d7655%3A0x2e4711615033c19b!2spixXmo%20Online%20Services%20Private%20Limited!5e1!3m2!1sen!2sin!4v1618731440252!5m2!1sen!2sin"
            width="100%"
            height="720"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
      <Footer />
    </motion.div>
  );
}
