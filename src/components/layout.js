/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import PageTransition from "gatsby-plugin-page-transitions"

import Nav from "./nav/nav"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  opacity: 0.95;
  position: relative;
  overflow: hidden;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 8vh 100vh 1fr;
`

const Footer = styled.footer`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: flex-end;
`

const Layout = ({ children }) => {
  return (
    <Wrapper sx={{ backgroundColor: "background" }}>
      <Nav />
      <PageTransition>
        <MainGrid>{children}</MainGrid>
      </PageTransition>
      <Footer>
        <p sx={{ color: "greyLight", mt: 7, mb: 0 }}>
          © {new Date().getFullYear()}, Built by &nbsp;{" "}
          <Link to="https://www.isaacpierce.io" sx={{ fontFamily: "heading" }}>
            {" "}
            Isaac Pierce
          </Link>
        </p>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
