import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss";

const Header = () => {
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


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
