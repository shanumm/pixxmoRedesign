import React, { useEffect } from "react";
import Cross from "./Cross";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import anime from "animejs";
import Teamimage from "./teamimage.webp";
import img1 from "./Images/drive-download-20210418T131226Z-001/one.png";
import img2 from "./Images/drive-download-20210418T131226Z-001/one2.png";
import img5 from "./Images/drive-download-20210418T131226Z-001/one6.png";
import img7 from "./Images/drive-download-20210418T131226Z-001/one7.png";
import img9 from "./Images/drive-download-20210418T131226Z-001/one9.png";
import img10 from "./Images/drive-download-20210418T131226Z-001/one10.png";
import img11 from "./Images/drive-download-20210418T131226Z-001/one11.png";
import img12 from "./Images/drive-download-20210418T131226Z-001/one12.png";
import img13 from "./Images/drive-download-20210418T131226Z-001/one13.png";
import img14 from "./Images/drive-download-20210418T131226Z-001/one14.png";
import img16 from "./Images/drive-download-20210418T131226Z-001/one16.png";
import img18 from "./Images/drive-download-20210418T131226Z-001/one18.png";
import img19 from "./Images/drive-download-20210418T131226Z-001/one19.png";
import img20 from "./Images/drive-download-20210418T131226Z-001/one20.png";
import img21 from "./Images/drive-download-20210418T131226Z-001/one21.png";
import img22 from "./Images/drive-download-20210418T131226Z-001/one22.png";
import img23 from "./Images/drive-download-20210418T131226Z-001/one23.png";
import img24 from "./Images/drive-download-20210418T131226Z-001/one24.png";
import img25 from "./Images/drive-download-20210418T131226Z-001/one25.png";
import img27 from "./Images/drive-download-20210418T131226Z-001/one27.png";
import img28 from "./Images/drive-download-20210418T131226Z-001/krishya.png";
import img29 from "./Images/drive-download-20210418T131226Z-001/pratham.png";
import img30 from "./Images/drive-download-20210418T131226Z-001/vatsal.png";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import NeonAnimation from "./NeonAnimation";

