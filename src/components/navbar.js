import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/navbar.scss"

import TwitterIcon from "../images/twitter-icon-green.svg"

const Navbar = () => {
    return(
      <nav>
        <ul id="main-navbar">
            <li>
              <Link to="/">Joshua</Link>
            </li>
            <li className="ml-a">
              <a href="https://twitter.com/JJAggas">
                <img src={TwitterIcon} height="25" width="25" alt="twitter"></img>
              </a>
            </li>
        </ul>
      </nav>
    )
}


Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
