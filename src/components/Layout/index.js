import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../../styles/global";

import { LayoutWrapper, LayoutMain } from "./styles";
import SideBar from "../SideBar";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
    <aside > 
      <SideBar />
    </aside> 
        <LayoutMain>{children}</LayoutMain>
        <GlobalStyle />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