export default function Team() {
  useEffect(() => {
    anime({
      targets: ".team-about-upper",
      translateX: [-1000, 0],
      delay: 2000,
    });
    anime({
      targets: ".team-header",
      translateX: [700, 0],
      delay: 1000,
    });
  });
  return (
    <motion.div
      className="team-content"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/home">
        <Cross />
      </Link>
      <div className="team">
        <div className="team-header">
          <h1>Our Team</h1>
        </div>
        <div className="team-about-upper">
          <p>
            <i style={{ marginLeft: "1rem", fontWeight: "200" }}>
              Birds of the same feather flock together <br />
            </i>
            Throughout the years, pixXmo grew to become one whole family, all of
            different prowess but simultaneously contributing to deliver quality
            products promptly. Various teams come together to research, write,
            design, develop, implement, and market your product to make your
            dreams into reality. For we know that no one is smart as all of us!
          </p>
        </div>
        <div className="team-about-lower">
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img24} />
            </div>
            <div className="team-about12-text">
              <h1>Paramjot Singh</h1>
              <h2>CDO</h2>
              <p>
                - Building an ever-lasting communication is a never-ending
                process.{" "}
              </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img7} />
            </div>
            <div className="team-about12-text">
              <h1>Aditi Tripathi</h1>
              <h2>Content Head</h2>
              <p>
                - Words are mere allies, it's the thought that needs attention.
              </p>
            </div>
          </div>
          <div className="team-about1">
            <div className="team-about1-image">
              <img src={img10} />
            </div>
            <div className="team-about1-text">
              <h1>Ekta Kaushik</h1>
              <h2>Web developer</h2>
              <p>- Websites are the first impressions that lasts.</p>
            </div>
          </div>
          <div className="team-about2">
            <div className="team-about2-image">
              <img src={img12} />
            </div>
            <div className="team-about2-text">
              <h1>Pushkar Mishra</h1>
              <h2>Web developer</h2>
              <p>- My mantra: Eat, Sleep, Code, Repeat.</p>
            </div>
          </div>
          <div className="team-about3">
            <div className="team-about3-image">
              <img src={img22} />
            </div>
            <div className="team-about3-text">
              <h1>Akhil Rudrawar</h1>
              <h2>Web Developer</h2>
              <p>-Find your passion and its no longer work.</p>
            </div>
          </div>
          <div className="team-about4">
            <div className="team-about4-image">
              <img src={img13} />
            </div>
            <div className="team-about4-text">
              <h1>Arya Patel</h1>
              <h2>Web Developer</h2>
              <p>- It is much more than what you see on the screen.</p>
            </div>
          </div>
          <div className="team-about6">
            <div className="team-about6-image">
              <img src={img28} />
            </div>
            <div className="team-about6-text">
              <h1>Krishya Gaba</h1>
              <h2>content writer</h2>
              <p>
                - Almost all good literature begins with hideous first efforts.
                You have to start somewhere.
              </p>
            </div>
          </div>
          <div className="team-about9">
            <div className="team-about9-image">
              <img src={img25} />
            </div>
            <div className="team-about9-text">
              <h1>Pranav Prakasan</h1>
              <h2>graphic designer</h2>
              <p>- Consider success to be atleast one possible outcome!</p>
            </div>
          </div>
          <div className="team-about10">
            <div className="team-about10-image">
              <img src={img29} />
            </div>
            <div className="team-about10-text">
              <h1>Pratham Shah</h1>
              <h2>graphic designer</h2>
              <p>- Just someone trying not to be just someone</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img5} />
            </div>
            <div className="team-about12-text">
              <h1>Saanya Aroura</h1>
              <h2>Content Writing</h2>
              <p>- Hues of the World through Hues of the Words.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img2} />
            </div>
            <div className="team-about12-text">
              <h1>Sanchi Anilkumar Agarwal</h1>
              <h2>web developer</h2>
              <p>
                - You and I see it differently. It's an on-screen/off-screen
                relation.
              </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img27} />
            </div>
            <div className="team-about12-text">
              <h1>Shashwat Gupta</h1>
              <h2>graphic designer</h2>
              <p>- We create, design, devise, express and set trends. </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img11} />
            </div>
            <div className="team-about12-text">
              <h1>Shruti Agrawal</h1>
              <h2>web developer</h2>
              <p>- A bug is just an unpublished feature! </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img18} />
            </div>
            <div className="team-about12-text">
              <h1>Srujan Jain</h1>
              <h2>digital marketing</h2>
              <p>- Marketing moves matter.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img30} />
            </div>
            <div className="team-about12-text">
              <h1>Vatsal Verma</h1>
              <h2>graphic designer</h2>
              <p>- Graphics transcends creativity.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img1} />
            </div>
            <div className="team-about12-text">
              <h1>Abhishek Singla</h1>
              <h2>digital marketing</h2>
              <p>
                - "Marketing is no longer about the stuff you make, but the
                stories you tell."
              </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img21} />
            </div>
            <div className="team-about12-text">
              <h1>Kritika Jha</h1>
              <h2>Digital marketing</h2>
              <p>- If Marketing is fire, Digital Marketing is gasoline.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img16} />
            </div>
            <div className="team-about12-text">
              <h1>Eshan Jairath</h1>
              <h2>web developer</h2>
              <p>
                - You see the website. I see the codes. We are not the same.
              </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img20} />
            </div>
            <div className="team-about12-text">
              <h1>Priyanka Srivastava </h1>
              <h2>web developer</h2>
              <p>- Creating data driven user experience. </p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img14} />
            </div>
            <div className="team-about12-text">
              <h1>Jaspreet Singh</h1>
              <h2>web developer</h2>
              <p>- It's a coded language.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img19} />
            </div>
            <div className="team-about12-text">
              <h1>Aakarshit Sharma</h1>
              <h2>web developer</h2>
              <p>- Websites promote you round the clock.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img23} />
            </div>
            <div className="team-about12-text">
              <h1>Anubhav Tyagi</h1>
              <h2>web developer</h2>
              <p>- Talk is cheap. Show me the code.</p>
            </div>
          </div>
          <div className="team-about12">
            <div className="team-about12-image">
              <img src={img9} />
            </div>
            <div className="team-about12-text">
              <h1>Sampoorna Kashyap</h1>
              <h2>content writer</h2>
              <p>- It is just a matter of arranging the alphabets.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <NeonAnimation />
    </motion.div>
  );
}
