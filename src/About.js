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
          <div className="nishant">
            <div className="nishant-img-quote">
              <div>
                <img src={Nishant} alt="" />
              </div>
              <span className="quote">
                "<br />{" "}
                <i className="quoteOfNishant">
                  {" "}
                  pixXmo is not just a brand…it’s a manifestation of our vision{" "}
                </i>
                <br /> <span> " </span>
              </span>
            </div>
            <br />
            <br />
            <div>
              Welcome to pixXmo. <br /> The thought that “every pixel has a
              moment” made me express my passion through a digital medium. What
              began as a medium of expression, gradually saw a transformation,
              when I met like-minded people whom I call my family now. The
              journey of one became the journey of many and the collective
              strength brought us here. I am forever grateful to all my team
              members for standing with me in this beautiful never-ending
              journey. We are committed to our art and strive to put our
              creative forces into our work. I cannot express enough gratitude
              to my parents who are and will always be a constant source of
              strength in all my endeavors. <br /> <br /> NISHANT TIWARI <br />{" "}
              Founder
            </div>
          </div>
          <div className="nitesh">
            <div className="nitesh-img-quote">
              <div>
                <img src={Nitesh} alt="" />
              </div>
              <span className="quote">
                "<br />{" "}
                <i className="quoteOfNitesh">
                  {" "}
                  At PixXmo, your pixel will have its best moment.
                </i>
                <br /> <span className="second-quote"> " </span>
              </span>
            </div>
            <br />
            <br />
            <div>
              Welcome to pixXmo. <br /> It is our belief in a seamless
              connection between strategy and creativity, which makes pixXmo
              offer you a service of ultimate satisfaction and brilliance. It
              has been a collective effort of one and all which has brought us
              here together and keeps us dignified as a brand. We deal with
              clients and projects on such a varied scale that it makes this
              experience all the more interesting and keeps us going and doing
              better. We live in an ever transitioning world, where every day is
              a different one. To be on the same wavelength as the change is a
              must to survive. And so we as a collective force ensure growth in
              every way possible. <br /> <br /> Nitesh Nagpal <br /> CTO
            </div>
          </div>
        </div>
      </div>
      <Sphere className="sphereee" />
    </>
  );
}
