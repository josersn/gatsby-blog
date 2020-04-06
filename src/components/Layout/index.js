import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../../styles/global";

import { LayoutWrapper, LayoutMain } from "./styles";
import SideBar from "../SideBar";
import MenuBar from "../MenuBar";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
       <SideBar />
        <LayoutMain>{children}</LayoutMain>
        <GlobalStyle />
        <MenuBar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
