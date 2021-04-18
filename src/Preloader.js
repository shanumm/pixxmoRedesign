import React from "react";
import "./preloader.css";
export default function Preloader() {
  return (
    <div className="trying">
        <div className='overlay'></div> 
      <div id="loader">
        <svg
          width="274"
          height="275"
          viewBox="0 0 274 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              id="left-half"
              d="M137.5 265C102.624 265 69.1765 251.146 44.5155 226.485C19.8544 201.824 6 168.376 5.99999 133.5C5.99999 98.624 19.8544 65.1765 44.5154 40.5155C69.1765 15.8544 102.624 2.00001 137.5 2.00001"
              stroke="white"
            />
          </g>
          <g>
            <path
              id="right-half"
              d="M137 2C171.876 2 205.324 15.8544 229.985 40.5155C254.646 65.1765 268.5 98.624 268.5 133.5C268.5 168.376 254.646 201.824 229.985 226.485C205.324 251.146 171.876 265 137 265"
              stroke="white"
            />
          </g>
        </svg>
      </div>

      <div id="content">
        <h1>Greetings!</h1>
      </div>
    </div>
  );
}
