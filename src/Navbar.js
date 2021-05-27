import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {

  // set up state value for the toggler...
  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // every time the value for showLinks changes, we want to run this useEffect to adjust the height of the links-container
  // based on the number of links...
  useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect();
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          {/* the onClick function sets (toggles) the showLinks state value to the opposite of whatever it currently is */}
          <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* iterate over the "links" array from data.js.... */}
           {links.map((link) =>{
            //  destructure the properties and make them equal the individual link...
             const {id, url, text} = link;
            //  return a <li> for every link that we have...
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
           })}
          </ul>
        </div>

        <ul className="social-icons">
          {/* iterate over the "social" array frpm data.js... */}
          {social.map((socialIcon) =>{
            // destructure the properties and make them equal to socialIcon...
            const {id, url, icon} = socialIcon
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
