import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  useEffect(() => {
    var pagePositionNav = document.querySelector(".page-position-nav");
    var pagePositionNavDiv = document.querySelectorAll(
      ".page-position-nav > div "
    );
    pagePositionNav.addEventListener("mouseenter", () => {
      console.log("hello");
    });
  });

  return (
    <div>
      <div className="page-position-nav">
        {/* <div>
          <Link to="/home">
            <div>
              <p>Home</p>
            </div>
          </Link>
        </div> */}
        <div>
          <Link to="/about">
            <div className="positional">
              <p>about</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services">
            <div className="positional">
              <p>our services</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/portfolio">
            <div className="positional">
              <p>portfolio</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/clients">
            <div className="positional">
              <p>client</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/team">
            <div className="positional">
              <p>our team</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/careers">
            <div className="positional">
              <p>career</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <div className="positional">
              <p>contact</p>
            </div>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
