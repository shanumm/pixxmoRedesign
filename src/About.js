import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import anime from "animejs";
import Sphere from "./Sphere";
import Nishant from "./team/nishant.png";
import Nitesh from "./team/nitesh.png";

export default function About() {
  useEffect(() => {
    anime({
      targets: ".about h1",
      translateX: [700, 0],
      delay: 1000,
    });
    anime({
      targets: ".about-content",
      translateX: [-1700, 0],
      delay: 1500,
    });
  });
  return (
    <>
      <div className="about">
        <Link to="/home">
          <Cross />
        </Link>{" "}
        <h1>About us</h1>
        <div className="about-content">
          <i>“Your pixel will have its moment!”</i>
          <br />
          <p>
            With a vision to introduce new, interesting, and pocket-friendly
            opportunities in the market, pixXmo opened its branches to
            alternative possibilities. Our goal is to provide competent, novel,
            and affordable services to all. From striking visuals to artistic
            insights, pixXmo offers designs and handles the work of social media
            posts on a broad spectrum, from posters and advertisements to
            promotional videos and website designs. <br /> <br /> The team at
            pixXmo incorporates individuals with far-reaching capacities to
            contribute effectively to the projects with graphic designing such
            as UI&UX, posters, logos, labels, 3D models, and more to offer. We
            encourage our members to showcase their creative expressions while
            keeping the clients’ insights in mind to bring out a more
            efficacious work.
          </p>
        </div>
        <div className="founders">
          <div className="team-about1">
            <div className="team-about1-image">
              <img src={Nishant} />
            </div>
            <div className="team-about1-text">
              <h1>Nishant Tiwari</h1>
              <h2>Founder and CEO</h2>
              <p></p>
            </div>
          </div>
          <div className="team-about2">
            <div className="team-about2-image">
              <img src={Nitesh} />
            </div>
            <div className="team-about2-text">
              <h1>Nitesh Nagpal</h1>
              <h2>Co-Founder and CTO</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Sphere />
    </>
  );
}
