import React from "react"

import Navbar from "./navbar"

import "../styles/global.scss"

const Layout = ({ children }) => {
    return(
        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}

export default Layout