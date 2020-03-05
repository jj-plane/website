import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/navbar.scss";

const Navbar = () => {
    return(
      <nav>
        <ul id="main-navbar">
            <li>
              <Link to="/">Joshua</Link>
            </li>
            <li className="ml-a">
              <Link to="/all-posts/">All Posts</Link>
            </li>
            <li className="ml-3">
              <Link to="/">Contact Me</Link>
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
