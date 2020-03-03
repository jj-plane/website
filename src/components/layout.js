import React from "react"

import Header from "./header"

import "../styles/global.scss"

const Layout = ({ children }) => {
    return(
        <>
            <Header></Header>
            {children}
        </>
    )
}

export default Layout